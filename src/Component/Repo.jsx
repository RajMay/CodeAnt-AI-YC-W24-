import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Repo() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("UtkarshDhairyaPal");


  // Dropdown options
  const options = [
    { value: "utkarsh", label: "utkarshDhairyaPal" },
    { value: "dk", label: "DK" },
    { value: "aaliya", label: "Aaliya" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans"> 
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
        {/* Logo */}
        <div className="p-4 flex items-center gap-2 border-b"> 
          <img
            src="/images/logo1.png"
            alt="CodeAnt AI Logo"
          />
        </div>

        {/* User */}
        <div className="p-4 border-b">
          {/* Custom Dropdown */}
          <div className="relative">
            <button
              onClick={(e) => {
                const dropdown = e.currentTarget.nextElementSibling;
                dropdown.classList.toggle("hidden");
              }}
              className="w-full px-4 py-2 border rounded-md bg-white shadow-sm flex justify-between items-center text-gray-700"
            >
              {selectedOption}
              <span className="ml-2">▿</span>
            </button>

            {/* Dropdown Options */}
            <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg hidden">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setSelectedOption(option.label);
                    const dropdown = document.querySelector(".hidden");
                    if (dropdown) dropdown.classList.add("hidden");
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <a
            href="#repositories"
            className="flex items-center gap-2 p-2 rounded-md text-blue-500 bg-blue-100 font-semibold"
          >
            <img
                src="images/home.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            Repositories
          </a>
          <a
            href="#ai-code-review"
            className="flex items-center gap-2 p-2 rounded-md text-gray-600 hover:bg-white-200"
          >
          <img
                src="images/ai.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            AI Code Review
          </a>
          <a
            href="#cloud-security"
            className="flex items-center gap-2 p-2 rounded-md text-gray-600 hover:bg-white-200"
          >
           <img
                src="images/cloud.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            Cloud Security
          </a>
          <a
            href="#how-to-use"
            className="flex items-center gap-2 p-2 rounded-md text-gray-600 hover:bg-white-200"
          >
           <img
                src="images/how.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            How to Use
          </a>
          <a
            href="#settings"
            className="flex items-center gap-2 p-2 rounded-md text-gray-600 hover:bg-white-200"
          >
            <img
                src="images/setting.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            Settings
          </a>
        </nav>

        {/* Support and Logout */}
        <div className="mt-auto p-4 space-y-2">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
          <img
                src="images/call.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            Support
          </button>
          <button  onClick={() => navigate("/")} className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
          <img
                src="images/setting.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
  {/* Header */}
  <div className="mb-1 border border-gray-300 p-6 rounded-lg bg-white shadow-sm">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      {/* Title Section */}
      <div>
        <h1 className="text-2xl font-bold">Repositories</h1>
        <p className="text-gray-600">33 total repositories</p>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-600 bg-white hover:bg-gray-100 shadow-sm">
          <span>🔄</span> Refresh All
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600">
          + Add Repository
        </button>
      </div>
    </div>

    {/* Search Section */}
    <div className="mt-4 ">
      <input
        type="text"
        placeholder="Search Repositories"
        className="w-74 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
    </div>
  </div>

  {/* Repository List */}
  <div className="bg-white mt-1 shadow-sm rounded-lg divide-y divide-gray-200">
    {[{ name: "design-system", size: "7320 KB", type: "Public", lang: "React 🔹", updated: "Updated 1 day ago" },
      { name: "codeant-ci-app", size: "5871 KB", type: "Private", lang: "JavaScript 🔹", updated: "Updated 2 days ago" },
      { name: "analytics-dashboard", size: "4521 KB", type: "Private", lang: "Python 🔹", updated: "Updated 5 days ago" },
      { name: "mobile-app", size: "3096 KB", type: "Public", lang: "Swift 🔹", updated: "Updated 3 days ago" },
      { name: "e-commerce-platform", size: "6210 KB", type: "Private", lang: "Java 🔹", updated: "Updated 6 days ago" },
      { name: "blog-website", size: "1876 KB", type: "Public", lang: "HTML/CSS 🔹", updated: "Updated 4 days ago" },
      { name: "social-network", size: "5432 KB", type: "Private", lang: "PHP 🔹", updated: "Updated 7 days ago" },
    ].map((repo, index) => (
      <div
        key={index}
        className="p-4 flex flex-col gap-2"
      >
        {/* Repo Header */}
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {repo.name}
          </h3>
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              repo.type === "Public"
                ? "bg-blue-50 text-blue-600"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            {repo.type}
          </span>
        </div>

        {/* Repo Details */}
        <div className="mt-2 flex items-center gap-6 text-sm text-gray-600">
          <p className="flex items-center gap-1">
            <span>{repo.lang}</span>
          </p>
          <p className="flex items-center gap-1">
            <img
              src="/images/logo4.png"
              alt="Size Icon"
              className="w-4 h-4"
            />
            {repo.size}
          </p>
          <p className="flex items-center gap-1">
            <span>{repo.updated}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
</main>

    </div>
  );
}

export default Repo;
