// pages/Dashboard.js

import React from 'react';
import SideBar from './SideBar';
import Details1 from './Details1';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col min-h-screen bg-gray-50'>
        <div className='flex w-full h-[100vh]'>
          <aside className='w-1/4'>
            <SideBar />
          </aside>
          <main className='flex-grow p-6'>
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>Welcome to Your Dashboard</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
          </main>
        </div>

      </div>
              <Footer />
    </>
  );
};

export default Dashboard;
