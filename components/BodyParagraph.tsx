import React, { useContext, useRef } from 'react';
import { ScrollContext } from '../utils/scroll-observer';

const opacityForBlock = (sectionProgress: number, blockNumber: number) => {
  const progress = sectionProgress - blockNumber;
  if(progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const BodyParagraph: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;

  if(elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY = Math.min(clientHeight + halfH, 
      Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    console.log(progress);
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="flex items-center min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:px-16">
         <div className="leading-[1.15]">
           <div className="font-bold text-4xl transition-opacity duration-1000"
           style={{
             opacity: opacityForBlock(progress, 0)
           }}
           >We know our tools inside out.</div>
           <span className="font-bold text-4xl inline-block transition-opacity duration-1000 after:content-['_']"
              style={{
              opacity: opacityForBlock(progress, 1)
            }}
           >Our team has contributed 123 commits to React Native core, powering thounds of apps worldwide.</span>
           <span className="font-bold text-4xl inline-block transition-opacity duration-1000"
              style={{
                opacity: opacityForBlock(progress, 2)
              }}
           >We are maintaining some of the most popular open source projects!</span>
         </div>
      </div>

    </div>
  )
};

export default BodyParagraph;
