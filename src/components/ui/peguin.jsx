import React, { useEffect, useRef } from "react";

export const Tiger = (props) => {
  const tiger = useRef(null);
  const happyEyes = [useRef(null), useRef(null)];
  const blushes = [useRef(null), useRef(null)];

  const hover = (state) => {
    blushes.forEach((blush) => {
      if (blush.current) {
        blush.current.style.opacity = state === "enter" ? "1" : "0";
      }
    });

    happyEyes.forEach((eye) => {
      if (eye.current) {
        eye.current.style.opacity = state === "enter" ? "1" : "0";
      }
    });

    [document.getElementById("eye"), document.getElementById("eye_2")].forEach(
      (eye) => {
        if (eye) {
          eye.style.opacity = state !== "enter" ? "1" : "0";
        }
      }
    );
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const tigerElement = tiger.current;
      if (tigerElement) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const rect = tigerElement.getBoundingClientRect();
        const anchorX = rect.left + rect.width / 2;
        const anchorY = rect.top + rect.height / 2;
        const intensity = 0.01;
        const moveX = (mouseX - anchorX) * intensity;
        const moveY = (mouseY - anchorY) * intensity;

        [document.getElementById("eye"), document.getElementById("eye_2")].forEach(
          (eye) => {
            if (eye) {
              eye.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
            }
          }
        );
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    blushes.forEach((blush) => {
      if (blush.current) {
        blush.current.style.opacity = "0";
        blush.current.style.transition = "all 0.15s ease";
      }
    });

    happyEyes.forEach((eye) => {
      if (eye.current) {
        eye.current.style.opacity = "0";
        eye.current.style.transition = "all 0.15s ease";
      }
    });

    [document.getElementById("eye"), document.getElementById("eye_2")].forEach(
      (eye) => {
        if (eye) {
          eye.style.transition = "opacity 0.15s ease";
        }
      }
    );
  }, []);

  return (
    <div
      id="tiger"
      style={{ width: "80px", cursor: "pointer" }}
      ref={tiger}
      onMouseEnter={() => hover("enter")}
      onMouseLeave={() => hover("leave")}
    >
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        style={{ pointerEvents: "none" }}
      >
        {/* Tiger face structure */}
        <circle cx="150" cy="150" r="100" fill="#F4A460" stroke="#8B4513" strokeWidth="8" />

        {/* Tiger stripes */}
        <path d="M120 110 C130 80, 170 80, 180 110" stroke="#8B4513" strokeWidth="6" fill="none"/>
        <path d="M100 140 C110 120, 130 120, 140 140" stroke="#8B4513" strokeWidth="6" fill="none"/>
        <path d="M200 140 C190 120, 170 120, 160 140" stroke="#8B4513" strokeWidth="6" fill="none"/>
        
        {/* Tiger ears */}
        <circle cx="100" cy="80" r="25" fill="#F4A460" stroke="#8B4513" strokeWidth="8" />
        <circle cx="200" cy="80" r="25" fill="#F4A460" stroke="#8B4513" strokeWidth="8" />
        
        {/* Tiger inner ears */}
        <circle cx="100" cy="80" r="15" fill="#FFDEAD" />
        <circle cx="200" cy="80" r="15" fill="#FFDEAD" />

        {/* Tiger eyes */}
        <circle id="eye" cx="120" cy="150" r="15" fill="#000" />
        <circle id="eye_2" cx="180" cy="150" r="15" fill="#000" />

        {/* Happy eyes (hidden by default) */}
        <path
          ref={happyEyes[0]}
          id="happy-eye"
          d="M110 150 C115 145, 125 145, 130 150"
          stroke="#000"
          strokeWidth="4"
          fill="none"
          opacity="0"
        />
        <path
          ref={happyEyes[1]}
          id="happy-eye_2"
          d="M170 150 C175 145, 185 145, 190 150"
          stroke="#000"
          strokeWidth="4"
          fill="none"
          opacity="0"
        />

        {/* Tiger nose */}
        <polygon points="140,170 160,170 150,185" fill="#000" />
        
        {/* Tiger mouth */}
        <path d="M145 190 Q150 200, 155 190" stroke="#000" strokeWidth="2" fill="none" />
        
        {/* Blushes (hidden by default) */}
        <circle ref={blushes[0]} id="blush" cx="100" cy="170" r="10" fill="#FF6347" opacity="0" />
        <circle ref={blushes[1]} id="blush_2" cx="200" cy="170" r="10" fill="#FF6347" opacity="0" />
      </svg>
    </div>
  );
};
