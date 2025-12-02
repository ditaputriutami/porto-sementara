import React from 'react';

const Project = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A responsive dashboard for managing products and orders using React and Tailwind.',
      tags: ['React', 'Tailwind', 'Chart.js'],
      image: 'bg-blue-100', // Placeholder class
    },
    {
      title: 'Task Management App',
      description: 'A drag-and-drop task manager inspired by Trello.',
      tags: ['React', 'DnD', 'Local Storage'],
      image: 'bg-green-100',
    },
    {
      title: 'Weather Forecast',
      description: 'Real-time weather application using OpenWeatherMap API.',
      tags: ['React', 'API', 'CSS Modules'],
      image: 'bg-yellow-100',
    },
  ];

  return (
    <section id="project" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className={`h-48 ${project.image} w-full flex items-center justify-center text-gray-500`}>
                Project Preview
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="block w-full text-center py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-medium"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
