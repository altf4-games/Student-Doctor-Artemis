'use client';

import React from 'react';
import { BsClipboard2DataFill } from 'react-icons/bs';
import { FaCalendarCheck, FaHistory } from 'react-icons/fa';
import { FaFileSignature } from 'react-icons/fa6';
import { MdMonitorHeart } from 'react-icons/md';
import { PopupButton } from 'react-calendly';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SideBar = () => {
  const router = useRouter();
  return (
    <>
          <div className='bg-white h-full flex flex-col gap-3 px-4 py-2  w-80'>
      {/* SideBar */}
      <div></div>

      <button
        className='bg-neutral-200 px-4 py-2 rounded-md text-black flex flex-row gap-2 items-center justify-start font-medium text-sm hover:bg-neutral-300 transition cursor-pointer'
        onClick={() => router.push("/dashboard")}
      >
        <FaFileSignature />
        <span>Appointments</span>
      </button>

      <div className='bg-neutral-200 px-4 py-2 rounded-md text-black flex items-center justify-start font-medium text-sm gap-2 hover:bg-neutral-300 transition cursor-pointer'>
        <FaCalendarCheck />
        <PopupButton
          url="https://calendly.com/zatchtec2005"
          rootElement={document.body}
          text="Book a session"
          className=''
        />
      </div>

      <button
        className='bg-neutral-200 px-4 py-2 rounded-md text-black flex items-center justify-start font-medium text-sm gap-2 hover:bg-neutral-300 transition cursor-pointer'
        onClick={() => { /* Add appropriate action here */ }}
      >
        <MdMonitorHeart />
        <span>Health Monitoring</span>
      </button>

      <button
        className='bg-neutral-200 px-4 py-2 rounded-md text-black flex items-center justify-start font-medium text-sm gap-2 hover:bg-neutral-300 transition cursor-pointer'
        onClick={() => router.push("/records")}
      >
        <BsClipboard2DataFill />
        <span>Records</span>
      </button>

      <button
        className='bg-neutral-200 px-4 py-2 rounded-md text-black flex items-center justify-start font-medium text-sm gap-2 hover:bg-neutral-300 transition cursor-pointer'
        onClick={() => { /* Add appropriate action here */ }}
      >
        <FaHistory />
        <span>Medical History</span>
      </button>
      </div>
    </>

  );
}

export default SideBar;
