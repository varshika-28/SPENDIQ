import React, { useEffect, useState } from 'react';
import { 
  Bell, ScanLine, Sparkles, Smartphone, Plane, Shield, 
  Headphones, Coffee, Home, Flag, BarChart2, User, Plus, ChevronRight, AlertTriangle, ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let userData = {};
    try {
      const rawData = localStorage.getItem('spendIQ_user');
      if (rawData && rawData !== 'undefined') {
        userData = JSON.parse(rawData);
      }
    } catch (e) {
      console.warn("Cleared invalid session data");
      localStorage.removeItem('spendIQ_user');
    }

    if (userData && userData.name) {
      setUser(userData);
      fetchGoals(userData._id);
    } else {
      window.location.href = '/login';
    }
  }, []);

  const fetchGoals = async (userId) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000); // 1-second max timeout
    
    try {
      const res = await fetch(`http://localhost:5000/api/goals/${userId}`, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) {
          setGoals(data);
          return;
        }
      }
      throw new Error('Fallback trigger');
    } catch (err) {
      // Instant Fallback data if backend is hanging or offline
      setGoals([
        { _id: 1, title: 'New Phone', targetAmount: 10000, savedAmount: 6500, daysLeft: 45, icon: 'phone', status: 'On Track' },
        { _id: 2, title: 'Travel Fund', targetAmount: 8000, savedAmount: 3200, daysLeft: 72, icon: 'plane', status: 'On Track' },
        { _id: 3, title: 'Emergency Fund', targetAmount: 5000, savedAmount: 4000, daysLeft: 12, icon: 'shield', status: 'Safe Pace' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'phone': return <Smartphone size={20} />;
      case 'plane': return <Plane size={20} />;
      case 'shield': return <Shield size={20} />;
      default: return <Flag size={20} />;
    }
  };

  if (!user || loading) return <div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>;

  return (
    <div style={{ paddingBottom: '90px', background: 'var(--bg-color)', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 24px 16px' }} className="animate-fade-in">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 32, height: 32, background: '#1e3c72', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>S</span>
          </div>
          <span style={{ fontWeight: 600, fontSize: 18 }}>SpendIQ</span>
          <span style={{ background: '#e8eaf6', color: '#3f51b5', fontSize: '10px', padding: '2px 6px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
            <Sparkles size={10} /> AI
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Bell size={22} color="var(--text-secondary)" />
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#ff9800', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
            {user.name.charAt(0).toUpperCase()}
          </div>
        </div>
      </header>

      <main style={{ padding: '0 24px' }}>
        {/* Greeting & Safe to spend */}
        <div className="animate-fade-in animate-delay-1" style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '4px' }}>
            Good morning, {user.name.split(' ')[0]} 👋
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '16px' }}>Let's keep your goals on track.</p>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--success-bg)', padding: '6px 12px', borderRadius: 20 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success-color)' }}></div>
            <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Safe to spend up to ₹420 today</span>
          </div>
        </div>

        {/* Monthly Savings Goal Card */}
        <div className="glass-panel animate-fade-in animate-delay-1" style={{ padding: '24px', marginBottom: '24px', background: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 36, height: 36, background: '#1a1b2e', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Flag size={18} color="white" />
              </div>
              <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Monthly Savings Goal</span>
            </div>
            <span style={{ fontSize: '0.75rem', background: '#f5f5f5', padding: '4px 10px', borderRadius: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>
              50% completed
            </span>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800 }}>₹5,000</span>
            <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}> / ₹10,000</span>
          </div>

          <div style={{ height: '8px', background: '#f0f0f0', borderRadius: '4px', marginBottom: '16px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '50%', background: 'linear-gradient(90deg, #3f51b5 0%, #00bfa5 100%)', borderRadius: '4px' }}></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            <span>📅 15 days remaining</span>
            <span>•</span>
            <span>🏁 Daily target: <strong style={{ color: 'var(--text-primary)' }}>₹333</strong></span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="animate-fade-in animate-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          <button className="btn-primary" style={{ padding: '16px' }}>
            <ScanLine size={20} />
            Check a purchase
          </button>
          <button className="btn-secondary" style={{ padding: '16px', background: 'white' }}>
            <Sparkles size={20} />
            Ask SpendIQ Assistant
          </button>
        </div>

        {/* Active Goals */}
        <div className="animate-fade-in animate-delay-2" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              Your active goals <span style={{ background: '#f0f0f0', color: 'var(--text-secondary)', fontSize: '0.8rem', padding: '2px 8px', borderRadius: '12px' }}>{goals.length}</span>
            </h2>
            <button style={{ background: 'none', border: 'none', color: 'var(--primary-accent)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Plus size={16} /> Add Goal
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {goals.map((goal, idx) => (
              <div key={goal._id || idx} style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: 40, height: 40, background: '#f5f5f7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1b2e' }}>
                      {renderIcon(goal.icon)}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '2px' }}>{goal.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{goal.daysLeft} days left</p>
                    </div>
                  </div>
                  <div style={{ background: goal.status === 'On Track' || goal.status === 'Safe Pace' ? 'var(--success-bg)' : 'var(--danger-bg)', color: 'var(--text-primary)', fontSize: '0.75rem', fontWeight: 600, padding: '4px 10px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: goal.status === 'On Track' || goal.status === 'Safe Pace' ? 'var(--success-color)' : 'var(--danger-color)' }}></div>
                    {goal.status}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.9rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>₹{goal.savedAmount.toLocaleString()}</strong>
                    <span style={{ color: 'var(--text-secondary)' }}> / ₹{goal.targetAmount.toLocaleString()}</span>
                  </div>
                  <div style={{ fontWeight: 700 }}>
                    {Math.round((goal.savedAmount / goal.targetAmount) * 100)}%
                  </div>
                </div>

                <div style={{ height: '6px', background: '#f0f0f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(goal.savedAmount / goal.targetAmount) * 100}%`, background: 'var(--primary-accent)', borderRadius: '3px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Checks */}
        <div className="animate-fade-in animate-delay-3" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Recent pre-spend checks</h2>
            <button style={{ background: 'none', border: 'none', color: 'var(--primary-accent)', fontWeight: 600, fontSize: '0.9rem' }}>See all</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Check 1 */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: 40, height: 40, background: '#f5f5f7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Headphones size={20} color="#1a1b2e" />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 600, fontSize: '0.95rem' }}>Wireless Headphones</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Electronics • 2 hours ago</p>
                  </div>
                </div>
                <div style={{ fontWeight: 600 }}>₹1,500</div>
              </div>
              <div style={{ background: 'var(--danger-bg)', color: 'var(--danger-color)', padding: '10px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <AlertTriangle size={14} />
                Goal delayed by ~4 days (New Phone)
              </div>
              <button style={{ width: '100%', background: '#f5f7ff', color: 'var(--primary-accent)', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 600, fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} /> 
                  View alternative chosen (₹1,000)
                </span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Check 2 */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: 40, height: 40, background: '#f5f5f7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Coffee size={20} color="#1a1b2e" />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 600, fontSize: '0.95rem' }}>Campus Coffee</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Dining • Yesterday</p>
                  </div>
                </div>
                <div style={{ fontWeight: 600 }}>₹180</div>
              </div>
              <div style={{ background: 'var(--success-bg)', color: '#00897b', padding: '10px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00bfa5' }}></div>
                Safe — Within daily buffer
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '480px', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderTop: '1px solid #eee', padding: '12px 24px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--primary-accent)' }}>
          <Home size={22} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600 }}>Home</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}>
          <Flag size={22} />
          <span style={{ fontSize: '0.7rem', fontWeight: 500 }}>Goals</span>
        </div>
        
        {/* Floating Scan Button */}
        <div style={{ width: 56, height: 56, background: 'var(--primary-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transform: 'translateY(-20px)', boxShadow: '0 8px 16px rgba(63, 81, 181, 0.3)' }}>
          <ScanLine size={26} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}>
          <BarChart2 size={22} />
          <span style={{ fontSize: '0.7rem', fontWeight: 500 }}>Insights</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)' }}>
          <User size={22} />
          <span style={{ fontSize: '0.7rem', fontWeight: 500 }}>Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
