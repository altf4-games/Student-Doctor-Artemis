"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Import the default styling for the calendar
import Navbar from "./components/Navbar";

export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="hero bg-teal-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Student-Doctor Health System
          </h1>
          <p className="text-xl mb-8">
            Empowering you with health monitoring, appointment booking, and AI insights.
          </p>
          <a href="#features" className="bg-white text-teal-500 py-2 px-6 rounded-lg shadow-lg font-bold text-lg">
            Explore Features
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="feature text-center p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">Health Monitoring</h3>
              <p className="text-gray-600">Track your vitals and health metrics with AI-powered insights.</p>
            </div>
            <div className="feature text-center p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">Priority Queue</h3>
              <p className="text-gray-600">Minimize wait times by getting prioritized based on your health needs.</p>
            </div>
            <div className="feature text-center p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">Appointment Booking</h3>
              <p className="text-gray-600">Easily book appointments and view doctor availability in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-teal-700 mb-10">
            Book an Appointment
          </h2>
          <div className="calendar-container">
            <Calendar
              onChange={setDate}
              value={date}
              className="mx-auto bg-white p-4 rounded-lg shadow-lg"
            />
          </div>
          <p className="text-gray-700 mt-4">
            Selected Date: {date.toDateString()}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="benefit text-center p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">User-Friendly UI/UX</h3>
              <p className="text-gray-600">Enjoy a clean, intuitive interface that makes health management simple.</p>
            </div>
            <div className="benefit text-center p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">AI-Driven Insights</h3>
              <p className="text-gray-600">Benefit from smart AI systems for health tracking and appointment management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="testimonial text-center p-6 bg-white shadow-lg rounded-lg">
              <p className="mb-4">"The AI-powered monitoring is a game changer! I can keep track of my vitals effortlessly."</p>
              <h3 className="text-xl font-bold text-teal-600">- Sarah Lee</h3>
            </div>
            <div className="testimonial text-center p-6 bg-white shadow-lg rounded-lg">
              <p className="mb-4">"The appointment booking system is seamless, and the priority queue saved me so much time."</p>
              <h3 className="text-xl font-bold text-teal-600">- Michael Brown</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <p>© 2024 Student-Doctor Health System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
