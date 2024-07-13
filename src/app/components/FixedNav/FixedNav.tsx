'use client';
import Image from 'next/image';
import logo from '@/app/assets/logo.png';
import {useState} from 'react';
import './FixedNavStyles.css';
import MenuBanner from '../MenuBanner/MenuBanner';
export default function FixedNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" w-full flex justify-center px-4 sm:px-10 md:px-12 pt-3 sm:pt-6 md:pt-8 fixed z-10 top-0">
        <div className="w-full max-w-[1400px]  flex justify-between">
          <div className="logo-section items-center flex">
            <Image src={logo} alt="logo" width={67} height={25} />
          </div>
          <div className="nac-sectiob flex items-center">
            {/* <ul className="flex items-center">
            <li className="px-4">Home</li>
            <li className="px-4">About</li>
            <li className="px-4">Services</li>
            <li className="px-4">Contact</li>
            <li className="px-4">Blog</li>
            <li className="px-4">Career</li>
          </ul> */}
            <div className="text-white notfication-icon bg-red-500 rounded-full w-[30px] flex h-[30px] justify-center items-center ">
              0
            </div>
            <button
              className="bg-red-500 text-white w-[50px] flex h-[50px] justify-center items-center px-3 py-4  ml-3 rounded-full  "
              onClick={() => {
                setOpen(!open);
              }}>
              <div className="bar-wrap relative w-full h-full">
                <div
                  className={`${
                    open ? ' barleft' : 'top-0 bar0'
                  }  w-full h-[3px] rounded-sm absolute transition-all duration-500 bg-white`}></div>
                <div
                  className={`${open ? 'opacity-0' : ' opacity-100'} 
                bar w-full h-[3px] rounded-sm absolute   transition-all  duration-500 bg-white`}></div>
                <div
                  className={`${
                    open ? 'barright ' : 'top-[100%] bar0'
                  }  w-full h-[3px] rounded-sm absolute transition-all  duration-500 bg-white`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 w-[100vw] h-[100vh] overflow-hidden  ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
          // open ? 'block' : ' hidden'
        }`}>
        <MenuBanner menuOpen={open} setMenu={setOpen} />
      </div>
    </>
  );
}
