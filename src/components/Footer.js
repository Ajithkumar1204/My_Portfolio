import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(255,255,255,0.7)',
      background: 'rgba(255,255,255,0.4)',
      backdropFilter: 'blur(16px)',
      padding: '28px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '12px',
    }}>
      <div style={{ fontSize: '14px', color: '#8b87b8' }}>
        © 2026 <span style={{ color: '#5b3cf5', fontWeight: 700 }}>Ajithkumar</span>. Built with ❤️ and lots of ☕
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '9px 18px', borderRadius: '50px',
          background: 'rgba(255,255,255,0.85)', border: '1.5px solid rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)', cursor: 'pointer',
          fontSize: '13px', fontWeight: 700, color: '#5b3cf5',
          boxShadow: '0 4px 14px rgba(91,60,245,0.1)', transition: 'all 0.2s',
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'linear-gradient(135deg,#5b3cf5,#7b61ff)'; e.currentTarget.style.color = 'white'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'rgba(255,255,255,0.85)'; e.currentTarget.style.color = '#5b3cf5'; }}
      >
        ↑ Back to Top
      </button>
    </footer>
  );
}
