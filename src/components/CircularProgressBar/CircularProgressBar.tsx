import React from 'react';

interface CircularProgressBarProps {
  completed: number;
  total: number;
  radius: number;
  strokeWidth: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ completed, total, radius, strokeWidth }) => {
  const circumference = 2 * Math.PI * radius;
  const progress = (completed / total) * circumference;
  const center = radius + strokeWidth / 2;

  return (
    <svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
      <circle
        stroke="#ccc"
        fill="none"
        strokeWidth={strokeWidth}
        r={radius}
        cx={center}
        cy={center}
      />
      <circle
        stroke="#FF007F"
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={`${progress} ${circumference}`}
        strokeLinecap="round"
        r={radius}
        cx={center}
        cy={center}
        transform={`rotate(-90 ${center} ${center})`}
      />
      <text x={center} y={center} textAnchor="middle" alignmentBaseline="middle" fill='white' fontSize={26}>
        {completed}/{total}  
      </text>
    
    </svg>
  );
};

export default CircularProgressBar;
