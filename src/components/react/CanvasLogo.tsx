import { useEffect, useRef } from 'react';

const S = 12;
const PAD = 1;
const GAP = 2;

const Y = [
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

const X = [
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
];

function buildGlyph() {
  const pw = Y[0].length + GAP + X[0].length;
  const ph = Y.length;
  const cells: { dr: number; dc: number }[] = [];
  for (let r = 0; r < ph; r++) {
    for (let c = 0; c < Y[0].length; c++)
      if (Y[r][c]) cells.push({ dr: r, dc: c });
    for (let c = 0; c < X[0].length; c++)
      if (X[r][c]) cells.push({ dr: r, dc: Y[0].length + GAP + c });
  }
  return { pw, ph, cells };
}

export default function CanvasLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const glyph = buildGlyph();
    let cols = 0;
    let rows = 0;
    let revealed = new Float32Array();
    const timers: ReturnType<typeof setTimeout>[] = [];

    const cvs = canvas;
    const c = ctx;

    function resize() {
      const rect = cvs.parentElement!.getBoundingClientRect();
      cvs.width = rect.width;
      cvs.height = rect.height;
      cols = Math.floor(cvs.width / S);
      rows = Math.floor(cvs.height / S);
      revealed = new Float32Array(cols * rows);
      timers.forEach((t) => clearTimeout(t));
      timers.length = 0;
      draw();
    }

    function getWorldCells() {
      const ox = Math.floor((cols - glyph.pw) / 2);
      const oy = Math.floor((rows - glyph.ph) / 2);
      return glyph.cells.map(({ dr, dc }) => ({
        col: ox + dc,
        row: oy + dr,
      }));
    }

    function reveal() {
      const cells = getWorldCells().sort(() => Math.random() - 0.5);
      timers.forEach((t) => clearTimeout(t));
      timers.length = 0;
      cells.forEach((cell, i) => {
        timers.push(
          setTimeout(() => {
            if (cell.row >= 0 && cell.row < rows && cell.col >= 0 && cell.col < cols)
              revealed[cell.row * cols + cell.col] = 1;
            draw();
          }, i * 16 + Math.random() * 55),
        );
      });
    }

    function hide() {
      const cells = getWorldCells().sort(() => Math.random() - 0.5);
      timers.forEach((t) => clearTimeout(t));
      timers.length = 0;
      cells.forEach((cell, i) => {
        timers.push(
          setTimeout(() => {
            if (cell.row >= 0 && cell.row < rows && cell.col >= 0 && cell.col < cols)
              revealed[cell.row * cols + cell.col] = 0;
            draw();
          }, i * 11 + Math.random() * 38),
        );
      });
    }

    function draw() {
      c.clearRect(0, 0, cvs.width, cvs.height);
      const isDarkMode = document.documentElement.classList.contains('dark');
      for (let r = 0; r < rows; r++) {
        for (let col = 0; col < cols; col++) {
          const x = col * S + PAD;
          const y = r * S + PAD;
          const w = S - PAD * 2;
          const isRevealed = revealed[r * cols + col];
          if (isDarkMode) {
            c.fillStyle = isRevealed ? '#cccccc' : '#333333';
          } else {
            c.fillStyle = isRevealed ? '#444444' : '#d9d9d9';
          }
          c.fillRect(x, y, w, w);
        }
      }
    }

    canvas.addEventListener('mouseenter', reveal);
    canvas.addEventListener('mouseleave', hide);
    canvas.addEventListener('touchstart', (e: TouchEvent) => {
      e.preventDefault();
      reveal();
    });
    canvas.addEventListener('touchend', (e: TouchEvent) => {
      e.preventDefault();
      hide();
    });
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas.parentElement!);
    const mo = new MutationObserver(() => draw());
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    resize();

    return () => {
      timers.forEach((t) => clearTimeout(t));
      ro.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <div className="self-center h-80 w-80 md:w-auto md:p-2">
      <canvas
        ref={canvasRef}
        style={{ marginInline: 'auto', display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
}
