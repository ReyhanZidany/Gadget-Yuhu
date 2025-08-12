import React, { useEffect } from 'react';

const StarCursor = () => {
  useEffect(() => {
    const stars = [];
    const starCount = 15;

    // Buat elemen bintang
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.innerHTML = '⭐';
      star.style.position = 'fixed';
      star.style.pointerEvents = 'none';
      star.style.zIndex = '9999';
      star.style.fontSize = '12px';
      star.style.opacity = '0';
      star.style.transition = 'all 0.3s ease';
      document.body.appendChild(star);
      stars.push(star);
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      stars.forEach((star, index) => {
        setTimeout(() => {
          star.style.left = mouseX + (Math.random() - 0.5) * 50 + 'px';
          star.style.top = mouseY + (Math.random() - 0.5) * 50 + 'px';
          star.style.opacity = '1';
          
          setTimeout(() => {
            star.style.opacity = '0';
          }, 300);
        }, index * 50);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      stars.forEach(star => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      });
    };
  }, []);

  return null;
};

export default StarCursor;