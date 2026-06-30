import React, { useState } from 'react';

const certs = [
  {
    id: 1, title: 'Cloud Foundation', org: 'IBM SkillsBuild', file: '/certificates/cloud fundamentals.pdf', 
    color: '#1e3a5f',
    desc: 'Fundamentals of cloud computing, deployment, and modern infrastructure',
    verified: true,
  },
  {
    id: 2, title: 'MS Fundamentals', org: 'Microsoft', file: '/certificates/ms fundamental.pdf',
    color: '#2d4a1e',
    desc: 'Core skills in Microsoft tools and productivity applications.',
    verified: true,
  },
  {
    id: 3, title: 'Testing & Deployment', org: 'IBM SkillsBuild',file: '/certificates/testing.pdf',
    color: '#1a1a2e',
    desc: 'Hands-on experience in testing, debugging, and deploying web apps.',
    verified: true,
  },
  {
    id: 4, title: 'JavaScript', org: 'IBM SkillsBuild', file: '/certificates/js.pdf',
    color: '#0d2233',
    desc: 'Javascript concepts for building interactive web applications.',
    verified: true,
  },
 
  
];

const certColors = ['#dde8ff','#d8f5e8','#1a1a2e','#0a2040','#2a0a4a','#3d1a1a'];
const certGradients = [
  'linear-gradient(135deg,#e8f0ff,#f0e8ff)',
  'linear-gradient(135deg,#e8fff4,#f0ffe8)',
  'linear-gradient(135deg,#1a1a2e,#2d2d50)',
  'linear-gradient(135deg,#0a2040,#0d3060)',
  'linear-gradient(135deg,#2a0a4a,#4a1a7a)',
  'linear-gradient(135deg,#3d1a1a,#6a2a2a)',
];

