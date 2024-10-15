"use client";
import React from 'react';
import SideBar from '../dashboard/SideBar';
import RecordCard from './RecordCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Records = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col min-h-screen bg-gray-50'>
        <div className='flex w-full h-[100vh]'>
          <aside className='w-1/4'>
            <SideBar />
          </aside>
          <main className='flex-grow p-6'>
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>Patient Records</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <RecordCard
                numberOfSessions="3"
                symptoms="Headache, Fever, Body Pain"
                prescription="ABC, DEF 200mg"
                patientName="Raunak Kumar Gupta"
                userEmail="test123@gmail.com"
                doctorName="Pradyum Mistry"
                date="2024-10-15"
              />
              <RecordCard
                numberOfSessions="2"
                symptoms="Headache, Fever, Body Pain"
                prescription="ABC, DEF 200mg"
                patientName="Vishwa Koparkar"
                userEmail="test215@gmail.com"
                doctorName="Rahul Kadam"
                date="2024-10-14"
              />
              <RecordCard
                numberOfSessions="1"
                symptoms="Cough, Cold"
                prescription="XYZ, DEF 200mg"
                patientName="Ajay Sharma"
                userEmail="test300@gmail.com"
                doctorName="Sita Rao"
                date="2024-10-13"
              />
            </div>
          </main>
        </div>

      </div>
              <Footer />
    </>
  );
}

export default Records;
