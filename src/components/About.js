import React from 'react';
import profileImg from "./assets/AK.jpg";

export default function About() {
  const cards = [
    { icon: '💻', title: 'Full Stack Developer', desc: 'Building end-to-end web applications with modern technologies.', color: '#5b3cf5' },
    { icon: '⚡', title: 'Focus on Performance', desc: 'Writing clean, optimized and scalable code for better performance.', color: '#f59e0b' },
    { icon: '🔐', title: 'Security-Oriented Development', desc: 'Implementing best practices to build secure and reliable applications.', color: '#10b981' },
    { icon: '🎯', title: 'Real-World Problem Solving', desc: 'Turning ideas into impactful solutions that solve real world problems.', color: '#ec4899' },
  ];

  const stats = [
    { icon: '</>',  num: '2+',   label: 'Years Learning' },
    { icon: '🖥',   num: '10+',  label: 'Projects Built' },
    { icon: '⚙',   num: '5+',   label: 'Technologies' },
    { icon: '❤️',   num: '100%', label: 'Dedication' },
  ];

  return (
    <section id="about" style={{ background: 'none' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.15fr',
          gap: '70px', alignItems: 'center',
        }} className="about-grid">

          {/* LEFT - Photo */}
          <div className="fade-in-left" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Dot pattern */}
            <div className="dots-pattern" style={{ top: '10%', left: '-2%', zIndex: 0 }} />

            {/* Photo frame */}
            <div style={{
  width: "320px",
  height: "380px",
  borderRadius: "30px",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 25px 70px rgba(0,0,0,0.25)",
  transition: "all 0.4s ease"
}}

onMouseEnter={(e)=>{
  e.currentTarget.style.transform="scale(1.05) rotate(-1deg)";
}}
onMouseLeave={(e)=>{
  e.currentTarget.style.transform="scale(1)";
}}
>

  {/* Glow Circle */}
  <div style={{
    position: "absolute",
    width: "280px",
    height: "280px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(91,60,245,0.5), transparent)",
    zIndex: 1
  }} />

  {/* Image */}
  <img
    src={profileImg}
    alt="Ajithkumar"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 2
    }}
  />

  {/* Gradient Overlay */}
  <div style={{
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
    zIndex: 3
  }} />

  {/* Name overlay */}
  <div style={{
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "white",
    zIndex: 4,
    fontWeight: "600",
    fontSize: "18px"
  }}>
    Ajithkumar
  </div>

</div>
            {/* Mini stats card below */}
            <div style={{
              position: 'absolute', bottom: '-18px', left: '50%', transform: 'translateX(-50%)',
              display: 'flex', gap: '10px', zIndex: 3,
            }}>
              {[{ num:'2+', lbl:'Years' },{ num:'10+', lbl:'Projects' },{ num:'5+', lbl:'Tech' }].map(s => (
                <div key={s.lbl} style={{
                  background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.98)',
                  borderRadius: '14px', padding: '10px 16px', textAlign: 'center',
                  boxShadow: '0 8px 24px rgba(91,60,245,0.12)', whiteSpace: 'nowrap',
                }}>
                  <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:'18px', fontWeight:800, color:'#5b3cf5' }}>{s.num}</div>
                  <div style={{ fontSize:'11px', color:'#8b87b8', fontWeight:600 }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="fade-in-right" style={{ paddingTop: '16px' }}>
            <div className="badge">👤 ABOUT</div>
            <h2 className="section-title">About <span>Me</span></h2>
            <div className="section-underline" style={{ margin: '12px 0' }} />
            <p style={{ color: '#5a5585', fontSize: '16px', lineHeight: 1.8, marginBottom: '28px' }}>
              I'm Ajithkumar, an M.Sc. Computer Science student and full-stack developer
              specializing in Java, Spring Boot, and React. I love building modern, responsive,
              and real-world applications that solve problems and create impact.
            </p>

            {/* 4 feature cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
              {cards.map(c => (
                <div key={c.title} className="glass-card" style={{ padding: '20px' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{c.icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1340', marginBottom: '6px' }}>{c.title}</div>
                  <div style={{ fontSize: '12px', color: '#8b87b8', lineHeight: 1.6 }}>{c.desc}</div>
                  <div style={{ width: '28px', height: '2.5px', background: c.color, borderRadius: '2px', marginTop: '12px' }} />
                </div>
              ))}
            </div>

            {/* Stats bar */}
            <div style={{
              display: 'flex', gap: '20px', flexWrap: 'wrap',
              background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.95)',
              borderRadius: '16px', padding: '20px 24px',
              boxShadow: '0 8px 24px rgba(91,60,245,0.08)',
            }}>
              {stats.map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'rgba(91,60,245,0.08)',
                    border: '1px solid rgba(91,60,245,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px', color: '#5b3cf5', fontWeight: 800,
                  }}>{s.icon}</div>
                  <div>
                    <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:'20px', fontWeight:800, color:'#1a1340' }}>{s.num}</div>
                    <div style={{ fontSize:'11px', color:'#8b87b8', fontWeight:600 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:first-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
