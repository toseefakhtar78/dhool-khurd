import React from 'react';

interface BannerProps {
  text: string;
  backgroundImage: string;
  textColor?: 'custom-white' | 'custom-black'; // Use custom colors if needed
  height?: string;
  width?: string;
}

const Banner: React.FC<BannerProps> = ({
  text,
  backgroundImage,
  textColor = '', 
  height = '500px',
  width = '100%',
}) => {
  
  const textColorClass = textColor === 'custom-black' ? 'custom-black' : 'custom-white';

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height, 
        width: width,  
        
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <h1 className={`lg:text-4xl md:text-2xl text-xl font-mono font-bold text-center ${textColorClass}`}>
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
