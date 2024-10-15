"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Function to handle sending OTP (mock)
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    // Mock OTP generation
    const mockOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    setGeneratedOtp(mockOtp);

    setOtpSent(true);
    setError("");
    alert(`Mock OTP sent to ${email}: ${mockOtp}`); // Simulate OTP sending (just alert in this case)
  };

  // Function to verify OTP (mock)
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      // OTP is correct, redirect to profile
      router.push("/profile");
    } else {
      setError("Invalid OTP, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            alt="Company Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {otpSent ? "Enter OTP" : "Sign in to your account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              create a new account
            </a>
          </p>
        </div>

        <div className="bg-white p-8 shadow-md rounded-lg">
          {!otpSent ? (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send OTP
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  OTP sent to {email}
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Verify OTP
                </button>
              </div>
            </form>
          )}

          {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
        </div>

        <div className="text-center text-gray-500">
          <p>Need help? <a href="#" className="text-indigo-600">Contact support</a></p>
        </div>
      </div>
    </div>
  );
}
