import React from 'react';

const Skill = () => {
  const skills = [
    { name: 'HTML5', level: 'Advanced', color: 'bg-orange-500' },
    { name: 'CSS3', level: 'Advanced', color: 'bg-blue-500' },
    { name: 'JavaScript', level: 'Intermediate', color: 'bg-yellow-400' },
    { name: 'React', level: 'Intermediate', color: 'bg-cyan-400' },
    { name: 'Tailwind CSS', level: 'Advanced', color: 'bg-teal-400' },
    { name: 'Git', level: 'Intermediate', color: 'bg-red-500' },
  ];

  return (
    <section id="skill" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {skill.name.substring(0, 2)}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{skill.name}</h3>
              <p className="text-sm text-gray-500">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
