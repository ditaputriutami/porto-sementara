import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Placeholder for image */}
              <div className="w-full h-80 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center text-gray-400">
                <span>Profile Image</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-600 rounded-full -z-10 opacity-20"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I am a dedicated web developer with a keen eye for design and a strong focus on user experience. 
              With a background in computer science and a passion for coding, I create modern, responsive, 
              and performant web applications.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              My journey started with HTML & CSS, and I have since expanded my skillset to include 
              JavaScript, React, and various modern tools. I love solving problems and turning ideas into reality.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900">Experience</h3>
                <p className="text-sm text-gray-600">2+ Years</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900">Projects</h3>
                <p className="text-sm text-gray-600">20+ Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
