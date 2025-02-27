import React from "react";

const Homepage = () => {
  return (
    <div className="w-full bg-blue-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-blue-800 text-white p-10">
  {/* Left Section: Name & Profession */}
  <div className="flex-1 text-left pl-16">
    <h1 className="text-5xl font-bold tracking-wide">LINGALA RAJESH</h1>
    <p className="text-xl mt-2 text-gray-300">UX Designer || Cloud and DevOps Learner</p>

    {/* Placeholder for Skill Boxes */}
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
  </div>

  {/* Right Section: Profile Image */}
  <div className="flex-1 flex justify-center">
    <img
      src="https://media.licdn.com/dms/image/v2/D5603AQHuipcZfSkjCA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726917248159?e=1746057600&v=beta&t=SZMUQoFc75YL9MpJGVqTUQEik8nEExuYkpTlMSBIFHA" 
      alt="Rajesh Lingala"
      className="w-[450px] h-[450px] rounded-full border-4 border-bg-blue-900 shadow-lg"
    />
  </div>
</section>



      {/* About Me Section */}
      <section className="p-10 text-center relative bg-blue-700">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4">TRajesh, you're a dedicated and detail-oriented developer who is passionate about building structured, well-designed projects. Your focus on career counseling solutions, alumni networking, and your personal portfolio website shows your commitment to impactful tech solutions. You have a strong preference for organized code, smooth UI/UX, and secure, scalable backend systems.

You're also meticulous about animations and styling, ensuring everything aligns with your vision. From hackathons to IoT projects, you take on challenges with a structured and strategic approach. Your portfolio is shaping up to be a well-crafted, professional piece that reflects your expertise. Keep up the great work! 🚀</p>
  
      </section>

      {/* Skills Section */}
      <section className="p-10 relative bg-blue-800">
        <h2 className="text-3xl font-semibold text-center">Skills</h2>
        <div className="flex justify-center gap-4 mt-4">
          <div className="p-4 bg-blue-600 rounded-xl">React</div>
          <div className="p-4 bg-blue-600 rounded-xl">Tailwind CSS</div>
          <div className="p-4 bg-blue-600 rounded-xl">JavaScript</div>
        </div>

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

      </section>
    </div>
  );
};

export default Homepage;
