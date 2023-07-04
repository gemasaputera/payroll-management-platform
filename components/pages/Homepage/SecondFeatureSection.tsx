import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

const SecondFeatureSection = () => {
  return (
    <div className="py-12 mx-3">
      <div className="pl-12 w-full bg-[#EEFCF9] max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex-1 py-12 pr-6 max-w-[444px]">
          <Image src="/icon-interface.png" width={85} height={93} alt="" />
          <h3 className="font-bold text-[48px] leading-[60px] text-[#085C60]">
            Get more work done, wherever you are.
          </h3>
          <p className="text-[#556F71] text-[1.25rem] font-normal">
            Our guaranteed top-tier service and industry-leading worldwide
            coverage provide peace of mind for any global team.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/illustration-interface.png"
            width={681}
            height={635}
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#EEFCF9] max-w-7xl w-full mx-auto">
        <div className="max-w-7xl w-full mx-auto bg-[#085C60]/10 rounded-b-3xl py-9 flex justify-center items-center">
          <Button type="text" className="text-[#085C60] font-semibold">
            {' '}
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondFeatureSection;
