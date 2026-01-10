import { Menubar } from 'primereact/menubar';

import { scrollToId } from '../utils/scrollToId';

export default function NavBar() {
  const items = [
    { label: 'About', command: () => scrollToId('about') },
    { label: 'Services', command: () => scrollToId('services') },
    { label: 'Portfolio', command: () => scrollToId('portfolio') },
  ];

  const start = (
    <button
      type="button"
      className="brand-button"
      onClick={() => scrollToId('home')}
      aria-label="Scroll to top"
    >
      NIBO
    </button>
  );

  return (
    <header className="app-navbar">
      <Menubar model={items} start={start} />
    </header>
  );
}
