// components/SideBar.js

'use client';

import React from 'react';
import { BsClipboard2DataFill } from 'react-icons/bs';
import { FaCalendarCheck } from 'react-icons/fa';
import { FaFileSignature } from 'react-icons/fa6';
import { MdMonitorHeart } from 'react-icons/md';
import { PopupButton } from 'react-calendly';
import { useRouter } from 'next/navigation';

const SideBar = () => {
  const router = useRouter();
  return (
    <div className='bg-white shadow-lg rounded-lg h-full flex flex-col gap-3 px-4 py-6 w-80'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>Dashboard</h2>
      
      <button
        className='bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-800 flex flex-row gap-2 items-center justify-start font-medium text-sm transition'
        onClick={() => router.push("/dashboard")}
      >
        <FaFileSignature />
        <span>Appointments</span>
      </button>

      <div className='bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-800 flex items-center justify-start font-medium text-sm gap-2 transition cursor-pointer'>
        <FaCalendarCheck />
        <PopupButton
          url="https://calendly.com/zatchtec2005"
          rootElement={document.body}
          text="Book Appointment"
          className='flex-grow'
        />
      </div>

      <button
        className='bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-800 flex items-center justify-start font-medium text-sm gap-2 transition'
        onClick={() => router.push("/health-monitor")} // Adjust path if needed
      >
        <MdMonitorHeart />
        <span>Health Monitoring</span>
      </button>

      <button
        className='bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-800 flex items-center justify-start font-medium text-sm gap-2 transition'
        onClick={() => router.push("/records")}
      >
        <BsClipboard2DataFill />
        <span>Records</span>
      </button>
    </div>
  );
};

export default SideBar;
