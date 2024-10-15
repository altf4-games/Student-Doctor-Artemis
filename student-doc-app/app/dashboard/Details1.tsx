'use client';

import Image from 'next/image';
import React from 'react'
import { CgProfile } from 'react-icons/cg';

interface DetailsProps {
  numberOfSessions?: String;
  doctorName?: String;
  userEmail?: String;
  timings?: String;
  date?: String;
  patientName?: String;

}

const Details1: React.FC<DetailsProps> = ({
  numberOfSessions,
  timings,
  date,
  patientName,
  userEmail,
  doctorName,
  
  
}) => {
  return (
    <div className='w-full h-auto flex flex-col gap-4 bg-teal-500
      px-10 py-6 
    '>
      {/*card of appointment details*/}
      <div className='flex flex-col gap-2 border-neutral-100 border-[2px]
        rounded-md bg-white py-2 pb-4
      '>
        {/*Topline */}
        <div className='flex flex-row items-center justify-between px-10 font-m'>
            <span className='text-sm text-black -mt-2 p-1 bg-neutral-100 rounded-md'>
              number of sessions: {numberOfSessions}
            </span>
            <div className=' flex flex-col gap-2 text-sm text-black p-1'>
                <span>
                  {timings}
                </span>
                <span>
                  {date}
                </span>
            </div>
        </div>
        {/*MainCard */}
        <div className='flex flex-row items-start justify-between gap-10 px-10'>
            <div className='w-1/4 h-40 p-1 rounded-lg border-neutral-100 border-[2px] flex items-center justify-center'>
            <CgProfile size={75} />
            </div>  
            <div className='flex flex-col gap-2 text-black font-medium text-sm '>
            <div>
              Name of Patient: {patientName}
            </div>
            <div>
              Email: {userEmail}
            </div>
            <div>
              Doctor Name: {doctorName}
            </div>
            <div className='flex  items-center justify-center'>
              <div className='w-full px-4 py-1 bg-teal-500 rounded-md 
              flex items-center justify-center text-white font-medium text-lg
              hover:opacity-80 hover:cursor-pointer
               '>
                Feedback
              </div>
            </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Details1
