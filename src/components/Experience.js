import React, { useState } from 'react';

// TODO: Set your resume URL here
const RESUME_URL = '/resume.pdf';

export default function Experience() {
  const [tab, setTab] = useState('education');

  return (
    <section id="experience">
      <div className="container">
        {/* Header */}
          <div className="fade-in" style={{ textAlign:'center', marginBottom:'54px' }}>
          <div className="badge">🎓 EXPERIENCE & EDUCATION</div>
          <h2 className="section-title">Experience & <span>Education</span></h2>
          <div className="section-underline" />
          <p className="section-subtitle" style={{ marginTop:'14px' }}>
            My academic journey and professional experience
          </p>
        </div>

        <div className="exp-layout fade-in" style={{
          display:'grid', gridTemplateColumns:'160px 1fr',
          gap:'40px', alignItems:'start',
        }}>

          {/* Tabs sidebar */}
          <div style={{ display:'flex', flexDirection:'column', gap:'12px', position:'sticky', top:'96px' }}>
            {[
              { key:'education', icon:'🎓', label:'EDUCATION' },
              { key:'experience', icon:'💼', label:'EXPERIENCE' },
            ].map(t => (
              <button key={t.key} onClick={() => setTab(t.key)} style={{
                display:'flex', flexDirection:'column', alignItems:'center', gap:'8px',
                padding:'18px 12px', borderRadius:'16px',
                background: tab === t.key ? 'rgba(91,60,245,0.1)' : 'rgba(255,255,255,0.6)',
                border: tab === t.key ? '1.5px solid rgba(91,60,245,0.3)' : '1.5px solid rgba(255,255,255,0.92)',
                backdropFilter:'blur(12px)',
                boxShadow: tab === t.key ? '0 8px 24px rgba(91,60,245,0.12)' : '0 4px 14px rgba(91,60,245,0.06)',
                cursor:'pointer', transition:'all 0.3s ease',
              }}>
                <span style={{ fontSize:'28px' }}>{t.icon}</span>
                <span style={{
                  fontSize:'11px', fontWeight:700,
                  color: tab === t.key ? '#5b3cf5' : '#8b87b8',
                  letterSpacing:'0.5px',
                }}>{t.label}</span>
                {tab === t.key && (
                  <div style={{ width:'24px', height:'2px', background:'linear-gradient(90deg,#5b3cf5,#9f7aea)', borderRadius:'2px' }} />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div>
            {/* Education */}
            {tab === 'education' && (
              <div style={{ position:'relative', paddingLeft:'32px' }}>
                {/* Vertical line */}
                <div style={{
                  position:'absolute', left:'8px', top:'20px', bottom:'20px',
                  width:'2px', background:'linear-gradient(180deg,#5b3cf5,#9f7aea,transparent)',
                  borderRadius:'2px',
                }} />

                {[
                  { period:'2021 – 2024', title:'B.Sc. (UG)', org:'Government Arts College, Kumbakonam', cgpa:'8.9 / 10' },
                  { period:'2024 – 2026', title:'M.Sc. Computer Science', org:'Government Arts College, Kumbakonam', cgpa:'8.7 / 10' },
                ].map((item, i) => (
                  <TimelineCard key={i} item={item} type="education" delay={i * 0.1} />
                ))}
              </div>
            )}

            {/* Experience */}
            {tab === 'experience' && (
              <div style={{ position:'relative', paddingLeft:'32px' }}>
                <div style={{
                  position:'absolute', left:'8px', top:'20px', bottom:'20px',
                  width:'2px', background:'linear-gradient(180deg,#5b3cf5,#9f7aea,transparent)',
                  borderRadius:'2px',
                }} />
                <TimelineCard item={{
                  period:'2025',
                  title:'Besant Technologies, Chennai',
                  role:'Internship',
                  desc:'Completed hands-on cource in Java Full Stack development, working with real-world concepts including backend development, frontend integration, and project building.',
                }} type="experience" delay={0} />
              </div>
            )}

            {/* Resume section */}
            <div style={{
              marginTop:'32px',
              background:'rgba(255,255,255,0.65)', border:'1.5px solid rgba(255,255,255,0.92)',
              borderRadius:'20px', padding:'32px',
              backdropFilter:'blur(16px)', boxShadow:'0 10px 32px rgba(91,60,245,0.1)',
              display:'grid', gridTemplateColumns:'1fr auto',
              gap:'24px', alignItems:'center',
            }} className="resume-card">
              <div>
                <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'24px', fontWeight:800, color:'#1a1340', marginBottom:'8px' }}>
                  My Resume
                </h3>
                <div style={{ width:'40px', height:'2.5px', background:'linear-gradient(90deg,#5b3cf5,#9f7aea)', borderRadius:'2px', marginBottom:'10px' }} />
                <p style={{ fontSize:'14px', color:'#5a5585', lineHeight:1.7, maxWidth:'340px' }}>
                  You can view or download my resume to know more about my education, skills, and experience.
                </p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'12px', flexShrink:0 }}>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
                  padding:'12px 24px', borderRadius:'50px', textDecoration:'none',
                  background:'rgba(255,255,255,0.9)', color:'#5b3cf5',
                  border:'1.5px solid rgba(91,60,245,0.2)',
                  fontSize:'14px', fontWeight:700, whiteSpace:'nowrap',
                  boxShadow:'0 4px 14px rgba(91,60,245,0.1)', transition:'all 0.2s',
                }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(91,60,245,0.08)';e.currentTarget.style.borderColor='rgba(91,60,245,0.4)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.9)';e.currentTarget.style.borderColor='rgba(91,60,245,0.2)';}}>
                  👁️ View Resume
                </a>
                <a href="/resume.pdf" download="Ajithkumar_Resume.pdf" style={{
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
                  padding:'12px 24px', borderRadius:'50px', textDecoration:'none',
                  background:'linear-gradient(135deg,#5b3cf5,#7b61ff)', color:'white',
                  fontSize:'14px', fontWeight:700, whiteSpace:'nowrap',
                  boxShadow:'0 6px 20px rgba(91,60,245,0.4)', transition:'all 0.2s',
                }}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 10px 28px rgba(91,60,245,0.55)';}}
                onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 6px 20px rgba(91,60,245,0.4)';}}>
                  ⬇️ Download Resume
                </a>
                <div style={{ textAlign:'center', fontSize:'11px', color:'#8b87b8', fontWeight:600 }}>
                  📄 File Format: PDF
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="fade-in exp-stats" style={{
          display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'16px', marginTop:'50px',
        }}>
          {[
            { icon:'🎓', val:'2', label:'Degrees Earned' },
            { icon:'💼', val:'1', label:'Professional Experience' },
            { icon:'📅', val:'5+', label:'Projects Completed' },
            { icon:'🏆', val:'∞', label:'Continuous Learning' },
          ].map(s => (
            <div key={s.label} style={{
              background:'rgba(255,255,255,0.65)', border:'1px solid rgba(255,255,255,0.92)',
              borderRadius:'16px', padding:'20px 16px', textAlign:'center',
              backdropFilter:'blur(12px)', boxShadow:'0 6px 20px rgba(91,60,245,0.07)',
              transition:'all 0.3s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';}}
            onMouseLeave={e=>{e.currentTarget.style.transform='';}}>
              <div style={{ fontSize:'26px', marginBottom:'6px' }}>{s.icon}</div>
              <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:'24px', fontWeight:900, color:'#5b3cf5' }}>{s.val}</div>
              <div style={{ fontSize:'12px', color:'#8b87b8', marginTop:'4px', fontWeight:600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-layout { display: grid !important; }
        @media (max-width:768px) {
          .exp-layout { grid-template-columns:1fr !important; }
          .exp-layout > div:first-child { flex-direction:row !important; position:static !important; }
          .resume-card { grid-template-columns:1fr !important; }
          .exp-stats { grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function TimelineCard({ item, type, delay }) {
  return (
    <div style={{ position:'relative', marginBottom:'24px', animation:`fadeUp 0.5s ease both`, animationDelay:`${delay}s` }}>
      {/* Dot */}
      <div style={{
        position:'absolute', left:'-28px', top:'22px',
        width:'16px', height:'16px', borderRadius:'50%',
        background:'linear-gradient(135deg,#5b3cf5,#7b61ff)',
        border:'3px solid rgba(255,255,255,0.9)',
        boxShadow:'0 0 12px rgba(91,60,245,0.4)', zIndex:1,
      }} />

      <div style={{
        background:'rgba(255,255,255,0.7)', border:'1.5px solid rgba(255,255,255,0.92)',
        borderRadius:'20px', padding:'26px 28px',
        backdropFilter:'blur(16px)', boxShadow:'0 8px 28px rgba(91,60,245,0.09)',
        display:'grid', gridTemplateColumns:'1fr auto', gap:'20px', alignItems:'start',
        transition:'all 0.3s',
      }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(91,60,245,0.25)';e.currentTarget.style.boxShadow='0 14px 40px rgba(91,60,245,0.13)';}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.92)';e.currentTarget.style.boxShadow='0 8px 28px rgba(91,60,245,0.09)';}}>
        <div>
          {/* Period badge */}
          <div style={{
            display:'inline-flex', background:'rgba(91,60,245,0.08)',
            border:'1px solid rgba(91,60,245,0.18)', borderRadius:'50px',
            padding:'4px 12px', fontSize:'12px', fontWeight:700, color:'#5b3cf5',
            marginBottom:'12px',
          }}>{item.period}</div>

          <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'22px', fontWeight:800, color:'#1a1340', marginBottom:'4px' }}>
            {item.title}
          </h3>

          {type === 'experience' && item.role && (
            <div style={{ fontSize:'14px', fontWeight:700, color:'#5b3cf5', marginBottom:'8px' }}>{item.role}</div>
          )}
          {type === 'education' && (
            <div style={{ fontSize:'14px', color:'#5b3cf5', fontWeight:600, marginBottom:'8px' }}>{item.org}</div>
          )}

          <div style={{ width:'28px', height:'2px', background:'linear-gradient(90deg,#5b3cf5,#9f7aea)', borderRadius:'2px', marginBottom:'12px' }} />

          {type === 'education' && item.cgpa && (
            <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
              <span style={{ fontSize:'13px', color:'#8b87b8', fontWeight:600 }}>CGPA</span>
              <span style={{
                background:'rgba(91,60,245,0.08)', border:'1px solid rgba(91,60,245,0.18)',
                padding:'4px 12px', borderRadius:'50px', fontSize:'13px', fontWeight:700, color:'#5b3cf5',
              }}>{item.cgpa}</span>
            </div>
          )}
          {type === 'experience' && item.desc && (
            <p style={{ fontSize:'14px', color:'#5a5585', lineHeight:1.7 }}>{item.desc}</p>
          )}
        </div>

        {/* Right logo */}
        <div style={{
          width:'72px', height:'72px', borderRadius:'16px', flexShrink:0,
          background: type === 'education' ? 'rgba(91,60,245,0.07)' : 'white',
          border:'1.5px solid rgba(91,60,245,0.12)',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 4px 14px rgba(91,60,245,0.1)',
          overflow:'hidden',
        }}>
          {type === 'education' && <span style={{ fontSize:'34px' }}>🏛️</span>}
          {type === 'experience' && (
            <div style={{ textAlign:'center', padding:'6px' }}>
              <span style={{ fontSize:'20px', fontWeight:900, color:'#5b3cf5' }}>b</span>
              <div style={{ fontSize:'8px', fontWeight:700, color:'#333', lineHeight:1.2 }}>Besant<br/>Tech</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
