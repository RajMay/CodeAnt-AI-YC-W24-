import React, { useState } from "react"; // Added useState import
import { useNavigate } from "react-router-dom";
import Right from "./Right";

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("SAAS");

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/2">
        <Right />
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-50 flex flex-col justify-center items-center">
        {/* Top Box */}
        <div className="border border-white shadow-lg  p-4 w-[28rem]">
          <div className="text-center">
            {/* Logo */}
            <img
              src="/images/logo1.png"
              alt="CodeAnt Logo"
              className="mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to CodeAnt AI
            </h1>
          </div>

          {/* Tabs */}
          <div className=" w-full flex justify-center mt-5 bg-gray-100  p-1 ">
            <button
              onClick={() => setActiveTab("SAAS")}
              className={`w-1/2 py-3 text-center rounded-lg ${
                activeTab === "SAAS"
                  ? "text-white bg-blue-500"
                  : "text-blue-500 bg-transparent"
              } transition duration-200`}
            >
              SAAS
            </button>
            <button
              onClick={() => setActiveTab("Self Hosted")}
              className={`w-1/2 py-3 text-center rounded-lg ${
                activeTab === "Self Hosted"
                  ? "text-white bg-blue-500"
                  : "text-blue-500 bg-transparent"
              } transition duration-200`}
            >
              Self Hosted
            </button>
          </div>
        </div>

        {/* Bottom Box */}
        <div className="border border-white  shadow-lg  w-[28rem] p-5 mt-1">
          <div className="space-y-4">
            <button  onClick={() => navigate("/repo")} className="w-full flex items-center justify-center gap-1 px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="GitHub"
                className="w-6 h-6"
              />
              Sign in with GitHub
            </button>
            <button  onClick={() => navigate("/repo")} className="w-full flex items-center justify-center gap-1 px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                alt="Bitbucket"
                className="w-6 h-6"
              />
              Sign in with Bitbucket
            </button>
            <button  onClick={() => navigate("/repo")} className="w-full flex items-center justify-center gap-1 px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732201.png"
                alt="Azure DevOps"
                className="w-6 h-6"
              />
              Sign in with Azure DevOps
            </button>
            <button  onClick={() => navigate("/repo")} className="w-full flex items-center justify-center gap-1 px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                alt="GitLab"
                className="w-6 h-6"
              />
              Sign in with GitLab
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-4">
          By signing up, you agree to the{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <div>
        <img src="/images/logo3.png" alt="Hero" className="fixed bottom-4 left-4 w-40 " />
      </div>
    </div>
  );
}

export default Home;
