import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Flag, ScanLine, BarChart2, User } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveStyle = (path) => {
    return location.pathname === path 
      ? { color: 'var(--primary-accent)', fontWeight: 600 } 
      : { color: 'var(--text-secondary)', fontWeight: 500 };
  };

  return (
    <nav style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '480px', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderTop: '1px solid #eee', padding: '12px 24px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
      
      <div 
        onClick={() => navigate('/dashboard')} 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', ...getActiveStyle('/dashboard') }}
      >
        <Home size={22} />
        <span style={{ fontSize: '0.7rem' }}>Home</span>
      </div>
      
      <div 
        onClick={() => navigate('/goals')} 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', ...getActiveStyle('/goals') }}
      >
        <Flag size={22} />
        <span style={{ fontSize: '0.7rem' }}>Goals</span>
      </div>
      
      {/* Floating Scan Button */}
      <div 
        onClick={() => navigate('/scan')}
        style={{ width: 56, height: 56, background: 'var(--primary-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transform: 'translateY(-20px)', boxShadow: '0 8px 16px rgba(63, 81, 181, 0.3)', cursor: 'pointer' }}
      >
        <ScanLine size={26} />
      </div>

      <div 
        onClick={() => navigate('/insights')} 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', ...getActiveStyle('/insights') }}
      >
        <BarChart2 size={22} />
        <span style={{ fontSize: '0.7rem' }}>Insights</span>
      </div>
      
      <div 
        onClick={() => navigate('/profile')} 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', ...getActiveStyle('/profile') }}
      >
        <User size={22} />
        <span style={{ fontSize: '0.7rem' }}>Profile</span>
      </div>
      
    </nav>
  );
};

export default BottomNav;
