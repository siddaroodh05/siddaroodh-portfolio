import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

const links = [
  ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Journey', 'journey'], ['Contact', 'contact'],
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-inner page-width" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Siddaroodh, home"><span className="brand-mark">&lt;/&gt;</span><span>SV<span className="brand-period">.</span></span></a>
        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        <div className={`nav-menu${open ? ' nav-menu-open' : ''}`}>
          <div className="nav-links">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}</div>
          <button className="theme-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}<span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button>
        </div>
      </nav>
    </header>
  );
}
