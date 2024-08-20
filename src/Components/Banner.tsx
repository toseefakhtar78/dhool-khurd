import React from 'react';
import Image from 'next/image';

interface BannerProps {
  text: string;
  backgroundImage: string;
  textColor?: 'custom-white' | 'custom-black'; 
  alt?: string;
}

const Banner: React.FC<BannerProps> = ({
  text,
  backgroundImage,
  alt = '', 
  textColor = '', 
 
}) => {
  
  
 
 
  const textColorClass = textColor === 'custom-black' ? 'custom-black' : 'custom-white';

  return (
    <div
      className="relative overflow-hidden"
    
    >
     
      <Image
        src={backgroundImage}
        alt={alt}    
        quality={100}         
        priority    
        height={300}
        width={3000}        
      />
    
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <h1 className={`lg:text-4xl md:text-2xl text-xl font-mono font-bold text-center ${textColorClass}`}>
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