const bottomStats = [
  { val: '100%', label: 'Verified Certificates' },
  { val: '6+', label: 'Certificates Earned' },
  { val: '1', label: 'Years of Learning' },
  { val: '✔', label: 'Authentic & Verified' },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates">
      <div className="container">
        {/* Header */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '54px' }}>
          <div className="badge">🎓 CERTIFICATES</div>
          <h2 className="section-title">My <span>Certificates</span></h2>
          <div className="section-underline" />
          <p className="section-subtitle" style={{ marginTop: '14px' }}>
            My verified learning and achievements
          </p>
        </div>

        {/* Grid */}
        <div className="fade-in certs-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px',
        }}>
          {certs.map((c, i) => (
            <CertCard key={c.id} cert={c} gradient={certGradients[i]} onClick={() => setSelected(c)} />
          ))}
        </div>

        {/* Bottom stats */}
        <div className="fade-in" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginTop: '50px',
        }} className="cert-stats fade-in">
          {bottomStats.map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.92)',
              borderRadius: '16px', padding: '20px', textAlign: 'center',
              backdropFilter: 'blur(12px)', boxShadow: '0 6px 20px rgba(91,60,245,0.07)',
            }}>
              <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:'26px', fontWeight:900, color:'#5b3cf5' }}>{s.val}</div>
              <div style={{ fontSize:'12px', color:'#8b87b8', marginTop:'4px', fontWeight:600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}

      <style>{`
        .certs-grid { display: grid !important; }
        .cert-stats { display: grid !important; }
        @media (max-width:900px) { .certs-grid { grid-template-columns:repeat(2,1fr) !important; } }
        @media (max-width:560px) { .certs-grid { grid-template-columns:1fr !important; } .cert-stats { grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}

function CertCard({ cert, gradient, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: 'rgba(255,255,255,0.65)', border: '1.5px solid rgba(255,255,255,0.92)',
      borderRadius: '20px', overflow: 'hidden', cursor: 'pointer',
      backdropFilter: 'blur(16px)', boxShadow: '0 8px 28px rgba(91,60,245,0.09)',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-5px)';e.currentTarget.style.boxShadow='0 18px 48px rgba(91,60,245,0.16)';}}
    onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 8px 28px rgba(91,60,245,0.09)';}}>

      {/* Certificate image area */}
      <div style={{
        height: '155px', background: gradient,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.5)',
      }}>
        <CertPreviewSVG title={cert.title} />
      </div>

      {/* Info */}
      <div style={{ padding: '18px' }}>
        <div style={{ fontSize:'15px', fontWeight:700, color:'#1a1340', marginBottom:'8px' }}>{cert.title}</div>
        <div style={{ display:'flex', alignItems:'center', gap:'5px', fontSize:'12px', color:'#8b87b8', marginBottom:'4px' }}>
          🏛️ {cert.org}
        </div>
        <div style={{ fontSize:'12px', color:'#8b87b8', marginBottom:'14px' }}>
          📅 {cert.date}
        </div>
        <a href={cert.file} target="_blank"rel="noreferrer" style={{textDecoration:"none"}}>
        <button style={{
          width:'100%', padding:'10px', borderRadius:'50px',
          border:'1.5px solid rgba(91,60,245,0.2)',
          background:'transparent', color:'#5b3cf5',
          fontSize:'13px', fontWeight:700, cursor:'pointer',
          fontFamily:"'Plus Jakarta Sans',sans-serif",
          display:'flex', alignItems:'center', justifyContent:'center', gap:'6px',
          transition:'all 0.2s',
        }}
        onMouseEnter={e=>{e.currentTarget.style.background='linear-gradient(135deg,#5b3cf5,#7b61ff)';e.currentTarget.style.color='white';e.currentTarget.style.borderColor='transparent';}}
        onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='#5b3cf5';e.currentTarget.style.borderColor='rgba(91,60,245,0.2)';}}>
          👁️ View Certificate
        </button>
        </a>
      </div>
    </div>
  );
}

function CertPreviewSVG({ title }) {
  return (
    <svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg" style={{ width:'90%', maxWidth:'220px' }}>
      {/* Certificate frame */}
      <rect x="2" y="2" width="236" height="126" rx="8" fill="white" fillOpacity="0.92" stroke="rgba(91,60,245,0.15)" strokeWidth="1.5"/>
      {/* Left accent bar */}
      <rect x="2" y="2" width="28" height="126" rx="8" fill="url(#cgradient)" />
      <rect x="22" y="2" width="6" height="126" fill="url(#cgradient)" />
      {/* Gold circle */}
      <circle cx="195" cy="85" r="22" fill="url(#goldGrad)" />
      <circle cx="195" cy="85" r="17" fill="none" stroke="#b8860b" strokeWidth="1.5"/>
      <text x="195" y="90" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">★</text>
      {/* Text lines */}
      <text x="50" y="35" fill="rgba(91,60,245,0.5)" fontSize="7" fontWeight="700" letterSpacing="1">CERTIFICATE OF COMPLETION</text>
      <text x="50" y="52" fill="#4a4580" fontSize="7.5">This is to certify that</text>
      <text x="50" y="68" fill="#5b3cf5" fontSize="13" fontWeight="800" fontFamily="serif" fontStyle="italic">Ajithkumar</text>
      <text x="50" y="82" fill="#4a4580" fontSize="7">has successfully completed the</text>
      <text x="50" y="94" fill="#1a1340" fontSize="8" fontWeight="700">{title.length > 22 ? title.slice(0,22)+'...' : title}</text>
      <text x="50" y="106" fill="#4a4580" fontSize="6.5">course with distinction.</text>
      {/* Signature line */}
      <line x1="50" y1="118" x2="130" y2="118" stroke="rgba(91,60,245,0.3)" strokeWidth="1"/>
      <text x="90" y="126" textAnchor="middle" fill="#8b87b8" fontSize="6">Authorised Signatory</text>
      <defs>
        <linearGradient id="cgradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5b3cf5"/>
          <stop offset="100%" stopColor="#7b61ff"/>
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd700"/>
          <stop offset="100%" stopColor="#b8860b"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function CertModal({ cert, onClose }) {
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, zIndex:2000,
      background:'rgba(15,10,40,0.6)', backdropFilter:'blur(8px)',
      display:'flex', alignItems:'center', justifyContent:'center', padding:'20px',
      animation:'fadeIn 0.2s ease',
    }}>
      <div onClick={e=>e.stopPropagation()} style={{
        background:'rgba(255,255,255,0.96)', backdropFilter:'blur(20px)',
        border:'1px solid rgba(255,255,255,0.98)',
        borderRadius:'24px', width:'100%', maxWidth:'480px',
        boxShadow:'0 30px 80px rgba(91,60,245,0.25)',
        animation:'slideUp 0.3s ease',
        overflow:'hidden',
      }}>
        {/* Close btn */}
        <div style={{ display:'flex', justifyContent:'flex-end', padding:'14px 18px 0' }}>
          <button onClick={onClose} style={{
            width:'32px', height:'32px', borderRadius:'50%',
            background:'rgba(91,60,245,0.08)', border:'1px solid rgba(91,60,245,0.15)',
            cursor:'pointer', fontSize:'16px', color:'#5b3cf5',
            display:'flex', alignItems:'center', justifyContent:'center',
            transition:'all 0.2s',
          }}
          onMouseEnter={e=>{e.currentTarget.style.background='#ef4444';e.currentTarget.style.color='white';}}
          onMouseLeave={e=>{e.currentTarget.style.background='rgba(91,60,245,0.08)';e.currentTarget.style.color='#5b3cf5';}}>
            ✕
          </button>
        </div>

        {/* Cert preview in modal */}
        <div style={{
          margin:'0 20px', borderRadius:'14px', overflow:'hidden',
          background:'linear-gradient(135deg,#e8f0ff,#f0e8ff)',
          height:'200px', display:'flex', alignItems:'center', justifyContent:'center',
          border:'1px solid rgba(91,60,245,0.1)',
        }}>
          <CertPreviewSVG title={cert.title} />
        </div>

        {/* Details */}
        <div style={{ padding:'22px 24px 28px' }}>
          <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'22px', fontWeight:800, color:'#1a1340', marginBottom:'12px' }}>{cert.title}</h3>
          <div style={{ display:'flex', gap:'16px', flexWrap:'wrap', marginBottom:'16px' }}>
            <span style={{ fontSize:'13px', color:'#8b87b8', display:'flex', alignItems:'center', gap:'4px' }}>🏛️ {cert.org}</span>
            <span style={{ fontSize:'13px', color:'#8b87b8', display:'flex', alignItems:'center', gap:'4px' }}>📅 {cert.date}</span>
            {cert.verified && <span style={{ fontSize:'13px', color:'#10b981', display:'flex', alignItems:'center', gap:'4px', fontWeight:700 }}>✅ Verified</span>}
          </div>
          <div style={{ fontSize:'13px', fontWeight:700, color:'#1a1340', marginBottom:'8px' }}>Description</div>
          <p style={{ fontSize:'13px', color:'#5a5585', lineHeight:1.7, marginBottom:'20px' }}>{cert.desc}</p>
          <a href={cert.file} download style={{textDecoration:"none"}}>
          <button style={{
            width:'100%', padding:'14px',
            background:'linear-gradient(135deg,#5b3cf5,#7b61ff)',
            color:'white', border:'none', borderRadius:'50px',
            fontSize:'15px', fontWeight:700, cursor:'pointer',
            fontFamily:"'Plus Jakarta Sans',sans-serif",
            boxShadow:'0 6px 24px rgba(91,60,245,0.4)',
            display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
            transition:'all 0.2s',
          }}
          onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
          onMouseLeave={e=>e.currentTarget.style.transform=''}>
            ⬇️ Download Certificate
          </button>
          </a>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:translateY(0);opacity:1} }
      `}</style>
    </div>
  );
}
