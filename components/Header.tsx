import Image from 'next/image';
import React, { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer';

const Header: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const scrollY = useContext(ScrollContext);

  let progress: any = 0;
  
  const { current: elContainer } = refContainer;

  if(elContainer) {
    var updatedProgress =  Math.min(1, scrollY.scrollY / elContainer.clientHeight );
    progress = updatedProgress;
  }

  return (
    <div
    style={{
      transform: `translateY:(-${progress * 20}vh)`
    }}
    ref={refContainer} 
    className='min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10'>
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src={"/assets/Endless_Corridor.mp4"} type={"video/mp4"}/>
      </video>      
      <div className='flex-grow-0 pt-10 transition-opacity duration-100 z-10'>
          <div className="flex justify-center">
            <Image src={"/assets/doggo-face.png"} width={118/3} height={114/3} alt='jeff-doggo'/>
          </div>
          <h4 className="text-white text-2xl">Jeffrey Goh</h4>
      </div>
      <div className="p-10 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] flex-1 flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">Hi there,</h1>
      </div>
    </div>
  )
};

export default Header;
