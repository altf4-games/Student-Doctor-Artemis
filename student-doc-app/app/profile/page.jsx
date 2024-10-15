"use client";

import { ChangeEvent, FormEvent, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProfilePage = () => {
    const [healthMetrics, setHealthMetrics] = useState({
        weight: '',
        temperature: '',
        symptoms: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHealthMetrics({ ...healthMetrics, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Health Metrics:', healthMetrics);
        // Submit logic (to be integrated with backend)
    };

    return (
        <>
            <Navbar />
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Student Health Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Weight (kg)</label>
                        <input
                            type="number"
                            name="weight"
                            value={healthMetrics.weight}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-800 outline-none transition focus:border-teal-500"
                            placeholder="Enter your weight"
                            min="30"
                            max="200"
                            step="0.1"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Temperature (°C)</label>
                        <input
                            type="number"
                            name="temperature"
                            value={healthMetrics.temperature}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-800 outline-none transition focus:border-teal-500"
                            placeholder="Enter your body temperature in °C"
                            min="35"
                            max="43"
                            step="0.1"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2">History and Symptoms</label>
                        <textarea
                            name="symptoms"
                            value={healthMetrics.symptoms}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-800 outline-none transition focus:border-teal-500"
                            placeholder="Describe your symptoms and medical history"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <button type="submit" className="w-full p-3 text-white bg-teal-500 rounded-md hover:bg-teal-600 transition duration-200">
                            Submit Health Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
        </>

    );
};

export default ProfilePage;
