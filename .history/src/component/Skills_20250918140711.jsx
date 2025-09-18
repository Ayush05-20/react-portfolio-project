import React, { useState, useEffect, useRef } from 'react'
import { Code, Cloud, Atom, PieChart, Zap, Sparkles, Star } from 'lucide-react';
import { DiGithubBadge, DiJsBadge, DiPython, DiVisualstudio } from 'react-icons/di';
import { SiTailwindcss, SiFigma, SiPandas, SiPytorch, SiNumpy } from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: Code, color: "from-orange-400 to-red-500" },
  { name: "JavaScript", level: 50, category: "frontend", icon: DiJsBadge, color: "from-yellow-400 to-orange-500" },
  { name: "React", level: 70, category: "frontend", icon: Atom, color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind CSS", level: 50, category: "frontend", icon: SiTailwindcss, color: "from-teal-400 to-cyan-500" },

  // AI & Machine Learning
  { name: "Python", level: 90, category: "ai & ml", icon: DiPython, color: "from-blue-400 to-purple-500" },
  { name: "PyTorch", level: 75, category: "ai & ml", icon: SiPytorch, color: "from-red-400 to-pink-500" },
  { name: "Pandas", level: 75, category: "ai & ml", icon: SiPandas, color: "from-indigo-400 to-purple-500" },
  { name: "Numpy", level: 85, category: "ai & ml", icon: SiNumpy, color: "from-green-400 to-teal-500" },

  // Tools & Platforms
  { name: "Git & GitHub", level: 80, category: "tools", icon: DiGithubBadge, color: "from-gray-400 to-gray-600" },
  { name: "VS Code", level: 85, category: "tools", icon: DiVisualstudio, color: "from-blue-400 to-indigo-500" },
  { name: "Figma", level: 80, category: "tools", icon: SiFigma, color: "from-purple-400 to-pink-500" },
  { name: "Google Colab", level: 80, category: "tools", icon: Cloud, color: "from-orange-400 to-yellow-500" },
];

const categories = [
    { name: "all", icon: Star, color: "from-sky-400 to-blue-600" },
    { name: "frontend", icon: Code, color: "from-orange-400 to-red-500" },
    { name: "ai & ml", icon: Zap, color: "from-purple-400 to-pink-500" },
    { name: "tools", icon: Sparkles, color: "from-green-400 to-teal-500" }
]

