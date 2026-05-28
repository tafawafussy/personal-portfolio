const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack online shopping website with cart and checkout system.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "C:/Users/Taf/OneDrive/Desktop/personal-portfolio/frontend/src/assets/projects/ecommerce.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "Task Management System",
    desc: "Real-time collaborative task manager with drag & drop functionality.",
    tech: ["Next.js", "Tailwind", "Firebase"],
    image: "C:/Users/Taf/OneDrive/Desktop/personal-portfolio/frontend/src/assets/projects/task.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "Personal Portfolio",
    desc: "Modern portfolio website with backend contact form (This Project).",
    tech: ["React", "Express", "Vercel + Render"],
    image: "C:/Users/Taf/OneDrive/Desktop/personal-portfolio/frontend/src/assets/projects/task.jpg",
    link: "#",
    github: "#"
  }
];

const Projects = () => (
  <section id="projects" className="py-24 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow hover:shadow-2xl transition group">
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>

              <div className="flex gap-6 text-blue-600">
                <a href={project.link} className="hover:underline">Live Demo →</a>
                <a href={project.github} className="hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;