"use client";

import React, { useState, useEffect } from "react";

export function WatchCanvas() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Rotations
  const hourDeg = (hours % 24 + minutes / 60) * (360 / 24);
  const minDeg = (minutes + seconds / 60) * (360 / 60);
  const secDeg = (seconds) * (360 / 60);

  const numbers = ["02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22", "24"];

  // Diameter scaled to 420px for a larger layout
  const diameter = 420;
  const radius = diameter / 2;

  return (
    <div 
      className="relative rounded-full flex items-center justify-center"
      style={{ 
        width: `${diameter}px`, 
        height: `${diameter}px`, 
        backgroundColor: '#000000',
        border: '2px solid #1a1a1a',
        boxShadow: '0 0 60px rgba(0,0,0,0.8)'
      }}
    >
      {/* 24-hour number ring */}
      {numbers.map((num, i) => {
        const angle = (i + 1) * (360 / 12) - 90;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * (radius - 30);
        const y = Math.sin(rad) * (radius - 30);
        return (
          <div
            key={num}
            className="absolute font-mono text-[11px] font-bold"
            style={{
              color: '#666',
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {num}
          </div>
        );
      })}

      {/* 60 tick marks */}
      {Array.from({ length: 60 }).map((_, i) => {
        const isMajor = i % 5 === 0;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              width: isMajor ? '4px' : '1px',
              height: isMajor ? '14px' : '8px',
              backgroundColor: isMajor ? '#888' : '#444',
              transform: `rotate(${i * 6}deg) translateY(-${radius - 12}px)`,
              transformOrigin: 'bottom center',
              bottom: '50%'
            }}
          />
        );
      })}

      {/* 12 hour markers (Apple Style) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const isQuarter = i % 3 === 0;
        const w = isQuarter ? 12 : 8;
        const h = isQuarter ? 32 : 20;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${w}px`,
              height: `${h}px`,
              backgroundColor: '#ffffff',
              transform: `rotate(${i * 30}deg) translateY(-${radius - 50}px)`,
              transformOrigin: 'bottom center',
              bottom: '50%',
              borderRadius: '4px'
            }}
          />
        );
      })}

      {/* Hour Hand */}
      <div 
        className="absolute"
        style={{
          width: '8px',
          height: '110px',
          backgroundColor: '#ffffff',
          bottom: '50%',
          left: 'calc(50% - 4px)',
          transformOrigin: 'bottom center',
          transform: `rotate(${hourDeg}deg)`,
          borderRadius: '4px 4px 0 0',
          zIndex: 2
        }}
      />

      {/* Minute Hand */}
      <div 
        className="absolute"
        style={{
          width: '6px',
          height: '150px',
          backgroundColor: '#ffffff',
          bottom: '50%',
          left: 'calc(50% - 3px)',
          transformOrigin: 'bottom center',
          transform: `rotate(${minDeg}deg)`,
          borderRadius: '3px 3px 0 0',
          zIndex: 3
        }}
      />

      {/* Second Hand */}
      <div 
        className="absolute"
        style={{
          width: '1.5px',
          height: '170px',
          backgroundColor: '#ffffff',
          bottom: '50%',
          left: 'calc(50% - 0.75px)',
          transformOrigin: 'bottom center',
          transform: `rotate(${secDeg}deg)`,
          zIndex: 4
        }}
      />

      {/* Center Cap */}
      <div 
        className="absolute rounded-full bg-white"
        style={{
          width: '12px',
          height: '12px',
          zIndex: 10,
          boxShadow: '0 0 15px rgba(0,0,0,0.5)'
        }}
      />
    </div>
  );
}
