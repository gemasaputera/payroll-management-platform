import Image from 'next/image';
import React from 'react';
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({
  subsets: ['latin']
});

export interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-10 shadow-lg">
      <Image className="mb-8" src={icon} width={60} height={60} alt="" />
      <h3
        style={nunito.style}
        className="font-bold text-base text-[#2C2E31] mb-3"
      >
        {title}
      </h3>
      <p style={nunito.style} className="font-normal text-xs text-[#69727A]">
        {description}
      </p>
    </div>
  );
};

export default FeatureItem;
