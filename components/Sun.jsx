import React from 'react';

export default function Sun({ animationSize }) {
  return (
    <div
      className={`absolute opacity-0 -top-2 -right-2  w-6 h-6 rounded-full bg-gradient-to-tr bg-orange-700 group group-hover:opacity-100 group-hover:animate-around-md transition-all duration-500`}
    />
  );
}
