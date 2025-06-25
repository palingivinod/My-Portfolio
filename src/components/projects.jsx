import { NavLink } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: 'SMS SPAM DETECTION',
      githubLink: 'https://github.com/palingivinod/SpamSmsDetection.git',
      tech: 'Python, NLP'
    },
    {
      title: 'TODO LIST',
      githubLink: 'https://github.com/palingivinod/Todo-List.git',
      tech: 'HTML,CSS.JS'
    },
    {
      title: 'DESKTOP VIRTUAL ASSISTANT',
      githubLink: ' ',
      tech: 'Python, Speech Recognition'
    },
    {
      title: 'Exhaustive-Analysis-of-Indian-Agriculture',
      githubLink: 'https://github.com/palingivinod/Exhaustive-Analysis-of-Indian-Agriculture.git',
      tech: 'Powerbi'
    },
  ];

  return (
    <div className="min-h-screen p-5 bg-gradient-to-br from-indigo-800 to-amber-400">
  
      <div className="flex flex-col items-center gap-8 md:hidden">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            githubLink={project.githubLink}
            tech={project.tech}
          />
        ))}
      </div>

 
      <div className="hidden md:flex gap-10 justify-center">
        {Array.from({ length: Math.ceil(projects.length / 3) }, (_, i) => 
          projects.slice(i * 3, (i + 1) * 3)
        ).map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-8">
            {column.map((project, projectIndex) => (
              <ProjectCard 
                key={`${colIndex}-${projectIndex}`}
                title={project.title}
                githubLink={project.githubLink}
                tech={project.tech}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, githubLink, tech }) => (
  <div className="w-full md:w-80 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6 hover:shadow-indigo-400/30 transition-all duration-300 hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-center mb-2 text-white">{title}</h3>
    <p className="text-sm text-center mb-4 text-white/70">{tech}</p>
    <a 
      href={githubLink} 
      target="_blank"
      rel="noreferrer"
      className={`block text-center px-4 py-2 rounded-lg transition-colors duration-200 ${
        githubLink.trim() === '' 
          ? 'bg-gray-500 cursor-not-allowed' 
          : 'bg-indigo-600 hover:bg-indigo-500'
      } text-white`}
      onClick={e => githubLink.trim() === '' && e.preventDefault()}
    >
      {githubLink.trim() === '' ? 'Coming Soon' : 'View on GitHub'}
    </a>
  </div>
);

export default Projects;
