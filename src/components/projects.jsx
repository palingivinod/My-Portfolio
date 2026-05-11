import { NavLink } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: 'SMS SPAM DETECTION',
      githubLink: 'https://github.com/palingivinod/SpamSmsDetection.git',
      tech: 'Python, NLP'
    },
    {
      title: 'RAG Chat Application',
      githubLink: 'https://github.com/palingivinod/rag-chat-app.git',
      tech: 'Python, Langgraph, Langchain, VectorDB'
    },
    {
      title: 'TODO LIST',
      githubLink: 'https://github.com/palingivinod/Todo-List.git',
      tech: 'HTML, CSS, JS'
    },
    {
      title: 'DESKTOP VIRTUAL ASSISTANT',
      githubLink: 'https://github.com/palingivinod/MajorProject.git',
      tech: 'Python, Speech Recognition, NLP, LLM'
    },
    {
      title: 'Web App for ML Model Comparison',
      githubLink: 'https://github.com/palingivinod/Web-app-for-ml-model-comparison.git',
      tech: 'Python, ML'
    },
    {
      title: 'TermiX A java custom library',
      githubLink: 'https://github.com/palingivinod/TermiX.git',
      jitpackLink: 'https://jitpack.io/#palingivinod/TermiX',
      tech: 'Java'
    },
  ];

  return (
    <div className="min-h-screen p-5 bg-gradient-to-br from-indigo-800 to-amber-400">
      {/* Mobile view - vertical */}
      <div className="flex flex-col items-center gap-8 md:hidden">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            githubLink={project.githubLink}
            jitpackLink={project.jitpackLink}
            tech={project.tech}
          />
        ))}
      </div>

      {/* Desktop view - horizontal with 3 columns */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            githubLink={project.githubLink}
            jitpackLink={project.jitpackLink}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, githubLink, jitpackLink, tech }) => (
  <div className="w-full max-w-80 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6 hover:shadow-indigo-400/30 transition-all duration-300 hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-center mb-2 text-white">{title}</h3>
    <p className="text-sm text-center mb-4 text-white/70">{tech}</p>
    
    {/* Show both buttons for TermiX project */}
    {jitpackLink ? (
      <div className="flex gap-3">
        <a 
          href={githubLink || ''} 
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center px-4 py-2 rounded-lg transition-colors duration-200 bg-indigo-600 hover:bg-indigo-500 text-white"
        >
          GitHub
        </a>
        <a 
          href={jitpackLink} 
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center px-4 py-2 rounded-lg transition-colors duration-200 bg-purple-600 hover:bg-purple-500 text-white"
        >
          JitPack
        </a>
      </div>
    ) : (
      <a 
        href={githubLink || ''} 
        target="_blank"
        rel="noreferrer"
        className={`block text-center px-4 py-2 rounded-lg transition-colors duration-200 ${
          !githubLink || githubLink.trim() === '' 
            ? 'bg-gray-500 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-500'
        } text-white`}
        onClick={e => (!githubLink || githubLink.trim() === '') && e.preventDefault()}
      >
        {!githubLink || githubLink.trim() === '' ? 'Coming Soon' : 'View on GitHub'}
      </a>
    )}
  </div>
);

export default Projects;
