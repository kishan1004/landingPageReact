import React, { useEffect, useState } from 'react';

const CursorBlur = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTimeout(()=>{ setPosition({ x: event.clientX, y: event.clientY })},250)
     
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* The orange blur circle that follows the cursor */}
      <div
        className="fixed w-24 h-24 bg-orange-500 opacity-60 rounded-full blur-[60px] pointer-events-none -z-10"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CursorBlur;
