import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // If dragging over a link, button, or actionable element
            if (e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                transition: 'transform 0.05s linear' // small delay to smooth out the tracking
            }}
        >
            <div
                className={`flex items-center justify-center transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'w-12 h-12 rotate-45' : 'w-4 h-4'
                    }`}
            >
                {/* 1px structural crosshair lines */}
                <div className={`absolute w-full h-px ${isHovering ? 'bg-tactical-red' : 'bg-titanium'}`}></div>
                <div className={`absolute h-full w-px ${isHovering ? 'bg-tactical-red' : 'bg-titanium'}`}></div>

                {/* Center dot */}
                <div className={`w-1 h-1 rounded-full ${isHovering ? 'bg-transparent' : 'bg-titanium'}`}></div>

                {/* Optional corner brackets on hover for targeting effect */}
                <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${isHovering ? 'border-tactical-red opacity-100' : 'opacity-0'} transition-opacity`}></div>
                <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${isHovering ? 'border-tactical-red opacity-100' : 'opacity-0'} transition-opacity`}></div>
                <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${isHovering ? 'border-tactical-red opacity-100' : 'opacity-0'} transition-opacity`}></div>
                <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${isHovering ? 'border-tactical-red opacity-100' : 'opacity-0'} transition-opacity`}></div>
            </div>
        </div>
    );
}
