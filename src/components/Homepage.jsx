import React from "react";

const Homepage = () => {
  return (
    <div className="w-full bg-blue-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center relative bg-blue-800">
        <h1 className="text-5xl font-bold">Your Name</h1>
        <p className="text-xl mt-2">Your Profession</p>
        {/* Social Media Links */}
        <div className="flex gap-4 mt-4">
          <a href="#" className="p-3 bg-blue-500 rounded-full">🔗</a>
          <a href="#" className="p-3 bg-pink-500 rounded-full">🔗</a>
          <a href="#" className="p-3 bg-yellow-500 rounded-full">🔗</a>
        </div>
        {/* White Subtraction Gap */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white skew-y-2"></div>
      </section>

      {/* About Me Section */}
      <section className="p-10 text-center relative bg-blue-700">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4">This is a short description about yourself.</p>
        {/* White Subtraction Gap */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white skew-y-2"></div>
      </section>

      {/* Skills Section */}
      <section className="p-10 relative bg-blue-800">
        <h2 className="text-3xl font-semibold text-center">Skills</h2>
        <div className="flex justify-center gap-4 mt-4">
          <div className="p-4 bg-blue-600 rounded-xl">React</div>
          <div className="p-4 bg-blue-600 rounded-xl">Tailwind CSS</div>
          <div className="p-4 bg-blue-600 rounded-xl">JavaScript</div>
        </div>
        {/* White Subtraction Gap */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white skew-y-2"></div>
      </section>

      {/* Experience Section */}
      <section className="p-10 relative bg-blue-700">
        <h2 className="text-3xl font-semibold text-center">Experience</h2>
        <div className="mt-4 relative border-l-4 border-gray-300 pl-4">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Company Name</h3>
            <p>Role | Year - Year</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Company Name</h3>
            <p>Role | Year - Year</p>
          </div>
        </div>
        {/* White Subtraction Gap */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white skew-y-2"></div>
      </section>
    </div>
  );
};

export default Homepage;
