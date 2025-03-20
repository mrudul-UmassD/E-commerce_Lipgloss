'use client'

import { useEffect } from 'react'

const NavStyles = () => {
  // Apply styles on mount and periodically to handle dynamically loaded icons
  useEffect(() => {
    // Initial application of styles to hide unwanted large icons
    applyIconFixes();
    
    // Set interval to periodically check and hide any new icons that might appear
    const interval = setInterval(applyIconFixes, 1000);
    
    // Clean up on unmount
    return () => clearInterval(interval);
  }, []);
  
  const applyIconFixes = () => {
    // Target specific large SVG icons by their dimensions
    const largeIcons = document.querySelectorAll(
      'svg[width="384"][height="512"], svg[width="448"][height="512"], svg[width="576"][height="512"]'
    );
    
    largeIcons.forEach(icon => {
      icon.setAttribute('style', 'display: none !important; visibility: hidden !important;');
      
      // Also hide parent elements that might be containers
      let parent = icon.parentElement;
      if (parent) {
        parent.setAttribute('style', 'display: none !important;');
        
        // Go one level higher if needed
        let grandparent = parent.parentElement;
        if (grandparent && grandparent.classList.contains('icon-container')) {
          grandparent.setAttribute('style', 'display: none !important;');
        }
      }
    });
    
    // Target blue SVG paths and entire icons
    const blueElements = document.querySelectorAll(
      'svg[fill="blue"], svg[stroke="blue"], svg path[fill="blue"], svg path[stroke="blue"]'
    );
    
    blueElements.forEach(el => {
      el.setAttribute('style', 'display: none !important; visibility: hidden !important;');
    });
  };
  
  return (
    <style jsx global>{`
      /* Aggressive style overrides for large icons that take up too much space */
      svg[width="384"][height="512"],
      svg[width="448"][height="512"],
      svg[width="576"][height="512"],
      svg[width="384"][height="512"] path,
      svg[width="448"][height="512"] path,
      svg[width="576"][height="512"] path {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        pointer-events: none !important;
        width: 0 !important;
        height: 0 !important;
        overflow: hidden !important;
      }
      
      /* Target any containers that might hold these large icons */
      div:has(> svg[width="384"][height="512"]),
      div:has(> svg[width="448"][height="512"]),
      div:has(> svg[width="576"][height="512"]) {
        display: none !important;
      }
      
      /* Target specific class names that might be used for icon containers */
      .icon-container,
      .large-icon,
      .icon-wrapper,
      .floating-icons,
      .floating-nav,
      .side-navigation {
        display: none !important;
      }
      
      /* Make sure the mobile navigation is visible and properly styled */
      #mobile-navigation {
        display: flex !important;
        visibility: visible !important;
        opacity: 1 !important;
        z-index: 9999 !important;
      }
    `}</style>
  );
};

export default NavStyles; 