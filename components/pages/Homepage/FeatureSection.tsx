import React, { useState } from 'react';
import { Nunito_Sans } from 'next/font/google';
import CardFeature from './CardFeature';
import Image from 'next/image';

const nunito = Nunito_Sans({
  subsets: ['latin']
});

const features = [
  {
    title: 'People data & Analytics',
    subtitle: `Connect all your people together in one place and gain powerful insights`
  },
  {
    title: 'Performance and Culture',
    subtitle: `Create a culture of high performance teams and see your business scale`
  },
  {
    title: 'Hiring and Onboarding',
    subtitle: `Continue to hire and onboard great talent remotely during these times`
  }
];

const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>(
    'People data & Analytics'
  );
  return (
    <div className="pt-12 pb-3 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[800px] mx-auto mb-14">
          <h1 className="text-[64px] text-center text-dreambill font-bold leading-[76px] mb-3">
            Smart HR to outsmart the changing world
          </h1>
          <p
            className="text-[#69727A] text-center text-lg font-normal"
            style={nunito.style}
          >
            The world has changed, and it`s going to keep changing. Dreambill
            helps your teams to adapt, evolve, and scale by working more
            effectively. Spend less time on mundane tasks and focus more on
            strategy. Turn data into smarter decisions and create experiences
            your employees will love.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="w-[300px]">
            {features.map((feature, index) => {
              return (
                <CardFeature
                  key={index}
                  subtitle={feature.subtitle}
                  title={feature.title}
                  onClick={(title: string) => setSelectedFeature(title)}
                  active={selectedFeature === feature.title}
                />
              );
            })}
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/feature-01.png"
              width={800}
              height={529.66}
              alt="features"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
