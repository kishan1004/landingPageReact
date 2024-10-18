import React, { useState, useEffect } from 'react';

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full cursor-none"></div>

      <div
        className="w-8 h-8 bg-[#facc15] rounded-full shadow-[0_0_8px_2px_rgba(59,130,246,0.8)] animate-pulse fixed pointer-events-none"
        style={{
          left: `${position.x - 16}px`,  
          top: `${position.y - 16}px`,   
        }}
      ></div>
    </div>
  );
};

export default GlowingCursor;
