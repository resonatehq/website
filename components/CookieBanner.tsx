'use client';

import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the consent cookie exists
    const consentGiven = document.cookie.split(';').some((item) => item.trim().startsWith('resonatehq_cookie_banner_consent='));
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    // Set cookie for the root domain
    const rootDomain = getRootDomain();
    document.cookie = `resonatehq_cookie_banner_consent=true; path=/; domain=${rootDomain}; max-age=31536000; SameSite=Lax`;
    setShowBanner(false);
  };

  // Function to get the root domain
  const getRootDomain = () => {
    const hostParts = window.location.hostname.split('.');
    return hostParts.slice(-2).join('.');
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      padding: '15px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <p style={{ margin: 0, color: 'black', flexGrow: 1 }}>
        We use cookies to track user behaviour on our websites. By continuing to use our websites you consent to the use of cookies for this purpose.
      </p>
      <button 
        onClick={acceptCookies}
        style={{
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '3px',
          cursor: 'pointer',
          marginLeft: '20px',
        }}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;