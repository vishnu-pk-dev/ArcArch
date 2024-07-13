import React from 'react';
import './MenuBanner.css';

export default function MenuBanner(props: any) {
  return (
    <>
      <div
        className={` absolute translate-center bg-purple-300 right-0 top-0 transition-all duration-700 rounded-full 
      ${props.menuOpen ? 'w-[600vw] h-[600vw]' : 'w-0 h-0'} 
      `}></div>
    </>
  );
}
