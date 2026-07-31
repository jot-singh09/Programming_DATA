import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const WelcomeAnimation = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowWelcome(false);
      }, 900);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!showWelcome) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center overflow-hidden bg-[#FAF9FF] transition-opacity duration-900 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Honeycomb atmosphere */}
      <div className="hex-field" />
      <div className="hex-glow" />

      <div className="relative z-10 flex flex-col items-center gap-7">
        {/* Hex-framed logo with a drawn-on border ring */}
        <div className="hex-frame">
          <svg
            className="hex-ring"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="50,3 93,26.5 93,73.5 50,97 7,73.5 7,26.5"
              fill="none"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="hex-panel">
            <img src={logo} className="hex-logo" alt="HEXAWAY Logo" />
          </div>
          {/* corner nodes that light up in sequence */}
          <span className="hex-node hex-node--1" />
          <span className="hex-node hex-node--2" />
          <span className="hex-node hex-node--3" />
        </div>

        {/* Wordmark */}
        <h1 className="hex-title">
          HEX<span className="hex-title-accent">AWAY</span>
        </h1>

        {/* Divider made of a hex glyph, not a generic line */}
        <div className="hex-divider">
          <span className="hex-divider-line" />
          <span className="hex-glyph" />
          <span className="hex-divider-line" />
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center gap-1">
          <p className="hex-eyebrow">Welcome to</p>
          <p className="hex-tagline">Your Successful Future</p>
        </div>

        {/* Loading state: three small hexes, not dots */}
        <div className="flex gap-3 mt-2">
          <span className="hex-dot hex-dot--1" />
          <span className="hex-dot hex-dot--2" />
          <span className="hex-dot hex-dot--3" />
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=Inter:wght@300;400;500&display=swap');
      `}</style>

      <style jsx>{`
        .hex-field {
          position: absolute;
          inset: -10%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='97' viewBox='0 0 56 97'%3E%3Cpolygon points='28,2 54,17.5 54,48.5 28,64 2,48.5 2,17.5' fill='none' stroke='%236D28D9' stroke-opacity='0.07' stroke-width='1'/%3E%3C/svg%3E");
          background-size: 56px 97px;
          animation: driftField 40s linear infinite;
        }

        .hex-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 560px;
          height: 560px;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            rgba(109, 40, 217, 0.1) 0%,
            rgba(45, 212, 191, 0.06) 45%,
            transparent 70%
          );
        }

        @keyframes driftField {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 224px 388px;
          }
        }

        .hex-frame {
          position: relative;
          width: 168px;
          height: 168px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hex-ring {
          position: absolute;
          inset: 0;
          stroke: #6d28d9;
          stroke-dasharray: 340;
          stroke-dashoffset: 340;
          animation: drawHex 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards,
            spinHex 14s linear 1.6s infinite;
        }

        @keyframes drawHex {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes spinHex {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .hex-panel {
          width: 76%;
          height: 76%;
          clip-path: polygon(
            50% 3%,
            93% 26.5%,
            93% 73.5%,
            50% 97%,
            7% 73.5%,
            7% 26.5%
          );
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.12);
          animation: floatLogo 3.4s ease-in-out infinite;
        }

        @keyframes floatLogo {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .hex-logo {
          width: 62%;
          height: 62%;
          object-fit: contain;
        }

        .hex-node {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2dd4bf;
          opacity: 0;
          box-shadow: 0 0 8px 1px rgba(45, 212, 191, 0.7);
          animation: nodePulse 3.2s ease-in-out infinite;
        }
        .hex-node--1 {
          top: 0;
          left: 50%;
          animation-delay: 0.2s;
        }
        .hex-node--2 {
          bottom: 12%;
          right: 4%;
          animation-delay: 1.2s;
        }
        .hex-node--3 {
          bottom: 12%;
          left: 4%;
          animation-delay: 2.2s;
        }

        @keyframes nodePulse {
          0%,
          70%,
          100% {
            opacity: 0;
            transform: scale(0.6);
          }
          15% {
            opacity: 1;
            transform: scale(1.3);
          }
          30% {
            opacity: 0.6;
            transform: scale(1);
          }
        }

        .hex-title {
          font-family: 'Chakra Petch', sans-serif;
          font-weight: 700;
          font-size: clamp(2.75rem, 6vw, 4rem);
          letter-spacing: 0.06em;
          color: #7e22ce;
          opacity: 0;
          animation: revealTitle 0.7s ease-out 0.3s forwards;
        }

        .hex-title-accent {
          background: linear-gradient(120deg, #6d28d9, #2dd4bf);
          -webkit-background-clip: text;
          background-clip: text;
          color: #8A2BE2;
        }

        @keyframes revealTitle {
          from {
            opacity: 0;
            transform: translateY(14px);
            letter-spacing: 0.2em;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.06em;
          }
        }

        .hex-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.7s forwards;
        }

        .hex-divider-line {
          width: 56px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #a78bfa88);
        }
        .hex-divider-line:last-child {
          background: linear-gradient(90deg, #a78bfa88, transparent);
        }

        .hex-glyph {
          width: 9px;
          height: 9px;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          background: #6d28d9;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .hex-eyebrow {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 1rem;
          letter-spacing: 0.08em;
          color: #6b7280;
          opacity: 0;
          animation: slideUp 0.7s ease-out 0.85s forwards;
        }

        .hex-tagline {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 1.4rem;
          background: linear-gradient(90deg, #6d28d9, #9333ea, #2dd4bf);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          opacity: 0;
          animation: slideUp 0.7s ease-out 1.05s forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hex-dot {
          width: 9px;
          height: 9px;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          background: #6d28d9;
          animation: hexBounce 1.4s ease-in-out infinite;
        }
        .hex-dot--2 {
          animation-delay: 0.18s;
          background: #9333ea;
        }
        .hex-dot--3 {
          animation-delay: 0.36s;
          background: #2dd4bf;
        }

        @keyframes hexBounce {
          0%,
          80%,
          100% {
            transform: scale(0.6);
            opacity: 0.4;
          }
          40% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hex-field,
          .hex-ring,
          .hex-panel,
          .hex-node,
          .hex-title,
          .hex-divider,
          .hex-eyebrow,
          .hex-tagline,
          .hex-dot {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeAnimation;