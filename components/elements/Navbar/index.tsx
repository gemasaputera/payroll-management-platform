import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'antd';
import { HiBars3, HiXCircle } from 'react-icons/hi2';

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
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openMenu]);
  return (
    <>
      {openMenu ? (
        <div className="w-screen h-screen z-20 bg-white fixed -mt-8">
          <div className="w-full flex justify-end p-8">
            <div>
              <Button
                type="text"
                size="large"
                className="flex justify-center items-center"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <HiXCircle className="w-8 h-8" />
              </Button>
            </div>
          </div>
          <div className="p-6 mx-auto">
            <ul className="gap-4 flex flex-col items-center">
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
            <div className="flex flex-col items-center gap-3 mt-2">
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
        </div>
      ) : null}
      <div className="rounded-[43px] bg-white py-4 px-[45px] flex items-center justify-between sticky top-8 shadow-dreambill mx-auto max-w-7xl z-10">
        <div>
          <Image
            src="/logo.svg"
            width={154}
            height={33}
            alt="Picture of the author"
          />
        </div>
        <ul className="gap-[50px] hidden lg:flex">
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

        <div className="hidden lg:flex gap-1">
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

        <div className="flex lg:hidden gap-1">
          <Button
            className="!text-dreambill !font-semibold"
            type="text"
            onClick={() => setOpenMenu(!openMenu)}
            size="large"
          >
            <HiBars3 className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
