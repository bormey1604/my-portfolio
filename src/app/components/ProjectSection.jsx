"use client"
import React , {useState , useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion , useInView} from "framer-motion"

const projectsData = [
    {
        id:1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/projects/1.webp",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id:2,
        title: "E-Commerce Project",
        description: "Project 2 description",
        image: "/images/projects/ecommerce.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id:3,
        title: "Project Plan",
        description: "Project 3 description",
        image: "/images/projects/2.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
      id:4,
      title: "E-Commerce Project",
      description: "Project 2 description",
      image: "/images/projects/ecommerce.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
  },
  {
      id:5,
      title: "Project Plan",
      description: "Project 3 description",
      image: "/images/projects/2.jpg",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/"
  }
]

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView( ref , {once: true});

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }
  const filterProjects = projectsData.filter((project) => project.tag.includes(tag))

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1}
  }

  return (
    <section>
        <h2 className='text-center text-white text-4xl font-bold mt-4 mb-8 md:mb-12 '>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
          <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === "All"}
          />
          <ProjectTag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected={tag === "Web"}
          />
          <ProjectTag 
            onClick={handleTagChange} 
            name="Mobile" 
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul  ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12 lg:px-[50px]'>
          {
            filterProjects.map((project,index) => {
              return (
                <motion.li 
                  key={index} 
                  variants={cardVariants} 
                  initial="initial" 
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.4}}
                >
                  <ProjectCard 
                      key={project.id}  
                      title={project.title} 
                      description={project.description} 
                      imgUrl={project.image} 
                      gitUrl={project.gitUrl} 
                      previewUrl={project.previewUrl}/>
                </motion.li>
              )
            })
          }
        </ul>
    </section>
  )
}

export default ProjectSection