const Skills = () => {
    const [selectCategory, setSelectCategory] = useState("all");
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [selectedSkill, setSelectedSkill] = useState(null);
    const containerRef = useRef(null);

    const filteredSkills = skills.filter((skill) => selectCategory === "all" || skill.category === selectCategory);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
                    y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <section id='skills' className='py-32 px-4 relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background/95 to-background'>
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-sky-400 rounded-full opacity-30 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`
                        }}
                    />
                ))}
                
                {/* Dynamic background waves */}
                

            <div className='container max-w-7xl mx-auto relative z-10' ref={containerRef}>
                {/* Revolutionary Title */}
                <div className="text-center mb-20">
                    <h2 className='text-5xl md:text-7xl font-black mb-6 relative'>
                        <span className='bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                            Skills
                        </span>
                        <span className='mx-4 text-foreground/20'>•</span>
                        <span className='bg-gradient-to-r from-purple-500 via-pink-500 to-sky-400 bg-clip-text text-transparent'>
                            Galaxy
                        </span>
                        
                        {/* Orbiting decorations */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                            <div className="flex space-x-4 animate-spin-slow" style={{animationDuration: '20s'}}>
                                <Star className="w-6 h-6 text-sky-400 opacity-60" />
                                <Sparkles className="w-5 h-5 text-purple-400 opacity-60" />
                                <Zap className="w-5 h-5 text-pink-400 opacity-60" />
                            </div>
                        </div>
                    </h2>
                    
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Navigate through my skill universe • Each planet represents mastery
                    </p>
                </div>

                {/* Floating Category Navigation */}
                <div className='flex justify-center mb-16'>
                    <div className="flex items-center space-x-2 p-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
                        {categories.map((category, key) => {
                            const CategoryIcon = category.icon;
                            const isActive = selectCategory === category.name;
                            
                            return (
                                <button 
                                    key={key} 
                                    onClick={() => setSelectCategory(category.name)} 
                                    className={`relative flex items-center space-x-2 px-6 py-3 rounded-full capitalize font-medium transition-all duration-500 group ${
                                        isActive 
                                            ? `bg-gradient-to-r ${category.color} text-white shadow-xl shadow-sky-400/25 scale-105` 
                                            : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                                    }`}
                                >
                                    <CategoryIcon size={18} className={isActive ? "animate-pulse" : ""} />
                                    <span>{category.name}</span>
                                    
                                    {isActive && (
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-ping"></div>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Revolutionary 3D Skills Grid */}
                <div className="relative perspective-1000">
                    <div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-700"
                        style={{
                            transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
                        }}
                    >
                        {filteredSkills.map((skill, key) => {
                            const IconComponent = skill.icon;
                            const isHovered = hoveredSkill === key;
                            const isSelected = selectedSkill === key;
                            
                            return (
                                <div 
                                    key={key} 
                                    className="group relative"
                                    onMouseEnter={() => setHoveredSkill(key)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    onClick={() => setSelectedSkill(selectedSkill === key ? null : key)}
                                    style={{
                                        animationDelay: `${key * 0.1}s`
                                    }}
                                >
                                    {/* Skill Planet/Orb */}
                                    <div className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-500 transform ${
                                        isHovered || isSelected 
                                            ? 'scale-110 rotate-3d hover:shadow-2xl' 
                                            : 'hover:scale-105'
                                    }`}>
                                        
                                        {/* Dynamic background based on skill level */}
                                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} opacity-10 transition-opacity duration-300 ${
                                            isHovered ? 'opacity-20' : ''
                                        }`}></div>
                                        
                                        {/* Glowing border */}
                                        <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-300 ${
                                            isSelected 
                                                ? `border-sky-400 shadow-lg shadow-sky-400/25` 
                                                : 'border-white/10 group-hover:border-white/20'
                                        }`}></div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Icon and Title */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center space-x-3">
                                                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg`}>
                                                        <IconComponent className='h-6 w-6 text-white' />
                                                    </div>
                                                    <h3 className='text-lg font-bold text-foreground group-hover:text-sky-400 transition-colors duration-300'>
                                                        {skill.name}
                                                    </h3>
                                                </div>
                                                
                                                {/* Skill level indicator */}
                                                <div className="text-right">
                                                    <span className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Revolutionary Circular Progress */}
                                            <div className="relative flex justify-center mb-4">
                                                <div className="relative w-24 h-24">
                                                    {/* Background circle */}
                                                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                                        <circle
                                                            cx="50"
                                                            cy="50"
                                                            r="40"
                                                            stroke="currentColor"
                                                            strokeWidth="8"
                                                            fill="none"
                                                            className="text-white/10"
                                                        />
                                                        
                                                        {/* Animated progress circle */}
                                                        <circle
                                                            cx="50"
                                                            cy="50"
                                                            r="40"
                                                            stroke="url(#skillGradient)"
                                                            strokeWidth="8"
                                                            fill="none"
                                                            strokeDasharray={`${2 * Math.PI * 40}`}
                                                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                                                            className="transition-all duration-1000 ease-out"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    
                                                    {/* Center percentage */}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="text-sm font-bold text-foreground">
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Category badge */}
                                            <div className="text-center">
                                                <span className={`inline-block px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r ${skill.color} text-white shadow-md capitalize`}>
                                                    {skill.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Hover glow effect */}
                                        {isHovered && (
                                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-20 blur-xl animate-pulse`}></div>
                                        )}

                                        {/* Selection ring */}
                                        {isSelected && (
                                            <div className="absolute -inset-4 rounded-3xl border-2 border-sky-400 animate-ping opacity-50"></div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-2">
                                {skills.length}
                            </div>
                            <div className="text-muted-foreground">Skills Mastered</div>
                        </div>
                        
                        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                                {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
                            </div>
                            <div className="text-muted-foreground">Average Proficiency</div>
                        </div>
                        
                        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-600 bg-clip-text text-transparent mb-2">
                                {categories.length - 1}
                            </div>
                            <div className="text-muted-foreground">Categories</div>
                        </div>
                    </div>
                </div>

                {/* SVG Gradients */}
                <svg width="0" height="0">
                    <defs>
                        <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default Skills