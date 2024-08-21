"use client"

import { useEffect, useState } from 'react';

const AdSense = () => {
  const [adSlotId, setAdSlotId] = useState('3783836605');

  useEffect(() => {
    // Load AdSense script with enable_page_level_ads option
    if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241486495309147"]')) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241486495309147&enable_page_level_ads=true';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }, []); // Run this effect only once, when the page loads

  useEffect(() => {
    // Check if there are any existing ins elements with class adsbygoogle
    const existingInsElements = document.querySelectorAll('ins.adsbygoogle');
    if (existingInsElements.length === 0) {
      // Request ad for the current ad slot
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_slot: adSlotId,
      });
    }
  }, [adSlotId]); // Run this effect whenever adSlotId changes

  return (
    <div className="adsense-ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1241486495309147"
        data-ad-slot={adSlotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSense;