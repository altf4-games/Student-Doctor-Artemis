"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SideBar from '../dashboard/SideBar';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const HealthMonitors = () => {
    // Sample data for various health parameters
    const bpData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Systolic BP (mmHg)',
                data: [120, 122, 115, 130, 128, 125, 127],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
                tension: 0.1,
            },
            {
                label: 'Diastolic BP (mmHg)',
                data: [80, 78, 75, 82, 79, 77, 76],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.1,
            },
        ],
    };

    const tempData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Temperature (°C)',
                data: [36.5, 37.0, 36.8, 37.2, 37.1, 36.9, 37.0],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1,
            },
        ],
    };

    const heartRateData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Heart Rate (bpm)',
                data: [75, 78, 76, 80, 82, 79, 77],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
                tension: 0.1,
            },
        ],
    };

    const oxygenSaturationData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Oxygen Saturation (%)',
                data: [98, 97, 98, 99, 98, 97, 96],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: true,
                tension: 0.1,
            },
        ],
    };

    // New Weight Chart Data
    const weightData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Weight (kg)',
                data: [70, 71, 70.5, 69, 68, 67, 66.5],
                borderColor: 'rgba(255, 205, 86, 1)',
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                fill: true,
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex">
                <aside className="w-1/4">
                    <SideBar />
                </aside>
                <main className="flex-grow p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Health Monitors</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Blood Pressure</h2>
                            <Line data={bpData} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Blood Pressure Over Time',
                                    },
                                },
                            }} />
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Body Temperature</h2>
                            <Line data={tempData} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Body Temperature Over Time',
                                    },
                                },
                            }} />
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Heart Rate</h2>
                            <Line data={heartRateData} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Heart Rate Over Time',
                                    },
                                },
                            }} />
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Oxygen Saturation</h2>
                            <Line data={oxygenSaturationData} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Oxygen Saturation Over Time',
                                    },
                                },
                            }} />
                        </div>

                        {/* New Weight Chart */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Weight</h2>
                            <Line data={weightData} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Weight Over Time',
                                    },
                                },
                            }} />
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Summary</h2>
                        <ul className="list-disc pl-5">
                            <li className="text-gray-600 mb-2">Average Blood Pressure: <span className="font-bold">120/80 mmHg</span></li>
                            <li className="text-gray-600 mb-2">Average Body Temperature: <span className="font-bold">36.8 °C</span></li>
                            <li className="text-gray-600 mb-2">Average Heart Rate: <span className="font-bold">78 bpm</span></li>
                            <li className="text-gray-600 mb-2">Average Oxygen Saturation: <span className="font-bold">98%</span></li>
                            <li className="text-gray-600 mb-2">Average Weight: <span className="font-bold">69 kg</span></li>
                        </ul>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default HealthMonitors;
