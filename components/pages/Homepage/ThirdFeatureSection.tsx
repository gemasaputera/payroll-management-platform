import React from 'react';
import FeatureItem, { FeatureProps } from './FeatureItem';

const ThirdFeatureSection = () => {
  const features: FeatureProps[] = [
    {
      icon: '/icon-dollars.png',
      title: 'Payroll & Expenses',
      description: `Our industry redefining payroll
            system automates your payroll
            and saves time for everyone.`
    },
    {
      icon: '/icon-user-plus.png',
      title: 'Hiring & Onboarding',
      description: `An integrated hiring platform
      for teams to collaborate with
      recruiters and hire good talent.`
    },
    {
      icon: '/icon-checklist.png',
      title: 'Performance & Culture',
      description: `An engaging culture driven by
      contextual feedback and
      organization aligned goals.`
    }
  ];
  return (
    <div className="max-w-7xl pt-[130px] flex flex-col mx-auto items-center gap-16">
      <h3 className="max-w-3xl text-[48px] text-[#085C60] leading-[62px] text-center mx-auto font-bold">
        Everything you need to create a high performance culture
      </h3>
      <div className="flex flex-col lg:flex-row gap-[40px]">
        {features.map((feature: any, index: number) => {
          return <FeatureItem {...feature} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ThirdFeatureSection;
