"use client";
import React from 'react'
import SideBar from '../dashboard/SideBar'
import RecordCard from './RecordCard'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Records = () => {
  return (
    <>
      <Navbar />
          <div className='w-full h-[100vh] flex flex-col px-40'>
     <div>
{/*navbar */}
     </div>
     <div className='w-full h-full grid grid-cols-4 '>
      <div className=' h-full col-span-1'>
        <SideBar />
      </div>
        <div className='col-span-3'>

        <RecordCard
          numberOfSessions="3"
          symptoms="headache,fever,body pain"
          prescription="abc, def 200mg"
          patientName="Raunak Kumar Gupta"
          userEmail="test123@gmail.com"
          doctorName="Pradyum Mistry"
        />
        <RecordCard
          numberOfSessions="2"
          symptoms="headache,fever,body pain"
          prescription="abc, def 200mg"
          patientName="Vishwa Koparkar"
          userEmail="test215@gmail.com"
          doctorName="Rahul Kadam"
        />
        <RecordCard
          numberOfSessions="2"
          symptoms="headache,fever,body pain"
          prescription="abc, def 200mg"
          patientName="Vishwa Koparkar"
          userEmail="test215@gmail.com"
          doctorName="Rahul Kadam"
        />
        
        </div>
     </div>
      
      </div>
      <Footer />
    </>

  )
}

export default Records
