import { ArrowRight, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title : "MyTravels Landing Page",
    description: "A responsive landing page for a travel agency, showcasing destinations and services.",
    img : "/projects/project1.png",
    tags: ["HTML","CSS"],
    githubUrl:"#"
  },
  {
    id: 2,
    title : "CVisionary Landing Page",
    description: "A landing for an website where user can find the job based on their resume",
    img : "/projects/project2.png",
    tags: ["HTML","CSS","JavaScript","Langchain","Firebase"],
    githubUrl:"#"
  }
]

const Projects = () => {
  return (
    <section id="projects" className='py-24 px-4 relative'>
      <div className='conainer max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4 text-center md:text-4xl '>
          <span className='text-glow'>Feature</span> <span className='bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent'>Projects</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of the projects I've worked on, showcasing my skills.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          {projects.map((project, key)=>{
            return(
              <div key={project.id} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-shadow duration-300'>
                <div className='h-48 overflow-hidden'>
                  <img src={project.img} alt="" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'/>
                </div>
                <div className='p-6'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag)=>{
                      return(
                        <span  key={tag} className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent'>
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                <h3 className='text-lg font-semibold px-6 pb-6 text-glow'>
                  {project.title}
                </h3>
                <p className='text-muted-foreground text-sm mb-4'>
                  {project.description}
                </p>
                <div className='flex space-x-3'>
                  <a href={project.githubUrl} className='text-muted-foreground hover:text-sky-400 transition-colors flex items-center px-6 pb-6' target="_blank" rel="noopener noreferrer">
                    <Github size={20}></Github>
                  </a>
                </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='text-center mt-12'>
          <a href="https://github.com/Ayush05-20" className='cosmic-button flex w-fit items-center mx-auto' target="_blank">
            Check My GitHub <ArrowRight size={16}></ArrowRight>
          </a>
        </div>
      </div>
    </section>
  )
}
export default Projects
