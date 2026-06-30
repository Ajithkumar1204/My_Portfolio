import React, { useEffect, useState } from 'react';

// SOCIAL LINKS - Update these
const SOCIAL = {
  github: 'https://github.com/Ajithkumar1204',
  linkedin: 'https://linkedin.com/in/ajith-kumarma'
};

const roles = ['Full Stack Developer','Frontend & Backend'];

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIdx];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((roleIdx + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      paddingTop: '90px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Dots pattern top right */}
      <div className="dots-pattern" style={{ top: '15%', right: '8%', opacity: 0.6 }} />
      <div className="dots-pattern" style={{ bottom: '20%', left: '5%', opacity: 0.4 }} />

      <div className="container" style={{ width: '100%' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '60px', alignItems: 'center',
        }} className="home-grid">

          {/* LEFT */}
          <div className="fade-in-left" style={{ animationDelay: '0.1s' }}>
            {/* Welcome badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(255,255,255,0.95)',
              backdropFilter: 'blur(12px)',
              padding: '8px 20px', borderRadius: '50px',
              fontSize: '13px', fontWeight: 600, color: '#4a4580',
              marginBottom: '24px',
              boxShadow: '0 4px 16px rgba(91,60,245,0.08)',
            }}>
              👋 Welcome to my portfolio
            </div>

            {/* Main title */}
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(42px, 5.5vw, 68px)',
              fontWeight: 900, lineHeight: 1.05,
              color: '#1a1340', marginBottom: '8px',
            }}>
              Hi, I'm{' '}
              <span style={{
                background: 'linear-gradient(135deg, #5b3cf5, #7b61ff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>AjithKumar</span>{' '}👋
            </h1>

            {/* Typing role */}
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(24px, 3.5vw, 42px)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #5b3cf5, #9f7aea)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '20px', minHeight: '52px',
            }}>
              {displayed}<span style={{
                borderRight: '3px solid #5b3cf5',
                animation: 'blink 0.8s infinite',
                marginLeft: '2px',
              }} />
            </h2>

            <p style={{
              fontSize: '17px', color: '#5a5585',
              lineHeight: 1.7, marginBottom: '32px', maxWidth: '440px',
            }}>
              I build modern, scalable and user-friendly web applications.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
                View Projects →
              </button>
              <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
                Contact Me 
              </button>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {[
                { href: SOCIAL.github, icon: <GithubIcon />, label: 'GitHub' },
                { href: SOCIAL.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn' }
            
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  title={s.label}
                  style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.85)',
                    border: '1px solid rgba(255,255,255,0.95)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#5b3cf5', textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(91,60,245,0.12)',
                    transition: 'all 0.25s ease',
                    backdropFilter: 'blur(8px)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'linear-gradient(135deg,#5b3cf5,#7b61ff)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.85)';
                    e.currentTarget.style.color = '#5b3cf5';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Scroll hint */}
            <div style={{
              marginTop: '40px', display: 'flex', flexDirection: 'column',
              alignItems: 'flex-start', gap: '6px', cursor: 'pointer',
              color: '#8b87b8', fontSize: '12px', fontWeight: 500,
            }} onClick={() => scrollTo('about')}>
              <div style={{
                width: '22px', height: '36px',
                border: '2px solid rgba(91,60,245,0.3)',
                borderRadius: '11px', position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: '5px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px', height: '8px',
                  background: '#5b3cf5', borderRadius: '2px',
                  animation: 'scrollDot 1.5s ease-in-out infinite',
                }} />
              </div>
              Scroll Down
            </div>
          </div>

          {/* RIGHT - Avatar/Visual area */}
          <div className="fade-in-right" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Main ring/platform */}
            <div style={{
              width: '380px', height: '380px',
              background: 'radial-gradient(circle at 40% 30%, rgba(167,139,250,0.35), rgba(99,102,241,0.15))',
              borderRadius: '50%',
              border: '2px solid rgba(167,139,250,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 20px 80px rgba(91,60,245,0.18)',
            }}>
              {/* Rotating dashed ring */}
              <div style={{
                position: 'absolute', inset: '-14px',
                borderRadius: '50%',
                border: '1.5px dashed rgba(91,60,245,0.2)',
                animation: 'rotateSlow 25s linear infinite',
              }} />

              {/* Center content */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                {/* Avatar placeholder - replace with your image */}
                <div style={{
                  width: '220px', height: '260px',
                  background: 'linear-gradient(160deg, rgba(167,139,250,0.4) 0%, rgba(99,102,241,0.2) 100%)',
                  borderRadius: '40% 40% 50% 50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto',
                  border: '2px solid rgba(167,139,250,0.3)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {/* Replace this div with: <img src="your-photo.jpg" alt="AK" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '80px', fontWeight: 900,
                    background: 'linear-gradient(135deg,#5b3cf5,#9f7aea)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>AK</span>
                </div>

                {/* Platform glow */}
                <div style={{
                  width: '200px', height: '20px',
                  background: 'linear-gradient(90deg, transparent, rgba(91,60,245,0.4), transparent)',
                  borderRadius: '50%', margin: '4px auto 0',
                  filter: 'blur(6px)',
                }} />
              </div>

              {/* Floating tech icons */}
              {[
                { icon: '⚛️', label:'React', top: '12%', left: '-5%', delay:'0s' },
                { icon: '☕', label:'Java', top: '10%', right: '-5%', delay:'0.5s' },
                { icon: '🌿', label:'Spring', bottom: '22%', left: '-8%', delay:'1s' },
                { icon: '🗄️', label:'MySQL', bottom: '18%', right: '-6%', delay:'1.5s' },
              ].map((item, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  top: item.top, bottom: item.bottom,
                  left: item.left, right: item.right,
                  width: '58px', height: '58px',
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.95)',
                  borderRadius: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '26px',
                  boxShadow: '0 8px 24px rgba(91,60,245,0.15)',
                  animation: `iconFloat 3s ease-in-out infinite`,
                  animationDelay: item.delay,
                }}>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes scrollDot { 0%,100% { top:5px; opacity:1; } 50% { top:18px; opacity:0.3; } }
        @keyframes rotateSlow { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        @keyframes iconFloat { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
        @media (max-width: 900px) {
          .home-grid { grid-template-columns: 1fr !important; }
          .home-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function GithubIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.06 1.82 2.79 1.29 3.47.99.11-.77.42-1.29.76-1.59-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>;
}
function LinkedinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function TwitterIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"/></svg>;
}
function InstaIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>;
}
