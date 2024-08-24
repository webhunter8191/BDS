import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Importing the back arrow icon

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSignup = () => {
    console.log({
      email,
      password,
      confirmPassword,
    });
    };
      const handleLoginRedirect = () => {
        navigate("/login");
      };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Back Icon */}
      <div className="w-full p-4 flex items-center">
        <button onClick={handleBack} className="text-pink-500">
          <FaArrowLeft size={24} />
        </button>
      </div>

      <div className="flex flex-1 flex-col md:flex-row items-center justify-center w-full relative z-10 overflow-hidden">
        <div className="w-full md:w-1/3 bg-white p-8 md:p-10 shadow-lg rounded-lg flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2 text-center">Sign up</h1>
          <p className="text-gray-500 mb-6 text-center">
            Create an account to get started with Brij Divine Stay.
          </p>

          <div className="w-full mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              placeholder="Enter your password"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              placeholder="Confirm your password"
            />
          </div>

          <button
            onClick={handleSignup}
            className="w-full bg-pink-500 text-white font-semibold rounded-lg p-3 mt-4"
          >
            Sign up
          </button>
          <button
            onClick={handleLoginRedirect}
            className="w-full bg-gray-200 text-pink-500 font-semibold rounded-lg p-3 mt-4"
          >
            Already have an account? Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
