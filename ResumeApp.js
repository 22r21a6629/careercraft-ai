import { useState, useEffect } from "react";

const TABS = ["Resume", "Cover Letter"];
const TONES = ["Professional", "Confident", "Creative", "Concise"];
const FREE_LIMIT = 3;
const STORAGE_KEY = "careercraft_uses";

export default function App({ onBack }) {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({ name: "", role: "", experience: "", skills: "", jobDescription: "", tone: "Professional" });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [uses, setUses] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) || "0");
    setUses(stored);
    if (localStorage.getItem("careercraft_paid") === "true") setPaid(true);
  }, []);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const usesLeft = Math.max(0, FREE_LIMIT - uses);
  const isLocked = !paid && uses >= FREE_LIMIT;

  const generate = async () => {
    if (!form.role || !form.experience) return;
    if (isLocked) { setShowPaywall(true); return; }

    setLoading(true);
    setOutput("");

    const newUses = uses + 1;
    setUses(newUses);
    localStorage.setItem(STORAGE_KEY, newUses);

    const isResume = tab === 0;
    const prompt = isResume
      ? `Create a polished, ATS-optimized resume for ${form.name || "the candidate"} applying for ${form.role}.
Experience: ${form.experience}
Skills: ${form.skills}
Job Description: ${form.jobDescription}
Tone: ${form.tone}
Format with sections: Summary, Experience, Skills, Education. Use bullet points. Make it compelling and tailored.`
      : `Write a compelling cover letter for ${form.name || "the candidate"} applying for ${form.role}.
Experience: ${form.experience}
Skills: ${form.skills}
Job Description: ${form.jobDescription}
Tone: ${form.tone}
Keep it 3-4 paragraphs. Make it personal, specific, and memorable.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map((b) => b.text || "").join("\n") || "Something went wrong.";
      setOutput(text);
      if (!paid && newUses >= FREE_LIMIT) setShowPaywall(true);
    } catch (e) {
      setOutput("Error connecting to AI. Please try again.");
    }
    setLoading(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUpgrade = () => {
    // Replace with your real Stripe or Gumroad link
    window.open("https://buy.stripe.com/your-link", "_blank");
    // Demo simulation of paid unlock
    setTimeout(() => {
      setPaid(true);
      localStorage.setItem("careercraft_paid", "true");
      setShowPaywall(false);
    }, 1500);
  };

  return (
    <div style={s.root}>
      <style>{css}</style>

      {/* Paywall Modal */}
      {showPaywall && (
        <div style={s.overlay} onClick={() => output && setShowPaywall(false)}>
          <div style={s.modal} onClick={e => e.stopPropagation()}>
            <div style={s.modalIcon}>🔒</div>
            <h2 style={s.modalTitle}>You've used your 3 free generations</h2>
            <p style={s.modalSub}>Unlock unlimited resumes and cover letters with CareerCraft Pro.</p>
            <div style={s.planCard}>
              <div style={s.planBadge}>MOST POPULAR</div>
              <div style={s.planPrice}>
                <span style={s.planAmount}>$9</span>
                <span style={s.planPer}>/month</span>
              </div>
              <ul style={s.planPerks}>
                {["Unlimited resume generations", "Unlimited cover letters", "All tone styles", "Priority support"].map(p => (
                  <li key={p} style={s.planPerk}>✦ {p}</li>
                ))}
              </ul>
              <button onClick={handleUpgrade} style={s.upgradeBtn} className="upgrade-btn">
                Upgrade to Pro →
              </button>
            </div>
            <p style={s.modalOr}>or</p>
            <button onClick={() => setShowPaywall(false)} style={s.dismissBtn}>
              {output ? "View my result first" : "Maybe later"}
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header style={s.header}>
        {onBack && <button onClick={onBack} style={s.backBtn}>← Back</button>}
        <div style={s.logo}>
          <span style={s.logoIcon}>✦</span>
          <span style={s.logoText}>CareerCraft AI</span>
          {paid && <span style={s.proBadge}>PRO</span>}
        </div>
        <p style={s.tagline}>Land your dream job — in seconds.</p>
      </header>

      {/* Usage Bar */}
      {!paid && (
        <div style={s.usageWrap}>
          <div style={s.usageBar}>
            <div style={{ ...s.usageFill, width: `${Math.min(100, (uses / FREE_LIMIT) * 100)}%` }} />
          </div>
          <p style={s.usageText}>
            {usesLeft > 0
              ? <><span style={s.usageCount}>{usesLeft}</span> free generation{usesLeft !== 1 ? "s" : ""} remaining</>
              : <span style={{ color: "#f06060" }}>Free limit reached — <button onClick={() => setShowPaywall(true)} style={s.upgradeLink}>Upgrade to Pro</button></span>
            }
          </p>
        </div>
      )}

      {/* Tabs */}
      <div style={s.tabRow}>
        {TABS.map((t, i) => (
          <button key={t} onClick={() => { setTab(i); setOutput(""); }} style={{ ...s.tabBtn, ...(tab === i ? s.tabActive : {}) }} className="tab-btn">
            {i === 0 ? "📄" : "✉️"} {t}
          </button>
        ))}
      </div>

      {/* Form Card */}
      <div style={s.card}>
        <div style={s.formGrid}>
          <div style={s.field}>
            <label style={s.label}>Your Name</label>
            <input style={s.input} placeholder="e.g. Alex Johnson" value={form.name} onChange={e => update("name", e.target.value)} className="inp" />
          </div>
          <div style={s.field}>
            <label style={s.label}>Target Job Title <span style={s.req}>*</span></label>
            <input style={s.input} placeholder="e.g. Product Manager" value={form.role} onChange={e => update("role", e.target.value)} className="inp" />
          </div>
        </div>
        <div style={s.field}>
          <label style={s.label}>Your Experience <span style={s.req}>*</span></label>
          <textarea style={s.textarea} rows={3} placeholder="e.g. 3 years as a junior PM at a SaaS startup, led product launches..." value={form.experience} onChange={e => update("experience", e.target.value)} className="inp" />
        </div>
        <div style={s.field}>
          <label style={s.label}>Key Skills</label>
          <input style={s.input} placeholder="e.g. React, Python, leadership, data analysis" value={form.skills} onChange={e => update("skills", e.target.value)} className="inp" />
        </div>
        <div style={s.field}>
          <label style={s.label}>Job Description (paste for best results)</label>
          <textarea style={s.textarea} rows={3} placeholder="Paste the job posting here..." value={form.jobDescription} onChange={e => update("jobDescription", e.target.value)} className="inp" />
        </div>
        <div style={s.field}>
          <label style={s.label}>Tone</label>
          <div style={s.toneRow}>
            {TONES.map(t => (
              <button key={t} onClick={() => update("tone", t)} style={{ ...s.toneBtn, ...(form.tone === t ? s.toneBtnActive : {}) }} className="tone-btn">{t}</button>
            ))}
          </div>
        </div>
        <button onClick={generate} disabled={loading || !form.role || !form.experience} style={{ ...s.generateBtn, ...(isLocked ? s.lockedBtn : {}) }} className="gen-btn">
          {loading ? <span className="spin">⟳</span> : isLocked ? "🔒" : "✦"}{" "}
          {loading ? "Generating..." : isLocked ? "Upgrade to Generate" : `Generate ${TABS[tab]}`}
        </button>
      </div>

      {/* Output */}
      {(output || loading) && (
        <div style={s.outputCard} className="output-card">
          <div style={s.outputHeader}>
            <span style={s.outputTitle}>{TABS[tab]} Draft</span>
            {output && (
              <button onClick={copy} style={s.copyBtn} className="copy-btn">
                {copied ? "✓ Copied!" : "Copy"}
              </button>
            )}
          </div>
          {loading ? (
            <div style={s.loadingBox}>
              <div className="loader" />
              <p style={s.loadingText}>Crafting your {TABS[tab].toLowerCase()}...</p>
            </div>
          ) : (
            <pre style={s.outputText}>{output}</pre>
          )}
        </div>
      )}

      <p style={s.footer}>Powered by Claude AI · CareerCraft © 2026</p>
    </div>
  );
}

const s = {
  backBtn: { position:"absolute", left:24, top:24, background:"transparent", border:"1px solid rgba(255,255,255,0.1)", color:"#6a7a6e", borderRadius:20, padding:"6px 16px", fontSize:13, cursor:"pointer", fontFamily:"inherit" },
  root: { minHeight: "100vh", background: "#0b0c10", backgroundImage: "radial-gradient(ellipse at 20% 10%, #1a1040 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, #0d1f1a 0%, transparent 60%)", fontFamily: "'Georgia', 'Times New Roman', serif", color: "#e8e4d9", padding: "0 0 60px" },
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.78)", backdropFilter: "blur(6px)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 },
  modal: { background: "#13141a", border: "1px solid rgba(200,240,96,0.25)", borderRadius: 24, padding: "40px 36px", maxWidth: 420, width: "100%", textAlign: "center" },
  modalIcon: { fontSize: 40, marginBottom: 16 },
  modalTitle: { fontSize: 22, fontWeight: "700", color: "#f0ece0", margin: "0 0 10px" },
  modalSub: { fontSize: 14, color: "#7a9e7e", margin: "0 0 28px", lineHeight: 1.6 },
  planCard: { background: "rgba(200,240,96,0.05)", border: "1px solid rgba(200,240,96,0.2)", borderRadius: 16, padding: "24px 28px", marginBottom: 16, position: "relative" },
  planBadge: { position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#c8f060", color: "#0b0c10", fontSize: 10, fontWeight: "800", letterSpacing: "0.1em", padding: "3px 12px", borderRadius: 20, whiteSpace: "nowrap" },
  planPrice: { marginBottom: 16 },
  planAmount: { fontSize: 42, fontWeight: "700", color: "#c8f060" },
  planPer: { fontSize: 16, color: "#7a9e7e" },
  planPerks: { listStyle: "none", padding: 0, margin: "0 0 20px", textAlign: "left" },
  planPerk: { fontSize: 13, color: "#c8d8c0", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" },
  upgradeBtn: { width: "100%", background: "linear-gradient(135deg, #c8f060, #7ecba1)", border: "none", borderRadius: 10, padding: "13px", fontSize: 15, fontWeight: "700", color: "#0b0c10", cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.02em" },
  modalOr: { color: "#3a3a4a", fontSize: 12, margin: "12px 0" },
  dismissBtn: { background: "transparent", border: "none", color: "#5a5a6a", fontSize: 13, cursor: "pointer", fontFamily: "inherit", textDecoration: "underline" },
  header: { textAlign: "center", padding: "52px 20px 16px", position:"relative" },
  logo: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 8 },
  logoIcon: { fontSize: 28, color: "#c8f060" },
  logoText: { fontSize: 32, fontWeight: "700", letterSpacing: "-0.5px", color: "#f0ece0" },
  proBadge: { background: "#c8f060", color: "#0b0c10", fontSize: 10, fontWeight: "800", padding: "3px 8px", borderRadius: 20, letterSpacing: "0.08em" },
  tagline: { fontSize: 15, color: "#7a9e7e", letterSpacing: "0.08em", margin: 0, fontStyle: "italic" },
  usageWrap: { maxWidth: 660, margin: "16px auto 4px", padding: "0 20px" },
  usageBar: { height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 10, overflow: "hidden", marginBottom: 8 },
  usageFill: { height: "100%", background: "linear-gradient(90deg, #c8f060, #7ecba1)", borderRadius: 10, transition: "width 0.4s ease" },
  usageText: { fontSize: 12, color: "#5a7a5e", textAlign: "right", margin: 0 },
  usageCount: { color: "#c8f060", fontWeight: "700" },
  upgradeLink: { background: "none", border: "none", color: "#c8f060", cursor: "pointer", fontFamily: "inherit", fontSize: 12, textDecoration: "underline", padding: 0 },
  tabRow: { display: "flex", justifyContent: "center", gap: 12, margin: "20px 0 24px" },
  tabBtn: { background: "transparent", border: "1.5px solid #2a2a35", color: "#7a7a8a", borderRadius: 40, padding: "9px 26px", fontSize: 14, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" },
  tabActive: { background: "#c8f060", borderColor: "#c8f060", color: "#0b0c10", fontWeight: "700" },
  card: { maxWidth: 660, margin: "0 auto 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "32px 36px", backdropFilter: "blur(10px)" },
  formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 },
  field: { marginBottom: 16 },
  label: { display: "block", fontSize: 11, fontWeight: "700", letterSpacing: "0.12em", color: "#7a9e7e", marginBottom: 7, textTransform: "uppercase" },
  req: { color: "#c8f060" },
  input: { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 14px", fontSize: 14, color: "#e8e4d9", outline: "none", fontFamily: "inherit", boxSizing: "border-box", transition: "border-color 0.2s" },
  textarea: { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 14px", fontSize: 14, color: "#e8e4d9", outline: "none", fontFamily: "inherit", resize: "vertical", boxSizing: "border-box", transition: "border-color 0.2s" },
  toneRow: { display: "flex", gap: 8, flexWrap: "wrap" },
  toneBtn: { background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#7a7a8a", borderRadius: 20, padding: "6px 16px", fontSize: 13, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" },
  toneBtnActive: { background: "rgba(200,240,96,0.12)", borderColor: "#c8f060", color: "#c8f060" },
  generateBtn: { width: "100%", marginTop: 8, background: "linear-gradient(135deg, #c8f060, #7ecba1)", border: "none", borderRadius: 12, padding: "14px", fontSize: 15, fontWeight: "700", color: "#0b0c10", cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.04em", transition: "opacity 0.2s, transform 0.1s" },
  lockedBtn: { background: "linear-gradient(135deg, #3a3a4a, #2a2a35)", color: "#7a7a8a" },
  outputCard: { maxWidth: 660, margin: "0 auto", background: "rgba(200,240,96,0.04)", border: "1px solid rgba(200,240,96,0.2)", borderRadius: 20, padding: "28px 36px" },
  outputHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  outputTitle: { fontSize: 12, fontWeight: "700", letterSpacing: "0.12em", color: "#c8f060", textTransform: "uppercase" },
  copyBtn: { background: "rgba(200,240,96,0.15)", border: "1px solid rgba(200,240,96,0.3)", color: "#c8f060", borderRadius: 8, padding: "5px 14px", fontSize: 12, cursor: "pointer", fontFamily: "inherit" },
  outputText: { fontSize: 13.5, lineHeight: 1.75, color: "#d8d4c8", whiteSpace: "pre-wrap", fontFamily: "inherit", margin: 0 },
  loadingBox: { textAlign: "center", padding: "32px 0" },
  loadingText: { color: "#7a9e7e", fontSize: 14, marginTop: 14, fontStyle: "italic" },
  footer: { textAlign: "center", fontSize: 11, color: "#3a3a4a", marginTop: 40, letterSpacing: "0.08em" },
};

const css = `
  * { box-sizing: border-box; }
  .inp:focus { border-color: rgba(200,240,96,0.4) !important; }
  .tab-btn:hover { border-color: rgba(200,240,96,0.3); color: #c8f060; }
  .tone-btn:hover { border-color: rgba(200,240,96,0.3); color: #c8f060; }
  .gen-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
  .gen-btn:disabled { opacity: 0.35; cursor: not-allowed; }
  .copy-btn:hover { background: rgba(200,240,96,0.25); }
  .upgrade-btn:hover { opacity: 0.88; transform: translateY(-1px); }
  .output-card { animation: fadeUp 0.4s ease; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .spin { display: inline-block; animation: spin 0.8s linear infinite; }
  .loader { width: 32px; height: 32px; border: 2.5px solid rgba(200,240,96,0.15); border-top-color: #c8f060; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto; }
  @media (max-width: 600px) {
    div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
  }
`;
