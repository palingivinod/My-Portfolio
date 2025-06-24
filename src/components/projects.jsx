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


  const projectsPerColumn = 3;
  const columnCount = Math.ceil(projects.length / projectsPerColumn);
  

  const columns = Array.from({ length: columnCount }, (_, i) => 
    projects.slice(i * projectsPerColumn, (i + 1) * projectsPerColumn)
  );

  return (
    <div className="min-h-screen p-5 bg-gradient-to-br from-indigo-800 to-amber-400">
      <div className="flex  gap-10">
        {columns.map((column, colIndex) => (
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
  <div className="w-80 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6 hover:shadow-indigo-400/30 transition-all duration-300 hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-center mb-2 text-white">{title}</h3>
    <p className="text-sm text-center mb-4 text-white/70">{tech}</p>
    <a 
      href={githubLink} 
      target="_blank" 

      className="block text-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors duration-200"
    >
      View on GitHub
    </a>
  </div>
);

export default Projects;