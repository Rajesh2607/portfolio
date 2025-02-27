import React from "react";

const Certificates = () => {
  const certificates = [
    { id: 1, name: "React Developer Certificate", link: "#" },
    { id: 2, name: "JavaScript Mastery Certificate", link: "#" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>
      <ul>
        {certificates.map((cert) => (
          <li key={cert.id}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
