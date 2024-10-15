import React from 'react';
import { CgProfile } from 'react-icons/cg';

interface RecordProps {
  numberOfSessions?: string;
  doctorName?: string;
  userEmail?: string;
  symptoms?: string;
  prescription?: string;
  date?: string;
  patientName?: string;
}

const RecordCard: React.FC<RecordProps> = ({
  numberOfSessions,
  date,
  patientName,
  userEmail,
  doctorName,
  symptoms,
  prescription
}) => {
  return (
    <div className='w-full flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
      <div className='flex flex-col gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50'>
        <div className='flex justify-between items-center text-gray-800'>
          <span className='text-sm text-gray-600 bg-gray-200 rounded-md px-2 py-1'>
            Sessions: {numberOfSessions}
          </span>
          <div className='text-sm'>
            <span className='font-medium'>Dr. {doctorName}</span>
            <span className='block text-gray-500'>{date}</span>
          </div>
        </div>
        <div className='flex items-start'>
          <div className='w-1/4 h-24 p-1 rounded-lg border border-gray-200 flex items-center justify-center'>
            <CgProfile size={60} className='text-gray-400' />
          </div>
          <div className='flex flex-col justify-between ml-4'>
            <div className='text-gray-800 font-medium text-lg'>
              Patient: {patientName}
            </div>
            <div className='text-gray-500'>
              <div>Email: {userEmail}</div>
              <div>Symptoms: {symptoms}</div>
              <div>Prescription: {prescription}</div>
            </div>
            <button className='mt-4 px-4 py-2 bg-teal-500 rounded-md text-white font-medium hover:bg-teal-600 transition duration-200'>
              Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordCard;
