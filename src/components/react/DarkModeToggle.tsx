import { useEffect, useState } from 'react';

export default function DarkModeToggle({ id, className }: { id: string; className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleToggle() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <button
      id={id}
      onClick={handleToggle}
      aria-label="Toggle dark mode"
      className={`text-sm text-muted-foreground hover:text-foreground no-underline cursor-pointer ${mounted ? '' : ''} ${className ?? ''}`}
    >
      <i className="ph ph-circle-half-tilt"></i>
    </button>
  );
}
