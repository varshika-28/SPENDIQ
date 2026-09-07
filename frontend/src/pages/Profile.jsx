import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { User, LogOut } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('spendIQ_user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('spendIQ_user');
    navigate('/login');
  };

  return (
    <div style={{ padding: '24px 24px 90px', background: 'var(--bg-color)', minHeight: '100vh' }}>
      <header className="animate-fade-in" style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Profile</h1>
      </header>

      <div className="glass-panel animate-fade-in animate-delay-1" style={{ padding: '32px 24px', textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#ff9800', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '2rem', margin: '0 auto 16px' }}>
          {userData.name ? userData.name.charAt(0).toUpperCase() : 'U'}
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>{userData.name}</h2>
        <p style={{ color: 'var(--text-secondary)' }}>{userData.email}</p>
      </div>

      <button onClick={handleLogout} className="btn-secondary animate-fade-in animate-delay-2" style={{ color: 'var(--danger-color)', borderColor: 'var(--danger-bg)' }}>
        <LogOut size={20} />
        Log Out
      </button>

      <BottomNav />
    </div>
  );
};

export default Profile;
