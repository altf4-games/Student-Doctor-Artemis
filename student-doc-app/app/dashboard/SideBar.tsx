'use client';

import React from 'react'
import { BsClipboard2DataFill } from 'react-icons/bs';
import { FaCalendarCheck, FaHistory } from 'react-icons/fa';
import { FaFileSignature } from 'react-icons/fa6';
import { MdMonitorHeart } from 'react-icons/md';
import { PopupButton } from 'react-calendly';

const SideBar = () => {
  return (
    
        <div className=' bg-white h-full flex flex-col gap-3 px-4 py-2 fixed w-80'>
{/*SideBar */}
        <div>

        </div>
          
            <div className='bg-neutral-200 px-4 py-1 rounded-md text-black flex flex-row gap-2 items-center justify-start font-medium text-sm'>
            <FaFileSignature />
            <span>Appointments</span>
            </div>
            <div className='bg-neutral-200 px-4 py-1 rounded-md text-black flex items-center justify-start font-medium text-sm gap-2'>
        <FaCalendarCheck />
        
              <PopupButton
        url="https://calendly.com/zatchtec2005"
        rootElement={document.body}
        text="Book a session"
        className='flex items-center justify-center px-4 py-1 text-white border-[2px] border-white rounded-lg hover:bg-white hover:text-black transition'
        />
            </div>
            <div className='bg-neutral-200 px-4 py-1 rounded-md text-black flex items-center justify-start font-medium text-sm gap-2'>
            <MdMonitorHeart />
              <span>Health Monitoring</span>
            </div>
            <div className='bg-neutral-200 px-4 py-1 rounded-md text-black flex items-center justify-start font-medium text-sm gap-2'>
            <BsClipboard2DataFill />
              <span>Records</span>
            </div>
            <div className='bg-neutral-200 px-4 py-1 rounded-md text-black flex items-center justify-start font-medium text-sm gap-2'>
            <FaHistory />
              <span>Medical History</span>
            </div>

        </div>
     
  )
}

export default SideBar
