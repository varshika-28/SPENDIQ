import React from 'react';
import BottomNav from '../components/BottomNav';

const Goals = () => {
  return (
    <div style={{ padding: '24px 24px 90px', background: 'var(--bg-color)', minHeight: '100vh' }}>
      <header className="animate-fade-in" style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Your Goals</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage your financial targets</p>
      </header>

      <div className="glass-panel animate-fade-in animate-delay-1" style={{ padding: '32px 24px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Active Goals List</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          This section will allow you to edit and track your long-term goals in detail.
        </p>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Goals;
