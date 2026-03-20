export default function Landing({ onStart }) {
  return (
    <>
      <style>{css}</style>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo"><span className="lime">✦</span> CareerCraft AI</div>
        <ul className="nav-links">
          <li><a href="#how">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><button className="nav-cta" onClick={onStart}>Try Free →</button></li>
        </ul>
      </nav>

      {/* AD: Top Leaderboard */}
      <div className="ad-zone" style={{paddingTop: 80}}>
        <div className="ad-label">Advertisement</div>
        <div className="ad-slot ad-leaderboard">
          <ins className="adsbygoogle"
            style={{display:"block", width:"100%", height:90}}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="1111111111"
            data-ad-format="horizontal"
            data-full-width-responsive="true"></ins>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="eyebrow">✦ Powered by Claude AI</div>
          <h1 className="hero-title">Your next job starts with the <em>perfect</em> resume.</h1>
          <p className="hero-sub">CareerCraft AI writes tailored resumes and cover letters in seconds — so you spend less time applying and more time interviewing.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={onStart}>✦ Generate My Resume Free</button>
            <a href="#how" className="btn-ghost">See how it works ↓</a>
          </div>
          <div className="proof-row">
            <div className="proof-item"><div className="proof-num">12k+</div><div className="proof-label">Resumes Created</div></div>
            <div className="proof-divider" />
            <div className="proof-item"><div className="proof-num">3×</div><div className="proof-label">More Callbacks</div></div>
            <div className="proof-divider" />
            <div className="proof-item"><div className="proof-num">30s</div><div className="proof-label">Avg. Generation</div></div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {["ATS Optimized","Cover Letters","Job-Tailored","4 Tone Styles","Instant Results","No Templates","AI-Powered",
            "ATS Optimized","Cover Letters","Job-Tailored","4 Tone Styles","Instant Results","No Templates","AI-Powered"].map((t,i) => (
            <div className="marquee-item" key={i}><span className="lime">✦</span> {t}</div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div id="how" className="section">
        <p className="section-label">How it works</p>
        <h2 className="section-title">Three steps to your dream job application.</h2>
        <p className="section-sub">No templates. No fluff. Just you, your experience, and an AI that knows how to make it shine.</p>
        <div className="steps-grid">
          {[
            { n:"01", icon:"📝", t:"Enter your details", d:"Tell us your experience, skills, and the job you're targeting. Paste the job description for best results." },
            { n:"02", icon:"⚡", t:"AI generates instantly", d:"Claude AI crafts a tailored, ATS-optimized resume or cover letter in under 30 seconds." },
            { n:"03", icon:"🚀", t:"Copy & apply", d:"One click to copy. Paste straight into your application. Land more interviews." },
          ].map(s => (
            <div className="step-card" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="step-icon">{s.icon}</div>
              <div className="step-title">{s.t}</div>
              <div className="step-desc">{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div id="features" className="features-wrap">
        <div className="section">
          <p className="section-label">Features</p>
          <h2 className="section-title">Everything you need to stand out.</h2>
          <div className="features-grid">
            {[
              { icon:"🎯", t:"ATS Optimized", d:"Every resume is structured to pass Applicant Tracking Systems — so a human actually reads it." },
              { icon:"✉️", t:"Cover Letters Too", d:"Generate a matching cover letter that sounds like you — not a robot. Personalized to every role." },
              { icon:"🎨", t:"4 Tone Styles", d:"Professional, Confident, Creative, or Concise. Match the vibe of every company culture." },
              { icon:"⚡", t:"30-Second Results", d:"No waiting. No fussing with Word templates. Just fill in a form and get a polished result instantly." },
            ].map(f => (
              <div className="feature-item" key={f.t}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-title">{f.t}</div>
                <div className="feature-desc">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="section">
        <p className="section-label">Testimonials</p>
        <h2 className="section-title">Real people. Real job offers.</h2>
        <p className="section-sub">Join thousands who've upgraded their applications with CareerCraft.</p>
        <div className="testi-grid">
          {[
            { q:"I applied to 10 jobs in one afternoon. Got 4 callbacks within a week. I've never had a hit rate like that before.", name:"Priya M.", role:"UX Designer → Google", e:"👩" },
            { q:"I'm not a great writer. This tool made me sound like one. My cover letters finally feel like ME, not a template.", name:"James R.", role:"Sales Manager → Salesforce", e:"👨" },
            { q:"Worth every penny of the Pro plan. Saved me hours every week during my job search. Landed my dream job in 3 weeks.", name:"Amara S.", role:"Data Analyst → Stripe", e:"👩‍💼" },
          ].map(t => (
            <div className="testi-card" key={t.name}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"{t.q}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.e}</div>
                <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AD: Rectangle */}
      <div className="ad-zone">
        <div className="ad-label">Advertisement</div>
        <div className="ad-slot ad-rectangle">
          <ins className="adsbygoogle"
            style={{display:"block", width:336, height:280}}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="2222222222"
            data-ad-format="rectangle"></ins>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" className="section" style={{textAlign:"center"}}>
        <p className="section-label">Pricing</p>
        <h2 className="section-title">Simple, honest pricing.</h2>
        <p className="section-sub" style={{margin:"0 auto 60px"}}>Start free. Upgrade when you're ready.</p>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-plan">Free</div>
            <div className="price-amount">$0</div>
            <p className="price-desc">Try it out with no commitment.</p>
            <ul className="price-perks">
              {["3 free generations","Resume + Cover Letter","All tone styles"].map(p=><li className="price-perk" key={p}><span className="lime">✦</span> {p}</li>)}
              <li className="price-perk muted"><span className="muted">✦</span> Priority support</li>
            </ul>
            <button className="price-btn price-btn-free" onClick={onStart}>Start for Free</button>
          </div>
          <div className="price-card price-featured">
            <div className="price-badge">MOST POPULAR</div>
            <div className="price-plan">Pro</div>
            <div className="price-amount">$9<span className="price-per">/mo</span></div>
            <p className="price-desc">Everything you need to land the job.</p>
            <ul className="price-perks">
              {["Unlimited generations","Resume + Cover Letter","All tone styles","Priority support"].map(p=><li className="price-perk" key={p}><span className="lime">✦</span> {p}</li>)}
            </ul>
            <button className="price-btn price-btn-pro" onClick={() => window.open("https://buy.stripe.com/your-link","_blank")}>Upgrade to Pro →</button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-banner">
        <h2 className="cta-title">Your dream job is <em className="lime">one resume away.</em></h2>
        <p className="cta-sub">Start free. No credit card required.</p>
        <button className="btn-primary" onClick={onStart}>✦ Generate My Resume Now</button>
      </div>

      {/* AD: Footer */}
      <div className="ad-zone">
        <div className="ad-label">Advertisement</div>
        <div className="ad-slot ad-leaderboard">
          <ins className="adsbygoogle"
            style={{display:"block", width:"100%", height:90}}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="3333333333"
            data-ad-format="horizontal"
            data-full-width-responsive="true"></ins>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="nav-logo"><span className="lime">✦</span> CareerCraft AI</div>
        <div className="footer-links">
          <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a>
        </div>
        <div className="footer-copy">© 2026 CareerCraft AI. Powered by Claude.</div>
      </footer>
    </>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{background:#0b0c10;color:#e8e4d9;font-family:'DM Sans',sans-serif;overflow-x:hidden;}
  .lime{color:#c8f060;}
  .muted{color:#3a3a4a;}
  .nav{position:fixed;top:0;left:0;right:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:20px 60px;background:rgba(11,12,16,0.85);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,0.07);}
  .nav-logo{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;display:flex;align-items:center;gap:8px;}
  .nav-links{display:flex;align-items:center;gap:32px;list-style:none;}
  .nav-links a{color:#6a7a6e;text-decoration:none;font-size:14px;transition:color 0.2s;}
  .nav-links a:hover{color:#e8e4d9;}
  .nav-cta{background:#c8f060;color:#0b0c10;font-weight:700;padding:9px 22px;border-radius:40px;border:none;cursor:pointer;font-family:inherit;font-size:14px;}
  .ad-zone{max-width:900px;margin:20px auto;padding:0 60px;text-align:center;}
  .ad-label{font-size:10px;color:#3a3a4a;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px;}
  .ad-slot{background:rgba(255,255,255,0.02);border:1px dashed rgba(255,255,255,0.07);border-radius:12px;display:flex;align-items:center;justify-content:center;overflow:hidden;}
  .ad-leaderboard{min-height:90px;}
  .ad-rectangle{min-height:280px;max-width:336px;margin:0 auto;}
  .hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 40px 80px;overflow:hidden;}
  .hero-glow{position:absolute;width:700px;height:700px;background:radial-gradient(circle,rgba(200,240,96,0.07) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;}
  .hero-content{position:relative;z-index:1;max-width:800px;}
  .eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(200,240,96,0.08);border:1px solid rgba(200,240,96,0.2);border-radius:40px;padding:6px 16px;font-size:12px;font-weight:500;color:#c8f060;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:32px;}
  .hero-title{font-family:'Playfair Display',serif;font-size:clamp(42px,7vw,82px);font-weight:900;line-height:1.05;color:#f0ece0;margin-bottom:24px;}
  .hero-title em{font-style:italic;color:#c8f060;}
  .hero-sub{font-size:18px;font-weight:300;color:#6a7a6e;line-height:1.7;max-width:540px;margin:0 auto 44px;}
  .hero-actions{display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;}
  .btn-primary{background:linear-gradient(135deg,#c8f060,#7ecba1);color:#0b0c10;font-family:'DM Sans',sans-serif;font-weight:700;font-size:15px;padding:16px 36px;border-radius:50px;border:none;cursor:pointer;transition:transform 0.2s,opacity 0.2s;}
  .btn-primary:hover{transform:translateY(-2px);opacity:0.9;}
  .btn-ghost{color:#6a7a6e;font-size:14px;text-decoration:none;transition:color 0.2s;}
  .btn-ghost:hover{color:#e8e4d9;}
  .proof-row{margin-top:60px;display:flex;align-items:center;justify-content:center;gap:32px;flex-wrap:wrap;}
  .proof-item{display:flex;flex-direction:column;align-items:center;}
  .proof-num{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#c8f060;}
  .proof-label{font-size:12px;color:#6a7a6e;letter-spacing:0.06em;text-transform:uppercase;}
  .proof-divider{width:1px;height:40px;background:rgba(255,255,255,0.08);}
  .marquee-wrap{overflow:hidden;border-top:1px solid rgba(255,255,255,0.07);border-bottom:1px solid rgba(255,255,255,0.07);padding:18px 0;background:rgba(200,240,96,0.02);}
  .marquee-track{display:flex;gap:60px;animation:marquee 22s linear infinite;white-space:nowrap;}
  .marquee-item{font-size:13px;color:#6a7a6e;letter-spacing:0.08em;text-transform:uppercase;display:flex;align-items:center;gap:12px;flex-shrink:0;}
  @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  .section{padding:100px 60px;max-width:1100px;margin:0 auto;}
  .section-label{font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#c8f060;margin-bottom:16px;}
  .section-title{font-family:'Playfair Display',serif;font-size:clamp(30px,4vw,50px);font-weight:700;color:#f0ece0;line-height:1.1;margin-bottom:16px;}
  .section-sub{font-size:16px;color:#6a7a6e;font-weight:300;max-width:500px;line-height:1.7;margin-bottom:60px;}
  .steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
  .step-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:36px 28px;transition:border-color 0.3s,transform 0.3s;}
  .step-card:hover{border-color:rgba(200,240,96,0.25);transform:translateY(-4px);}
  .step-num{font-family:'Playfair Display',serif;font-size:52px;font-weight:900;color:rgba(200,240,96,0.1);line-height:1;margin-bottom:16px;}
  .step-icon{font-size:28px;margin-bottom:16px;}
  .step-title{font-size:18px;font-weight:600;color:#f0ece0;margin-bottom:10px;}
  .step-desc{font-size:14px;color:#6a7a6e;line-height:1.7;}
  .features-wrap{background:rgba(200,240,96,0.02);border-top:1px solid rgba(255,255,255,0.07);border-bottom:1px solid rgba(255,255,255,0.07);}
  .features-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;}
  .feature-item{padding:40px 48px;border-right:1px solid rgba(255,255,255,0.07);border-bottom:1px solid rgba(255,255,255,0.07);transition:background 0.3s;}
  .feature-item:hover{background:rgba(200,240,96,0.03);}
  .feature-icon{font-size:32px;margin-bottom:18px;}
  .feature-title{font-size:18px;font-weight:600;color:#f0ece0;margin-bottom:10px;}
  .feature-desc{font-size:14px;color:#6a7a6e;line-height:1.7;}
  .testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  .testi-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:28px;transition:border-color 0.3s;}
  .testi-card:hover{border-color:rgba(200,240,96,0.2);}
  .testi-stars{color:#c8f060;font-size:14px;margin-bottom:14px;letter-spacing:2px;}
  .testi-quote{font-size:15px;color:#c8c4b8;line-height:1.7;font-style:italic;margin-bottom:20px;}
  .testi-author{display:flex;align-items:center;gap:12px;}
  .testi-avatar{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;background:rgba(200,240,96,0.1);border:1px solid rgba(200,240,96,0.2);}
  .testi-name{font-size:14px;font-weight:600;color:#f0ece0;}
  .testi-role{font-size:12px;color:#6a7a6e;}
  .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;max-width:700px;margin:0 auto;}
  .price-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:40px 36px;position:relative;transition:transform 0.3s;}
  .price-card:hover{transform:translateY(-4px);}
  .price-featured{background:rgba(200,240,96,0.05);border-color:rgba(200,240,96,0.3);}
  .price-badge{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:#c8f060;color:#0b0c10;font-size:10px;font-weight:800;letter-spacing:0.12em;padding:4px 14px;border-radius:20px;white-space:nowrap;text-transform:uppercase;}
  .price-plan{font-size:13px;font-weight:600;color:#6a7a6e;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:12px;}
  .price-amount{font-family:'Playfair Display',serif;font-size:52px;font-weight:700;color:#f0ece0;line-height:1;}
  .price-per{font-size:16px;color:#6a7a6e;}
  .price-desc{font-size:13px;color:#6a7a6e;margin:12px 0 24px;line-height:1.6;}
  .price-perks{list-style:none;margin-bottom:32px;}
  .price-perk{font-size:13px;color:#c8d8c0;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;gap:10px;}
  .price-btn{width:100%;padding:13px;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:opacity 0.2s,transform 0.2s;}
  .price-btn-free{background:transparent;border:1px solid rgba(255,255,255,0.1);color:#6a7a6e;}
  .price-btn-free:hover{border-color:rgba(200,240,96,0.3);color:#c8f060;}
  .price-btn-pro{background:linear-gradient(135deg,#c8f060,#7ecba1);border:none;color:#0b0c10;}
  .price-btn-pro:hover{opacity:0.88;transform:translateY(-1px);}
  .cta-banner{margin:0 60px 80px;background:linear-gradient(135deg,rgba(200,240,96,0.08),rgba(126,203,161,0.05));border:1px solid rgba(200,240,96,0.18);border-radius:28px;padding:70px 60px;text-align:center;}
  .cta-title{font-family:'Playfair Display',serif;font-size:clamp(26px,4vw,46px);font-weight:700;color:#f0ece0;margin-bottom:16px;}
  .cta-sub{font-size:16px;color:#6a7a6e;margin-bottom:36px;}
  .footer{border-top:1px solid rgba(255,255,255,0.07);padding:40px 60px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;}
  .footer-links{display:flex;gap:24px;}
  .footer-links a{font-size:12px;color:#6a7a6e;text-decoration:none;transition:color 0.2s;}
  .footer-links a:hover{color:#e8e4d9;}
  .footer-copy{font-size:12px;color:#3a3a4a;}
  @media(max-width:768px){
    .nav{padding:16px 24px;} .nav-links{display:none;}
    .section{padding:60px 24px;}
    .steps-grid,.testi-grid,.pricing-grid{grid-template-columns:1fr;}
    .features-grid{grid-template-columns:1fr;}
    .cta-banner{margin:0 24px 60px;padding:40px 24px;}
    .footer{padding:28px 24px;flex-direction:column;}
    .ad-zone{padding:0 24px;}
  }
`;
