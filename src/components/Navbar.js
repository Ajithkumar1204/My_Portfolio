import React, { useState, useEffect } from 'react';

const links = ['Home','About','Skills','Projects','Certificates','Experience','Contact'];


export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Active section detection
      links.forEach(link => {
        const el = document.getElementById(link.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) setActive(link);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '10px 32px' : '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.9)',
        boxShadow: scrolled ? '0 4px 24px rgba(91,60,245,0.08)' : 'none',
        transition: 'all 0.3s ease',
        borderRadius: scrolled ? '0' : '0',
      }}>
        {/* Logo */}
        <a href="#home" onClick={() => handleNav('Home')} style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '28px', fontWeight: 900,
          background: 'linear-gradient(135deg, #5b3cf5, #7b61ff)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          textDecoration: 'none',
        }}>AK</a>

        {/* Desktop Links */}
        <ul style={{
          display: 'flex', gap: '4px', listStyle: 'none',
          alignItems: 'center',
        }} className="nav-desktop">
          {links.map(link => (
            <li key={link}>
              <button onClick={() => handleNav(link)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '14px', fontWeight: 600,
                color: active === link ? '#5b3cf5' : '#4a4580',
                padding: '8px 16px', borderRadius: '50px',
                transition: 'all 0.2s ease',
                position: 'relative',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { if(active !== link) e.target.style.background = 'rgba(91,60,245,0.07)'; }}
              onMouseLeave={e => { if(active !== link) e.target.style.background = 'none'; }}
              >
                {link}
                {active === link && (
                  <span style={{
                    position: 'absolute', bottom: '2px', left: '50%',
                    transform: 'translateX(-50%)',
                    width: '5px', height: '5px', borderRadius: '50%',
                    background: '#5b3cf5', display: 'block',
                  }} />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: Theme toggle + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Theme toggle */}
          <div style={{
            display: 'flex', alignItems: 'center',
            background: isDark ? '#2d2060' : 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(91,60,245,0.15)',
            borderRadius: '50px', padding: '4px', gap: '2px',
            boxShadow: '0 2px 12px rgba(91,60,245,0.1)',
            cursor: 'pointer',
          }} onClick={() => setIsDark(!isDark)}>
            <div style={{
              width: '30px', height: '28px', borderRadius: '50px',
              background: !isDark ? 'linear-gradient(135deg, #5b3cf5, #7b61ff)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', transition: 'all 0.3s',
            }}>☀️</div>
            <div style={{
              width: '30px', height: '28px', borderRadius: '50px',
              background: isDark ? 'linear-gradient(135deg, #5b3cf5, #7b61ff)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', transition: 'all 0.3s',
            }}>🌙</div>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn" style={{
            display: 'none', flexDirection: 'column', gap: '5px',
            background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(91,60,245,0.15)',
            padding: '10px', borderRadius: '10px', cursor: 'pointer',
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                width: '20px', height: '2px',
                background: '#5b3cf5', borderRadius: '2px', display: 'block',
                transformOrigin: 'center',
                transform: menuOpen
                  ? (i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'scaleX(0)')
                  : 'none',
                transition: 'all 0.3s ease',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 999,
          background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(91,60,245,0.1)',
          padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '4px',
          boxShadow: '0 8px 32px rgba(91,60,245,0.12)',
        }}>
          {links.map(link => (
            <button key={link} onClick={() => handleNav(link)} style={{
              background: active === link ? 'rgba(91,60,245,0.08)' : 'none',
              border: 'none', borderRadius: '12px',
              padding: '14px 20px', textAlign: 'left', cursor: 'pointer',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '16px', fontWeight: 600,
              color: active === link ? '#5b3cf5' : '#4a4580',
            }}>{link}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
