import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'antd';

const menus = [
  {
    title: 'Why Dreambill',
    url: '/'
  },
  {
    title: 'Contact Us',
    url: '/'
  },
  {
    title: 'Pricing',
    url: '/'
  },
  {
    title: 'Blog',
    url: '/'
  }
];

const Navbar = () => {
  return (
    <div className="rounded-[43px] bg-white py-4 px-[45px] flex items-center justify-between sticky top-8 shadow-dreambill">
      <div>
        <Image
          src="/logo.svg"
          width={154}
          height={33}
          alt="Picture of the author"
        />
      </div>
      <ul className="flex gap-[50px]">
        {menus.map((menu: any, index: number) => {
          return (
            <li key={index}>
              <Link href={menu.url}>
                {' '}
                <span className="font-semibold text-base text-dreambill hover:text-dreambill/80">
                  {' '}
                  {menu.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-1">
        <Button
          className="!text-dreambill !font-semibold"
          type="text"
          size="large"
        >
          Sign In
        </Button>
        <Button
          className="bg-dreambill hover:!bg-dreambill/75"
          size="large"
          type="primary"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
