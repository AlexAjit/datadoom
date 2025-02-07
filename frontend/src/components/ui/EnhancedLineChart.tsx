import React from 'react';

const EnhancedLineChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="h-4 w-32 bg-gray-100 rounded" />
      <div className="h-8 w-20 bg-gray-100 rounded" />
    </div>
    
    <div className="h-[200px] relative">
      <svg className="w-full h-full" viewBox="0 0 300 200">
        {/* Grid lines */}
        {[...Array(4)].map((_, i) => (
          <line
            key={`grid-${i}`}
            x1="0"
            y1={50 + i * 40}
            x2="300"
            y2={50 + i * 40}
            stroke="#f0f0f0"
            strokeWidth="1"
          />
        ))}
        
        {/* Main line with gradient */}
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,150 C100,130 200,70 300,50"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          className="animate-draw"
        />
        <path
          d="M0,150 C100,130 200,70 300,50 L300,200 L0,200 Z"
          fill="url(#gradient)"
          className="animate-fade"
        />
        
        {/* Data points */}
        {[
          { x: 0, y: 150 },
          { x: 100, y: 130 },
          { x: 200, y: 70 },
          { x: 300, y: 50 }
        ].map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="white"
            stroke="#3b82f6"
            strokeWidth="2"
            className="animate-point"
          />
        ))}
      </svg>
    </div>

    <div className="flex justify-between mt-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-3 w-8 bg-gray-100 rounded" />
      ))}
    </div>
  </div>
);
};

export default EnhancedLineChart;

<style jsx>{`
  @keyframes drawPath1 {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  
  @keyframes drawPath2 {
    0% {
      stroke-dashoffset: 1000;
    }
    40% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes pointFadeIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    60% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-draw-path-1 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawPath1 2s ease-out forwards;
  }
  
  .animate-draw-path-2 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawPath2 2.5s ease-out forwards;
  }
  
  .animate-fade {
    opacity: 0;
    animation: fadeIn 2.5s ease-out forwards;
  }
  
  .animate-point {
    opacity: 0;
    transform-origin: center;
    animation: pointFadeIn 2.5s ease-out forwards;
  }
`}</style>