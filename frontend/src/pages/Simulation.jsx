import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, AlertTriangle, ChevronRight, Phone } from 'lucide-react';

const Simulation = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '24px 24px 90px', background: 'var(--bg-color)', minHeight: '100vh', fontFamily: 'Outfit, sans-serif' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '12px' }} className="animate-fade-in">
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ArrowLeft size={24} color="var(--text-primary)" />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1e3c72', padding: '6px', borderRadius: '8px' }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', lineHeight: 1 }}>S</span>
        </div>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>Purchase Simulation D...</h2>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#ff9800', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', marginLeft: 'auto' }}>
          R
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }} className="animate-fade-in animate-delay-1">
        <div style={{ flex: 1, textAlign: 'center', padding: '8px', background: '#e8eaf6', color: 'var(--primary-accent)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>
          DECISION CO-PILOT
        </div>
        <div style={{ flex: 1, textAlign: 'center', padding: '8px', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
          <Zap size={12} /> Live Simulation
        </div>
      </div>

      {/* Product Details */}
      <div className="glass-panel animate-fade-in animate-delay-1" style={{ padding: '20px', marginBottom: '20px', background: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#f5f5f7', padding: '4px 8px', borderRadius: '12px', fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '8px' }}>
              <span role="img" aria-label="headphones">🎧</span> Electronics • Tech
            </div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px' }}>Wireless Headphones</h1>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 800 }}>₹1,500</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>₹1,999</span>
              <span style={{ fontSize: '0.75rem', color: '#3f51b5', fontWeight: 600, background: '#e8eaf6', padding: '2px 6px', borderRadius: '4px' }}>25% OFF</span>
            </div>
          </div>
          <div style={{ width: '64px', height: '64px', background: '#f0f0f0', borderRadius: '12px', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150&q=80" alt="Headphones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* Verdict Panel */}
      <div className="glass-panel animate-fade-in animate-delay-2" style={{ padding: '24px', marginBottom: '24px', background: 'linear-gradient(135deg, #f5f7ff 0%, #e8eaf6 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--primary-accent)', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
            <AlertTriangle size={14} /> VERDICT: CAUTION
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Zap size={12} /> 89% Confidence
          </span>
        </div>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', lineHeight: 1.4 }}>
          This purchase could delay your <span style={{ color: 'var(--primary-accent)' }}>New Phone</span> goal by <span style={{ color: 'var(--danger-color)' }}>~4 days</span>.
        </h2>
        
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
          Based on your steady <strong>₹333/day</strong> savings velocity and only <strong>15 days remaining</strong> in this monthly cycle.
        </p>

        <div style={{ background: 'white', padding: '16px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--primary-accent)' }}><Zap size={16} /></span> Discretionary Buffer
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: 'var(--danger-color)', fontWeight: 700, fontSize: '0.9rem' }}>₹420 left</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>of ₹1,920 baseline</div>
          </div>
        </div>
      </div>

      {/* Projected Impact */}
      <div className="animate-fade-in animate-delay-3" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Projected Impact on Goals</h3>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, textAlign: 'right' }}>3 ACTIVE<br/>TRACKER</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Phone Goal Impact */}
          <div className="glass-panel" style={{ padding: '20px', background: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: 40, height: 40, background: '#ffebee', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d32f2f' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '0.95rem' }}>New Phone</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Target: ₹10,000 (₹6,800 saved)</p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ background: '#ffebee', color: '#d32f2f', padding: '4px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 700, display: 'inline-block', marginBottom: '4px' }}>
                  🕒 +4 Days
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 600 }}>Oct 15 → Oct 19</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '4px', height: '6px', marginBottom: '8px' }}>
              <div style={{ flex: 6.8, background: '#3f51b5', borderRadius: '3px' }}></div>
              <div style={{ flex: 1.5, background: '#e57373', borderRadius: '3px' }}></div>
              <div style={{ flex: 1.7, background: '#f0f0f0', borderRadius: '3px' }}></div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 600 }}>
              <span style={{ color: 'var(--text-secondary)' }}>68% funded</span>
              <span style={{ color: '#d32f2f' }}>Absorbs 4.5 daily quotas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="animate-fade-in animate-delay-3" style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '30px' }}>
        <button className="btn-primary" style={{ background: 'black', color: 'white', padding: '16px' }}>
          <span role="img" aria-label="piggy">🐷</span> See Smarter Alternatives (Save ₹500) <ChevronRight size={18} />
        </button>
        <button className="btn-secondary" style={{ background: '#f5f5f7', border: 'none', color: 'var(--text-primary)', padding: '16px' }}>
          Buy Anyway <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 'normal', marginLeft: '6px' }}>• Logs impact to Goals</span>
        </button>
      </div>

    </div>
  );
};

export default Simulation;
