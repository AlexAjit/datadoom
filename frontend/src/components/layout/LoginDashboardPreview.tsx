import React from 'react';
import { User, Shield, Lock } from 'lucide-react';

const LoginDashboardPreview = () => {

  return (
    <div className="w-full max-w-[280px] h-[120px] mx-auto mb-8 relative">
      {/* Central user circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Outer rings */}
          <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-primary/20 animate-[spin_8s_linear_infinite]" />
          <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-primary/10 animate-[spin_12s_linear_infinite_reverse]" />
          
          {/* Center icon */}
          <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center border border-primary/20">
            <User className="w-8 h-8 text-primary/80" />
          </div>
        </div>
      </div>

      {/* Orbiting elements */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
        {/* Lock icon */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2">
          <div className="w-8 h-8 rounded-lg bg-background shadow-sm border border-primary/20 flex items-center justify-center animate-[bounce_2s_ease-in-out_infinite]">
            <Lock className="w-4 h-4 text-primary/80" />
          </div>
        </div>

        {/* Shield icon */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2">
          <div className="w-8 h-8 rounded-lg bg-background shadow-sm border border-primary/20 flex items-center justify-center animate-[bounce_2s_ease-in-out_infinite_0.5s]">
            <Shield className="w-4 h-4 text-primary/80" />
          </div>
        </div>

        {/* Moving dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse"
            style={{
              transform: `rotate(${i * 45}deg) translateX(60px) rotate(-${i * 45}deg)`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30 animate-ping"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 1}s`
          }}
        />
      ))}
    </div>
  );
};

export default LoginDashboardPreview;