import React from 'react';

const skillCategories = [
  {
    icon: '🖥️', title: 'Frontend', color: '#5b3cf5',
    skills: [
      { name:'HTML',       img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name:'CSS',        img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name:'JavaScript', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name:'React',      img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
  },
  {
    icon: '⚙️', title: 'Backend', color: '#5b3cf5',
    skills: [
      { name:'Java',        img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name:'Spring Boot', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    ],
  },
  {
    icon: '🗄️', title: 'Database', color: '#5b3cf5',
    skills: [
      { name:'MySQL', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    icon: '🔧', title: 'Tools', color: '#5b3cf5',
    skills: [
      { name:'Git',     img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name:'VS Code', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ],
  },
  {
    icon: '🎨', title: 'Design', color: '#5b3cf5',
    skills: [
      { name:'Figma', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name:'Canva', emoji:'🎨' },
    ],
  },
  {
    icon: '🔀', title: 'Version Control', color: '#5b3cf5',
    skills: [
      { name:'Git',    img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name:'GitHub', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
  {
    icon: '📦', title: 'Others', color: '#5b3cf5',
    skills: [
      { name:'Postman', emoji:'📮' },
      { name:'JWT',     emoji:'🔑' },
    ],
  },
  {
    icon: '💬', title: 'Languages', color: '#5b3cf5',
    skills: [
      { name:'Java',       img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name:'JavaScript', img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        {/* Header */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '54px' }}>
          {/* Decorative line badge */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
            marginBottom: '14px',
          }}>
            <div style={{ width: '40px', height: '1.5px', background: 'linear-gradient(90deg, transparent, #5b3cf5)' }} />
            <span style={{
              fontSize: '12px', fontWeight: 700, color: '#5b3cf5',
              letterSpacing: '2px', textTransform: 'uppercase',
            }}>SKILLS</span>
            <div style={{ width: '40px', height: '1.5px', background: 'linear-gradient(90deg, #5b3cf5, transparent)' }} />
          </div>
          <h2 className="section-title">My <span>Technical Skills</span></h2>
          <div className="section-underline" />
          <p className="section-subtitle" style={{ marginTop: '14px' }}>
            Technologies and tools I use to build modern and scalable applications.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="fade-in" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '18px',
        }} className="skills-grid fade-in">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} cat={cat} />
          ))}
        </div>

        {/* Bottom decoration */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '12px', marginTop: '40px',
        }}>
          <div style={{ flex: 1, maxWidth: '200px', height: '1.5px', background: 'linear-gradient(90deg, transparent, rgba(91,60,245,0.3))' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#5b3cf5' }} />
          <div style={{ flex: 1, maxWidth: '200px', height: '1.5px', background: 'linear-gradient(90deg, rgba(91,60,245,0.3), transparent)' }} />
        </div>
      </div>

      <style>{`
        .skills-grid { display: grid !important; }
        @media (max-width: 1024px) { .skills-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px)  { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function SkillCard({ cat }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.60)',
      border: '1.5px solid rgba(255,255,255,0.92)',
      borderRadius: '20px',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 6px 24px rgba(91,60,245,0.08)',
      padding: '24px 20px',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(91,60,245,0.14)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 24px rgba(91,60,245,0.08)'; }}>

      {/* Category icon */}
      <div style={{
        width: '54px', height: '54px', borderRadius: '14px',
        background: 'rgba(91,60,245,0.08)',
        border: '1.5px solid rgba(91,60,245,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '26px', marginBottom: '12px',
      }}>
        {cat.icon}
      </div>

      {/* Category title */}
      <div style={{
        fontSize: '15px', fontWeight: 700, color: '#5b3cf5',
        marginBottom: '14px', paddingBottom: '12px',
        borderBottom: '1.5px solid rgba(91,60,245,0.1)',
      }}>{cat.title}</div>

      {/* Skill items */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {cat.skills.map(sk => (
          <div key={sk.name} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.85)',
              border: '1.5px solid rgba(91,60,245,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(91,60,245,0.08)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='scale(1.1)'; e.currentTarget.style.borderColor='rgba(91,60,245,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.borderColor='rgba(91,60,245,0.1)'; }}>
              {sk.img
                ? <img src={sk.img} alt={sk.name} style={{ width:'28px', height:'28px', objectFit:'contain' }}
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
                : null}
              {sk.emoji
                ? <span style={{ fontSize:'22px' }}>{sk.emoji}</span>
                : <span style={{ fontSize:'22px', display:'none' }}>💡</span>}
            </div>
            <span style={{ fontSize:'11px', fontWeight:600, color:'#5a5585', textAlign:'center' }}>{sk.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
