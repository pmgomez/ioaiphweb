import { useEffect, useRef } from "react";

/**
 * Animated neural-network style background.
 * - Dense node field with long-range links
 * - Faster motion
 * - Mouse interaction: nearby nodes are attracted to the cursor and
 *   a highlighted link fan is drawn from the cursor to nearby nodes.
 */
export function NeuralNetworkBg({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    let nodes: Node[] = [];

    // Mouse in canvas-local coords. -1 = inactive.
    const mouse = { x: -1, y: -1, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // ~2x denser than before
      const density = Math.max(80, Math.floor((width * height) / 8000));
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        r: Math.random() * 1.4 + 0.6,
      }));
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -1;
      mouse.y = -1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);

    const root = getComputedStyle(document.documentElement);
    const primary = root.getPropertyValue("--primary").trim() || "oklch(0.7 0.18 250)";
    const signal = root.getPropertyValue("--signal").trim() || primary;

    const LINK_DIST = 170;
    const MOUSE_DIST = 220;
    let raf = 0;

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // update positions + mouse attraction
      for (const n of nodes) {
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_DIST * MOUSE_DIST && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = (1 - d / MOUSE_DIST) * 0.12;
            n.vx += (dx / d) * f;
            n.vy += (dy / d) * f;
          }
        }
        // gentle damping so velocity stays bounded
        n.vx *= 0.985;
        n.vy *= 0.985;
        // floor speed so the field stays lively
        const sp = Math.hypot(n.vx, n.vy);
        if (sp < 0.35) {
          const a = Math.random() * Math.PI * 2;
          n.vx += Math.cos(a) * 0.05;
          n.vy += Math.sin(a) * 0.05;
        }

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // node-to-node links
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = 1 - Math.sqrt(d2) / LINK_DIST;
            ctx.strokeStyle = `color-mix(in oklab, ${primary} ${Math.round(alpha * 55)}%, transparent)`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // mouse → node links (highlight fan)
      if (mouse.active) {
        ctx.lineWidth = 0.9;
        for (const n of nodes) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_DIST * MOUSE_DIST) {
            const alpha = 1 - Math.sqrt(d2) / MOUSE_DIST;
            ctx.strokeStyle = `color-mix(in oklab, ${signal} ${Math.round(alpha * 80)}%, transparent)`;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
        // cursor glow
        ctx.fillStyle = `color-mix(in oklab, ${signal} 90%, transparent)`;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // nodes
      for (const n of nodes) {
        ctx.fillStyle = `color-mix(in oklab, ${primary} 85%, transparent)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
