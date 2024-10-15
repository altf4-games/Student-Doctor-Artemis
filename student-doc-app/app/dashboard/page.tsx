

import React from 'react'
import { BsClipboard2DataFill } from 'react-icons/bs';
import { FaCalendarCheck, FaHistory } from 'react-icons/fa';
import { FaFileSignature } from 'react-icons/fa6';
import { MdMonitorHeart } from 'react-icons/md';
import SideBar from './SideBar';
import Details1 from './Details1';

const Dashboard = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col px-40'>
     <div>
{/*navbar */}
     </div>
     <div className='w-full h-full grid grid-cols-4 '>
      <div className=' h-full col-span-1'>
        <SideBar />
      </div>
        <div className='col-span-3'>

        
        <Details1
          numberOfSessions="3"
          timings="10:00 am - 11:00 am"
          patientName="Raunak Kumar Gupta"
          userEmail="test123@gmail.com"
          doctorName="Pradyum Mistry"
        />
        <Details1 
          numberOfSessions="2"
          timings="4:00 pm - 5:00 pm"
          patientName="Vishwa Koparkar"
          userEmail="test215@gmail.com"
          doctorName="Rahul Kadam"
        />
        <Details1 
          numberOfSessions="2"
          timings="4:00 pm - 5:00 pm"
          patientName="Vishwa Koparkar"
          userEmail="test215@gmail.com"
          doctorName="Rahul Kadam"
        />
        </div>
     </div>
      
    </div>
  )
}

export default Dashboard
