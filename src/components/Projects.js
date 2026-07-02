import React, { useState } from 'react';
const isMobile = window.innerWidth <768;
// TODO: Update with your real project data
const projects = [
  {
    id: 1,
    num: '01',
    title: 'Enterprise Employee Management System',
    desc: 'Enterprise-grade Employee Management System with JWT Authentication,Role-based access control,analytics and cloud deployement',
    stack: ['React','Java','SpringBoot','MySql','Spring Security(JWT)'],
    demo: 'https://employee-management-systemz.netlify.app',
    github: 'https://github.com/Ajithkumar1204/Employee-Management-System',
    type: 'project',
    emoji: '🚀',
  },
  {
    id: 2,
    num: '02',
    title: 'E-Commerce Website',
    desc: 'A full-featured e-commerce platform built with React, Spring Boot, and MySQL.',
    stack: ['React', 'Spring Boot', 'MySQL'],
    demo: '#', // TODO: Add your live demo URL
    github: '#', // TODO: Add your GitHub URL
    type: 'project',
    preview: {
      brand: 'ShopSphere',
      categories: ['Electronics','Fashion','Home & Living','Books'],
      products: ['⌚','📱','📷','🎧'],
    },
  },
  {
    id: 3,
    num: '03',
    title: 'Stay Tuned',
    desc: 'More projects on the way...',
    stack: [],
    demo: '#',
    github: '#',
    type: 'coming-soon',
    emoji: '🎁',
  },
];

const bottomStats = [
  { icon: '🎯', title: 'Real-World Projects', desc: 'Hands-on projects solving real-world problems' },
  { icon: '💻', title: 'Modern Technologies', desc: 'Built using industry-standard tools and frameworks' },
  { icon: '🚀', title: 'Performance Focused', desc: 'Optimized for speed, security and scalability' },
  { icon: '⚡', title: 'Always Learning', desc: 'Continuously exploring new technologies' },
];

