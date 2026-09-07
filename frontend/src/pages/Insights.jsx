import React from 'react';
import BottomNav from '../components/BottomNav';
import { BarChart2 } from 'lucide-react';

const Insights = () => {
  return (
    <div style={{ padding: '24px 24px 90px', background: 'var(--bg-color)', minHeight: '100vh' }}>
      <header className="animate-fade-in" style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Insights</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Analyze your spending habits</p>
      </header>

      <div className="glass-panel animate-fade-in animate-delay-1" style={{ padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, background: '#e8eaf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <BarChart2 size={32} color="var(--primary-accent)" />
        </div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Analytics Coming Soon</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Visual charts comparing your spending vs your goal progress will appear here.
        </p>
      </div>

      <BottomNav />
    </div>
  );
};

export default Insights;
