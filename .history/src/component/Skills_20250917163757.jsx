import React, { useState } from 'react'
import { Code, Cloud, Atom, PieChart } from 'lucide-react';
import { DiGithubBadge, DiJsBadge, DiPython, DiVisualstudio } from 'react-icons/di';
import { SiTailwindcss, SiFigma, SiPandas, SiPytorch, SiNumpy } from "react-icons/si";
import { cn } from '../lib/utils';

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: Code },
  { name: "JavaScript",  category: "frontend", icon: DiJsBadge },
  { name: "React",  category: "frontend", icon: Atom },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },

  // AI & Machine Learning
  { name: "Python",  category: "ai & ml", icon: DiPython},
  { name: "PyTorch", level: 75, category: "ai & ml", icon: SiPytorch },
  { name: "Pandas", level: 75, category: "ai & ml", icon: SiPandas },
  { name: "Numpy", level: 85, category: "ai & ml", icon: SiNumpy },

  // Tools & Platforms
  { name: "Git & GitHub", level: 80, category: "tools", icon: DiGithubBadge },
  { name: "VS Code", level: 85, category: "tools", icon: DiVisualstudio},
  { name: "Figma", level: 80, category: "tools", icon: SiFigma },
  { name: "Google Colab", level: 80, category: "tools", icon: Cloud },
];
const categories = [
    "all",
    "frontend",
    "ai & ml",
    "tools"
]


const Skills = () => {
    const [selectCategory, setSelectCategory] = useState("all");

    const filteredSkills = skills.filter((skill)=> selectCategory === "all" || skill.category === selectCategory);
  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container max-w-5xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                <span className='text-glow'>My </span> <span className='bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent'>Skills</span>
            </h2>
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category, key)=>{
                    return(
                        <button key={key} onClick={()=>{setSelectCategory(category)}} className={cn('px-4 py-2 rounded-full transition-colors duration-300 capitalize',
                            selectCategory === category ? "bg-primary text-primary-foreground": "bg-secondary/70 text-foreground hover:bg-secondary/90")
                        }>
                            {category}
                        </button>
                    )
                })}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredSkills.map((skill, key) => {
                    const IconComponent = skill.icon;
                    return (
                        <div key={key} className='p-6 bg-card rounded-lg shadow-xs card-hover hover:shadow-lg transition-shadow duration-300'>
                            <div className='text-left mb-4'>
                                <h3 className='text-lg font-semibold flex items-center gap-2'>
                                    <IconComponent className='h-5 w-5' />
                                    {skill.name}
                                </h3>
                            </div>
                            <div className='w-full bg-secondary/50 rounded-full h-2 overflow-hidden'>
                                <div className='bg-gradient-to-r from-sky-400 to-blue-600 h-2 rounded-full animate-[grow_1.5s_ease-out]' 
                                    style={{width:`${skill.level}%`}}>
                                </div>
                            </div>
                            <div className='text-right mt-2'>
                                <span className='text-sm text-muted-foreground'>
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    </section>
  )
}

export default Skills