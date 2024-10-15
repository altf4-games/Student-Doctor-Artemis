// components/Details1.tsx

'use client';

import React from 'react';
import { CgProfile } from 'react-icons/cg';

interface DetailsProps {
  numberOfSessions?: string; // Changed to lowercase for consistency
  doctorName?: string;
  userEmail?: string;
  timings?: string;
  date?: string;
  patientName?: string;
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
    <div className='w-full h-auto flex flex-col gap-4 bg-white px-6 py-4 rounded-lg shadow-lg'>
      {/* Card of appointment details */}
      <div className='flex flex-col gap-2 border border-neutral-200 rounded-md bg-white p-4'>
        {/* Top line */}
        <div className='flex flex-row items-center justify-between text-sm font-medium'>
          <span className='text-gray-600 p-1 bg-gray-100 rounded-md'>
            Number of Sessions: {numberOfSessions}
          </span>
          <div className='flex flex-col gap-1 text-gray-800 p-1'>
            <span>{timings}</span>
            <span className='text-gray-500'>{date}</span>
          </div>
        </div>
        {/* Main Card */}
        <div className='flex flex-row items-start justify-between gap-4'>
          <div className='w-24 h-24 p-1 rounded-full border border-neutral-200 flex items-center justify-center'>
            <CgProfile size={75} className='text-gray-600' />
          </div>
          <div className='flex flex-col gap-2 text-gray-800 font-medium'>
            <div>Name of Patient: {patientName}</div>
            <div>Email: {userEmail}</div>
            <div>Doctor Name: {doctorName}</div>
            <div className='flex items-center justify-center'>
              <div className='w-full px-4 py-2 bg-teal-500 rounded-md 
              flex items-center justify-center text-white font-medium text-md
              hover:bg-teal-600 transition-all duration-200 ease-in-out
              cursor-pointer
              '>
                Feedback
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details1;
