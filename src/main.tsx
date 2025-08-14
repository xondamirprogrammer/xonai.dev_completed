import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Toaster } from 'sonner';

// Force dark mode on application start
function AppWithDarkMode() {
  useEffect(() => {
    // Add dark class to html element and ensure it stays
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    
    // Remove any light mode classes that might exist
    document.documentElement.classList.remove('light');
    
    // Prevent any external scripts from changing the theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (!document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.add('dark');
          }
          document.documentElement.classList.remove('light');
        }
      });
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <App />
      <Toaster 
        position="top-right"
        expand={false}
        richColors
        theme="dark"
      />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithDarkMode />
  </StrictMode>
);