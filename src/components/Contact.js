import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── EMAILJS CONFIG - Replace with your actual credentials ───
const EMAILJS = {
  SERVICE_ID:  'service_1leivoi',   // e.g. 'service_abc123'
  TEMPLATE_ID: 'template_enu0y4x', // e.g. 'template_xyz789'
  PUBLIC_KEY:  'Nzki71RiHI8iVOnpq',   // e.g. 'abcDEFghiJKL'
};

// ─── SOCIAL LINKS - Replace with your actual links ───
const SOCIAL = {
  github:    'https://github.com/Ajithkumar1204',
  linkedin:  'https://linkedin.com/in/ajith-kumarma',
  instagram: 'https://instagram.com/_im_aji___??igsh=MWxtY3dnbmhtajZqdA==',
  youtube:   'https://youtube.com/@varattamamey',
 
};


export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const formRef = useRef();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (form.message.trim().length < 10) e.message = 'Min 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, /*to_name: 'Ajithkumar', reply_to: form.email */},
        EMAILJS.PUBLIC_KEY,
      );
      setStatus('success');
      setForm({ name:'', email:'', message:'' });
      setTimeout(() => setStatus(null), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputStyle = (field) => ({
    width:'100%', background:'rgba(255,255,255,0.7)',
    border: errors[field] ? '1.5px solid #ef4444' : '1.5px solid rgba(255,255,255,0.92)',
    borderRadius:'12px', padding:'13px 16px', fontSize:'14px', color:'#1a1340',
    fontFamily:"'Plus Jakarta Sans',sans-serif", outline:'none',
    transition:'all 0.2s', backdropFilter:'blur(8px)',
    boxShadow:'0 2px 10px rgba(91,60,245,0.05)',
  });

  const socials = [
    { label:'GitHub', href: SOCIAL.github, icon: <GHIcon /> },
    { label:'LinkedIn', href: SOCIAL.linkedin, icon: <LIIcon /> },
    { label:'Instagram', href: SOCIAL.instagram, icon: <IGIcon /> },
    { label:'YouTube', href: SOCIAL.youtube, icon: <YTIcon /> },
  ];

  return (
    <section id="contact">
      <div className="container">
        {/* Header */}
        <div className="fade-in" style={{ textAlign:'center', marginBottom:'54px' }}>
          <div className="badge">📩 GET IN TOUCH</div>
          <h2 className="section-title">Let's <span>Work Together</span></h2>
          <div className="section-underline" />
          <p style={{ color:'#5a5585', fontSize:'16px', marginTop:'14px' }}>
            Have a project in mind or want to collaborate?<br/>
            Feel free to reach out. I'd love to hear from you!
          </p>
        </div>

        <div className="contact-grid fade-in" style={{
          display:'grid', gridTemplateColumns:'1fr 1.35fr',
          gap:'36px', alignItems:'start',
        }}>

          {/* LEFT - Contact info */}
          <div>
            {/* Info cards */}
            {[
              { icon:'📧', label:'Email', value:'ajithkumar12204@gmail.com', href:'mailto:ajithkumar12204@gmail.com' },
              { icon:'📞', label:'Phone', value:'+91 9361668265', href:'tel:+919361668265' },
              { icon:'📍', label:'Location', value:'Thanjavur,Tamil Nadu, India', href:'https://google.com/maps?q=Thanjavur+Tamil+Nadu+India'}
            ].map(info => (
              <div key={info.label} style={{
                display:'flex', alignItems:'center', gap:'16px',
                background:'rgba(255,255,255,0.65)', border:'1.5px solid rgba(255,255,255,0.92)',
                borderRadius:'16px', padding:'16px 20px', marginBottom:'12px',
                backdropFilter:'blur(12px)', boxShadow:'0 6px 20px rgba(91,60,245,0.07)',
                transition:'all 0.3s',
              }}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateX(5px)';e.currentTarget.style.borderColor='rgba(91,60,245,0.25)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.borderColor='rgba(255,255,255,0.92)';}}>
                <div style={{
                  width:'44px', height:'44px', borderRadius:'12px', flexShrink:0,
                  background:'rgba(91,60,245,0.08)', border:'1px solid rgba(91,60,245,0.12)',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px',
                }}>{info.icon && info.icon}</div>
                <div>
                  <div style={{ fontSize:'11px', fontWeight:700, color:'#8b87b8', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'2px' }}>{info.label}</div>
                  {info.href
                    ? <a href={info.href} style={{ fontSize:'14px', fontWeight:600, color:'#1a1340', textDecoration:'none' }}
                        onMouseEnter={e=>e.target.style.color='#5b3cf5'}
                        onMouseLeave={e=>e.target.style.color='#1a1340'}>{info.value}</a>
                    : <div style={{ fontSize:'14px', fontWeight:600, color:'#1a1340' }}>{info.value}</div>}
                </div>
              </div>
            ))}

            {/* Social connect */}
            <div style={{ marginTop:'20px' }}>
              <div style={{ fontSize:'14px', fontWeight:700, color:'#1a1340', marginBottom:'6px' }}>Let's Connect</div>
              <div style={{ fontSize:'13px', color:'#8b87b8', marginBottom:'14px' }}>Find me on social media</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'10px' }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                    display:'flex', alignItems:'center', gap:'7px',
                    padding:'9px 15px', borderRadius:'50px',
                    background:'rgba(255,255,255,0.8)', border:'1.5px solid rgba(255,255,255,0.95)',
                    backdropFilter:'blur(8px)', fontSize:'13px', fontWeight:700,
                    color:'#4a4580', textDecoration:'none',
                    boxShadow:'0 4px 12px rgba(91,60,245,0.08)', transition:'all 0.25s',
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.background='linear-gradient(135deg,#5b3cf5,#7b61ff)';e.currentTarget.style.color='white';e.currentTarget.style.transform='translateY(-2px)';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.8)';e.currentTarget.style.color='#4a4580';e.currentTarget.style.transform='';}}>
                    <span style={{ width:'16px', height:'16px', display:'flex', alignItems:'center' }}>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div style={{
            background:'rgba(255,255,255,0.7)', border:'1.5px solid rgba(255,255,255,0.95)',
            borderRadius:'24px', padding:'36px',
            backdropFilter:'blur(16px)', boxShadow:'0 12px 40px rgba(91,60,245,0.1)',
          }}>
            <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'22px', fontWeight:800, color:'#1a1340', marginBottom:'4px' }}>
              Send Me a Message
            </h3>
            <div style={{ width:'36px', height:'2.5px', background:'linear-gradient(90deg,#5b3cf5,#9f7aea)', borderRadius:'2px', marginBottom:'24px' }} />

            {/* Name + Email row */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }} className="form-row">
              <div>
                <label style={{ fontSize:'13px', fontWeight:700, color:'#4a4580', display:'flex', alignItems:'center', gap:'5px', marginBottom:'7px' }}>
                   Name
                </label>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="Enter your name"
                  style={inputStyle('name')}
                  onFocus={e=>{e.target.style.borderColor='#5b3cf5';e.target.style.boxShadow='0 0 0 3px rgba(91,60,245,0.1)';}}
                  onBlur={e=>{e.target.style.borderColor=errors.name?'#ef4444':'rgba(255,255,255,0.92)';e.target.style.boxShadow='0 2px 10px rgba(91,60,245,0.05)';}} />
                {errors.name && <div style={{ fontSize:'11px', color:'#ef4444', marginTop:'4px' }}>❌ {errors.name}</div>}
              </div>
              <div>
                <label style={{ fontSize:'13px', fontWeight:700, color:'#4a4580', display:'flex', alignItems:'center', gap:'5px', marginBottom:'7px' }}>
                   Email
                </label>
                <input name="email" value={form.email} onChange={handleChange} type="email"
                  placeholder="Enter your email"
                  style={inputStyle('email')}
                  onFocus={e=>{e.target.style.borderColor='#5b3cf5';e.target.style.boxShadow='0 0 0 3px rgba(91,60,245,0.1)';}}
                  onBlur={e=>{e.target.style.borderColor=errors.email?'#ef4444':'rgba(255,255,255,0.92)';e.target.style.boxShadow='0 2px 10px rgba(91,60,245,0.05)';}} />
                {errors.email && <div style={{ fontSize:'11px', color:'#ef4444', marginTop:'4px' }}>❌ {errors.email}</div>}
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom:'14px' }}>
              <label style={{ fontSize:'13px', fontWeight:700, color:'#4a4580', display:'flex', alignItems:'center', gap:'5px', marginBottom:'7px' }}>
                  Message
              </label>
              <textarea name="message" value={form.message} onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                style={{ ...inputStyle('message'), resize:'none', display:'block' }}
                onFocus={e=>{e.target.style.borderColor='#5b3cf5';e.target.style.boxShadow='0 0 0 3px rgba(91,60,245,0.1)';}}
                onBlur={e=>{e.target.style.borderColor=errors.message?'#ef4444':'rgba(255,255,255,0.92)';e.target.style.boxShadow='0 2px 10px rgba(91,60,245,0.05)';}} />
              <div style={{ display:'flex', justifyContent:'space-between', marginTop:'4px' }}>
                {errors.message && <div style={{ fontSize:'11px', color:'#ef4444' }}>❌ {errors.message}</div>}
                <div style={{ fontSize:'11px', color:'#8b87b8', marginLeft:'auto' }}>{form.message.length} / 10 min</div>
              </div>
            </div>

            {/* Validation hints */}
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap', marginBottom:'16px' }}>
              {[
                { ok: form.name.trim().length>0, msg:'Name is required' },
                { ok: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email), msg:'Valid email required' },
                { ok: form.message.trim().length>=10, msg:'Min 10 characters' },
              ].map(v => (
                <span key={v.msg} style={{
                  fontSize:'12px', fontWeight:600,
                  color: v.ok ? '#10b981' : '#8b87b8',
                  display:'flex', alignItems:'center', gap:'4px',
                }}>
                  {v.ok ? '✅' : '⭕'} {v.msg}
                </span>
              ))}
            </div>

            {/* Submit button */}
            <button onClick={handleSubmit} disabled={status==='sending'} style={{
              width:'100%', padding:'16px',
              background: status==='sending' ? 'rgba(91,60,245,0.7)' : 'linear-gradient(135deg,#5b3cf5,#7b61ff)',
              color:'white', border:'none', borderRadius:'50px',
              fontSize:'16px', fontWeight:700, cursor: status==='sending' ? 'not-allowed' : 'pointer',
              fontFamily:"'Plus Jakarta Sans',sans-serif",
              boxShadow:'0 8px 28px rgba(91,60,245,0.4)',
              display:'flex', alignItems:'center', justifyContent:'center', gap:'10px',
              transition:'all 0.3s',
            }}
            onMouseEnter={e=>{ if(status!=='sending') e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e=>e.currentTarget.style.transform=''}>
              {status==='sending' ? (
                <><span className="spinner" /> Sending...</>
              ) : '📩 Send Message'}
            </button>

            {/* Toast */}
            {status==='success' && (
              <div style={{
                marginTop:'14px', padding:'14px 18px', borderRadius:'12px',
                background:'rgba(16,185,129,0.1)', border:'1.5px solid rgba(16,185,129,0.3)',
                color:'#059669', fontSize:'14px', fontWeight:600, textAlign:'center',
                animation:'fadeIn 0.3s ease',
              }}>
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status==='error' && (
              <div style={{
                marginTop:'14px', padding:'14px 18px', borderRadius:'12px',
                background:'rgba(239,68,68,0.08)', border:'1.5px solid rgba(239,68,68,0.25)',
                color:'#dc2626', fontSize:'14px', fontWeight:600, textAlign:'center',
                animation:'fadeIn 0.3s ease',
              }}>
                ❌ Failed to send. Please email me directly at ajithkumar12204@gmail.com
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .contact-grid { display: grid !important; }
        @media (max-width:900px) { .contact-grid { grid-template-columns:1fr !important; } }
        @media (max-width:500px) { .form-row { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}

// SVG Icons
function GHIcon(){return <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.06 1.82 2.79 1.29 3.47.99.11-.77.42-1.29.76-1.59-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>;}
function LIIcon(){return <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;}

function IGIcon(){return <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>;}
function YTIcon(){return <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;}

