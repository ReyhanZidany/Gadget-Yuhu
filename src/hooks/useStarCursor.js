import { useEffect } from 'react';

export const useStarCursor = () => {
  useEffect(() => {
    const createStar = (x, y) => {
      const star = document.createElement('div');
      star.innerHTML = '⭐';
      star.style.position = 'fixed';
      star.style.left = x + 'px';
      star.style.top = y + 'px';
      star.style.pointerEvents = 'none';
      star.style.zIndex = '9999';
      star.style.fontSize = Math.random() * 10 + 10 + 'px';
      star.style.opacity = '1';
      star.style.transition = 'all 0.5s ease-out';
      
      document.body.appendChild(star);
      
      setTimeout(() => {
        star.style.opacity = '0';
        star.style.transform = 'translateY(-50px) scale(0)';
      }, 100);
      
      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      }, 600);
    };

    const handleMouseMove = (e) => {
      if (Math.random() > 0.8) { // 20% chance untuk membuat bintang
        createStar(
          e.clientX + (Math.random() - 0.5) * 20,
          e.clientY + (Math.random() - 0.5) * 20
        );
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};