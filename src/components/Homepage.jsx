import React from "react";

const Homepage = () => {
  return (
    <div className="w-full bg-blue-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center relative bg-[#0A192F] text-white">
  {/* Profile Image */}
  <img
    src="https://media.licdn.com/dms/image/v2/D5603AQHuipcZfSkjCA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726917248159?e=1746057600&v=beta&t=SZMUQoFc75YL9MpJGVqTUQEik8nEExuYkpTlMSBIFHA" // Replace with your actual image URL
    alt="Rajesh Lingala"
    className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4"
  />

  {/* Name & Profession */}
  <h1 className="text-6xl font-bold tracking-wide">Rajesh Lingala</h1>
  <p className="text-2xl mt-2 text-gray-300">Full Stack Developer</p>

  {/* Social Media Links */}
  <div className="flex gap-6 mt-6">
    <a href="https://github.com/Rajesh2607" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-6 h-6" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-700 rounded-full hover:bg-blue-600 transition">
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-500 rounded-full hover:bg-blue-400 transition">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6" />
    </a>
  </div>

  {/* White Subtraction Gap Effect */}
  <div className="absolute bottom-0 left-0 w-full h-12 bg-white skew-y-3"></div>
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
