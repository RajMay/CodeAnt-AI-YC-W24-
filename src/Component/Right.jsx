import React from 'react';

const Right = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-screen  p-4">
      
      <div className=" bg-white shadow-lg rounded-2xl w-half max-w-xl p-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
          <img
            src="https://via.placeholder.com/24" 
            alt="AI Icon"
            className="w-6 h-6 mr-2"
          />
          AI to Detect & Autofix Bad Code
        </h2>
        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">30+</p>
            <p className="text-gray-500">Language Support</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">10K+</p>
            <p className="text-gray-500">Developers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">100K+</p>
            <p className="text-gray-500">Hours Saved</p>
          </div>
        </div>
      </div>

      <div className="absolute bg-white shadow-md rounded-xl w-52 p-2 transform translate-x-12 translate-y-24  ">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 00-1.414 0L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Issues Fixed</p>
            <h3 className="text-2xl font-bold text-gray-900">500K+</h3>
          </div>
        </div>
        <p className="text-sm text-blue-500 flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-blue-500 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
          14% This week
        </p>
      </div>
    </div>
  );
};

export default Right;
