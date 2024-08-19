import Image from 'next/image';

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(/icons/MB.jpg)' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white lg:text-4xl md:text-xl font-mono font-bold text-center px-4">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
