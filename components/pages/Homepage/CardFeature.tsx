import React from 'react';
import { Nunito_Sans } from 'next/font/google';
import clsx from 'clsx';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

interface Props {
  title: string;
  subtitle: string;
  onClick: (title: string) => void;
  active: boolean;
}

const CardFeature: React.FC<Props> = ({ title, subtitle, onClick, active }) => {
  return (
    <div
      className={clsx(
        'px-4 pb-4 pt-[18px] mb-[10px] cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-lg group',
        {
          ['bg-white shadow-lg !text-dreambill']: active
        }
      )}
      onClick={() => onClick(title)}
    >
      <h3
        className="text-lg font-semibold group-hover:text-dreambill"
        style={nunito.style}
      >
        {title}
      </h3>
      <p className="text-[#69727A] text-sm font-normal" style={nunito.style}>
        {subtitle}
      </p>
    </div>
  );
};

export default CardFeature;
