import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0a0a', 
      color: '#ffffff', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        xonai.dev - AI Solutions
      </h1>
      
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
        Complete AI Automation for Language Centers & Medical Clinics
        (Beyond Basic Tools like Gliglish & SimplyBook)
      </p>
      
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button style={{
          padding: '12px 24px',
          fontSize: '1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
        
        <button style={{
          padding: '12px 24px',
          fontSize: '1rem',
          backgroundColor: 'transparent',
          color: 'white',
          border: '1px solid #3b82f6',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          View Services
        </button>
      </div>
      
      <div style={{ marginTop: '3rem', textAlign: 'left' }}>
        <h2>🔧 Debug Info:</h2>
        <p>✅ React is working</p>
        <p>✅ Styles are loading</p>
        <p>✅ App component is rendering</p>
        <p>Time: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
}

export default App;