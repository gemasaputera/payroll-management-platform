import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="pt-8 flex bg-auto bg-no-repeat bg-center max-w-7xl mx-auto"
      style={{ backgroundImage: `url('/grid.png')` }}
    >
      <div className="flex-1 flex items-start justify-center flex-col">
        <h1 className="text-[64px] text-dreambill font-bold leading-[76px] mb-6">
          Empower Your Workforce, Unlock Africa`s Potential
        </h1>
        <h5 className="text-[20px] leading-[26px] font-normal text-[#556F71]">
          Empower your business with our comprehensive payroll platform tailored
          for the African market. Streamline your Payroll Processes, Ensure
          Compliance, and Focus on Growth
        </h5>
        <div className="flex mt-12 gap-6">
          <Button
            className="bg-dreambill !font-semibold !px-6 !py-4 !h-fit hover:-translate-y-1 hover:shadow-lg hover:!bg-dreambill/75"
            size="large"
            type="primary"
          >
            Get Started
          </Button>
          <Button
            className="border-dreambill !font-semibold !px-6 !py-4 !h-fit border text-dreambill hover:-translate-y-1 hover:shadow-lg hover:!border-dreambill hover:!text-dreambill"
            size="large"
          >
            Request a Demo
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/illustration-hero.png"
          alt="hero section"
          width={603}
          height={641}
        />
      </div>
    </div>
  );
};

export default HeroSection;