export default function Projects() {
  const [current, setCurrent] = useState(1); // start at center

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(projects.length - 1, c + 1));

  return (
    <section id="projects">
      <div className="container">
        {/* Header */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '54px' }}>
          <div className="badge">🚀 PROJECTS</div>
          <h2 className="section-title"><span>Projects</span></h2>
          <div className="section-underline" />
          <p className="section-subtitle" style={{ marginTop: '14px' }}>
            Some things I've been building and exploring
          </p>
        </div>

        {/* Carousel */}
        <div className="fade-in projects-carousel" style={{ position: 'relative', padding: '0 50px' }}>
          {/* Arrow Left */}
          <button onClick={prev} disabled={current === 0} style={{
            position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.85)', border: '1.5px solid rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)', cursor: current === 0 ? 'default' : 'pointer',
            fontSize: '20px', color: current === 0 ? '#c4b5fd' : '#5b3cf5',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(91,60,245,0.12)',
            transition: 'all 0.2s', zIndex: 10, outline: 'none',
          }}>‹</button>

          {/* Cards track */}
          <div style={{
            display: 'flex', gap: '20px', alignItems: 'center',
            justifyContent: 'center', overflow: 'hidden',
          }}>
            {projects.map((p, i) => {
              const isCenter = i === current;
              const isAdjacent = Math.abs(i - current) === 1;
              return (
                <div key={p.id} style={{
                //  flex: isCenter ? '0 0 65%' : '0 0 17%',
                  flex: isMobile ? '0 0 100%' : (isCenter ?'0 0 65%' : '0 0 17%'),
                  minHeight: isMobile ? 'auto':(isCenter ?'360px' : '280px'),
                  borderRadius: '20px',
                  background: isCenter
                    ? 'rgba(255,255,255,0.75)'
                    : 'rgba(255,255,255,0.45)',
                  border: isCenter
                    ? '1.5px solid rgba(255,255,255,0.95)'
                    : '1.5px solid rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: isCenter
                    ? '0 20px 60px rgba(91,60,245,0.15)'
                    : '0 8px 24px rgba(91,60,245,0.07)',
                  transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
                  opacity: isCenter ? 1 : isAdjacent ? 0.7 : 0,
                  transform: isCenter ? 'scale(1)' : 'scale(0.88)',
                  overflow: isMobile ? 'visible':'hidden',
                  display: isCenter || isAdjacent ? 'flex' : 'none',
                  flexDirection: isMobile ? 'column': (isCenter ? 'row' : 'column'),
                  alignItems: isCenter ? 'stretch' : 'center',
                  justifyContent: isCenter ? '' : 'center',
                  cursor: !isCenter ? 'pointer' : 'default',
                }} onClick={() => !isCenter && setCurrent(i)}>

                  {isCenter && p.type === 'project' && (
                    <>
                      {/* Preview left */}
                      <div style={{
                        flex: isMobile ? '100%' : '0 0 55%',
                        background: 'linear-gradient(135deg, rgba(230,225,255,0.6) 0%, rgba(220,235,255,0.4) 100%)',
                        borderRight: '1px solid rgba(255,255,255,0.7)',
                        padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <ProjectPreview p={p} />
                      </div>
                      {/* Info right */}
                      <div style={{ flex: 1, padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
                        <div style={{ fontSize:'12px', fontWeight:700, color:'#5b3cf5', letterSpacing:'1.5px' }}>{p.num}</div>
                        <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'24px', fontWeight:800, color:'#1a1340', lineHeight:1.2 }}>{p.title}</h3>
                        <p style={{ fontSize:'14px', color:'#5a5585', lineHeight:1.7 }}>{p.desc}</p>
                        <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
                          <div style={{ fontSize:'13px', fontWeight:700, color:'#1a1340' }}>Tech Stack</div>
                          <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                            {p.stack.map(s => (
                              <StackBadge key={s} name={s} />
                            ))}
                          </div>
                        </div>
                        <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginTop:'6px' }}>
                          <a href={p.demo} target="_blank" rel="noreferrer" style={{
                            display:'inline-flex', alignItems:'center', gap:'6px',
                            padding:'11px 20px', borderRadius:'50px',
                            background:'linear-gradient(135deg,#5b3cf5,#7b61ff)',
                            color:'white', textDecoration:'none', fontSize:'13px', fontWeight:700,
                            boxShadow:'0 6px 20px rgba(91,60,245,0.35)',
                            transition:'all 0.2s',
                          }}
                          onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
                          onMouseLeave={e=>e.currentTarget.style.transform=''}>
                            🌐 Live Demo ↗
                          </a>
                          <a href={p.github} target="_blank" rel="noreferrer" style={{
                            display:'inline-flex', alignItems:'center', gap:'6px',
                            padding:'11px 20px', borderRadius:'50px',
                            background:'rgba(255,255,255,0.9)', color:'#1a1340',
                            border:'1.5px solid rgba(255,255,255,0.98)',
                            textDecoration:'none', fontSize:'13px', fontWeight:700,
                            boxShadow:'0 4px 14px rgba(0,0,0,0.08)', transition:'all 0.2s',
                          }}
                          onMouseEnter={e=>{e.currentTarget.style.borderColor='#5b3cf5';e.currentTarget.style.color='#5b3cf5';}}
                          onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.98)';e.currentTarget.style.color='#1a1340';}}>
                            ⬡ GitHub
                          </a>
                        </div>
                      </div>
                    </>
                  )}

                  {isCenter && p.type === 'coming-soon' && (
                    <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'16px', padding:'40px' }}>
                      <div style={{ fontSize:'60px', animation:'iconFloat 3s ease-in-out infinite' }}>{p.emoji}</div>
                      <div style={{ fontSize:'12px', fontWeight:700, color:'#5b3cf5', letterSpacing:'1.5px' }}>{p.num}</div>
                      <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'26px', fontWeight:800, color:'#1a1340', textAlign:'center' }}>{p.title}</h3>
                      <p style={{ fontSize:'15px', color:'#8b87b8', textAlign:'center' }}>{p.desc}</p>
                    </div>
                  )}

                  {!isCenter && (
                    <div style={{ padding:'20px', textAlign:'center' }}>
                      <div style={{ fontSize:'11px', fontWeight:700, color:'#9f7aea', letterSpacing:'1.5px', marginBottom:'8px' }}>{p.num}</div>
                      <div style={{ fontSize:'16px', fontWeight:700, color:'#4a4580' }}>{p.title}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Arrow Right */}
          <button onClick={next} disabled={current === projects.length - 1} style={{
            position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.85)', border: '1.5px solid rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            cursor: current === projects.length - 1 ? 'default' : 'pointer',
            fontSize: '20px', color: current === projects.length - 1 ? '#c4b5fd' : '#5b3cf5',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(91,60,245,0.12)',
            transition: 'all 0.2s', zIndex: 10, outline: 'none',
          }}>›</button>

          {/* Dots */}
          <div style={{ display:'flex', justifyContent:'center', gap:'8px', marginTop:'24px' }}>
            {projects.map((_, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? '24px' : '8px',
                height: '8px', borderRadius: '4px',
                background: i === current ? '#5b3cf5' : '#c4b5fd',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }} />
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="proj-stats-grid fade-in" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: '16px', marginTop: '50px',
        }}>
          {bottomStats.map(s => (
            <div key={s.title} style={{
              background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.9)',
              borderRadius: '16px', padding: '22px 18px', textAlign: 'center',
              backdropFilter: 'blur(12px)', boxShadow: '0 6px 20px rgba(91,60,245,0.07)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 12px 32px rgba(91,60,245,0.12)';}}
            onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 6px 20px rgba(91,60,245,0.07)';}}>
              <div style={{ fontSize:'28px', marginBottom:'10px' }}>{s.icon}</div>
              <div style={{ fontSize:'14px', fontWeight:700, color:'#1a1340', marginBottom:'6px' }}>{s.title}</div>
              <div style={{ fontSize:'12px', color:'#8b87b8', lineHeight:1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes iconFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @media (max-width:768px) { .proj-stats-grid { grid-template-columns:repeat(2,1fr) !important; } }
        @media (max-width:480px) { .proj-stats-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}

function ProjectPreview({ p }) {
  if (!p.preview) return null;
  return (
    <div style={{
      background:'rgba(255,255,255,0.8)', borderRadius:'14px',
      padding:'14px', border:'1px solid rgba(255,255,255,0.95)',
      boxShadow:'0 8px 24px rgba(91,60,245,0.1)', width:'100%', maxWidth:'280px',
    }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'10px' }}>
        <span style={{ fontWeight:700, fontSize:'13px', color:'#5b3cf5' }}>{p.preview.brand}</span>
        <div style={{ display:'flex', gap:'6px' }}>
          {['👤','🛒'].map(ic=>(<span key={ic} style={{fontSize:'14px'}}>{ic}</span>))}
        </div>
      </div>
      <div style={{ background:'linear-gradient(135deg,rgba(91,60,245,0.08),rgba(100,160,255,0.08))', borderRadius:'10px', padding:'10px', marginBottom:'10px' }}>
        <div style={{ fontSize:'11px', fontWeight:700, color:'#1a1340', marginBottom:'4px' }}>Discover Amazing Products</div>
        <div style={{ fontSize:'10px', color:'#8b87b8', marginBottom:'8px' }}>Quality products at unbeatable prices</div>
        <div style={{ background:'linear-gradient(135deg,#5b3cf5,#7b61ff)', color:'white', padding:'5px 12px', borderRadius:'20px', fontSize:'10px', fontWeight:700, display:'inline-block' }}>Shop Now →</div>
      </div>
      <div style={{ fontSize:'10px', fontWeight:700, color:'#4a4580', marginBottom:'6px' }}>Featured Categories</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'5px', marginBottom:'8px' }}>
        {p.preview.categories.map(c=>(
          <div key={c} style={{ background:'rgba(91,60,245,0.06)', borderRadius:'7px', padding:'5px 3px', textAlign:'center', fontSize:'9px', color:'#5a5585', fontWeight:600 }}>{c}</div>
        ))}
      </div>
      <div style={{ fontSize:'10px', fontWeight:700, color:'#4a4580', marginBottom:'6px' }}>Best Selling</div>
      <div style={{ display:'flex', gap:'6px' }}>
        {p.preview.products.map(pr=>(
          <div key={pr} style={{ flex:1, background:'rgba(255,255,255,0.9)', borderRadius:'8px', padding:'8px 4px', textAlign:'center', fontSize:'18px', border:'1px solid rgba(91,60,245,0.08)' }}>{pr}</div>
        ))}
      </div>
    </div>
  );
}

function StackBadge({ name }) {
  const icons = { React:'⚛️', 'Spring Boot':'🌿', MySQL:'🗄️', Java:'☕', JavaScript:'🟨' };
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:'5px',
      background:'rgba(91,60,245,0.08)', border:'1.5px solid rgba(91,60,245,0.15)',
      borderRadius:'50px', padding:'6px 12px', fontSize:'12px', fontWeight:700, color:'#5b3cf5',
    }}>
      <span>{icons[name] || '💡'}</span> {name}
    </div>
  );
}
