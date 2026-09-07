import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);

    // Save user locally for immediate instant UI access
    const fallbackUser = { _id: 'demo_user', name, email };
    localStorage.setItem('spendIQ_user', JSON.stringify(fallbackUser));

    // Optional background fetch just to register, we don't wait for it
    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    }).catch(err => console.warn('Backend offline, using local data'));

    // Instant navigation!
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 300); // 300ms for a snappy button feedback
  };

  return (
    <div style={{ padding: '40px 24px', display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'linear-gradient(135deg, #f7f9fc 0%, #e8eaf6 100%)' }}>
      <div className="animate-fade-in" style={{ marginTop: 'auto', marginBottom: '40px', textAlign: 'center' }}>
        <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', borderRadius: 24, margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(30,60,114,0.3)' }}>
          <span style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>S</span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>SpendIQ</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Pre-purchase decision co-pilot</p>
      </div>

      <div className="glass-panel animate-fade-in animate-delay-1" style={{ padding: '32px 24px' }}>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Your Name</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g., Rohan" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Email Address</label>
            <input 
              type="email" 
              className="input-field" 
              placeholder="rohan@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '10px' }} disabled={loading}>
            {loading ? 'Entering...' : 'Enter SpendIQ'}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>
      </div>

      <div style={{ marginTop: 'auto', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem', padding: '20px 0' }}>
        <Sparkles size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
        AI-powered financial guidance
      </div>
    </div>
  );
};

export default Login;
