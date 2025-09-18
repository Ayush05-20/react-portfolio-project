import { Brain, Code, User } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient Blur Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-50" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-tight">
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile / Intro */}
          <div className="relative text-center lg:text-left">
            <div className="relative inline-block p-[3px] rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600">
              <div className="bg-background rounded-2xl px-8 py-10 shadow-xl backdrop-blur-md">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Learner • Developer • Problem Solver
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a dedicated and passionate student with a strong interest in web development, 
                  artificial intelligence, and machine learning. I love exploring new technologies 
                  and continuously learning to enhance my skills. My goal is to leverage my knowledge 
                  to create innovative solutions that can make a positive impact in the tech world.
                </p>
                <a
                  href="#contact"
                  className="inline-block cosmic-button-light px-6 py-3 rounded-xl font-medium"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="grid gap-6">
            {/* Card 1 */}
            <div className="group p-6 rounded-xl bg-background/60 backdrop-blur-xl shadow-md hover:shadow-lg border border-primary/20 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Proficient in building responsive and dynamic websites using React, 
                    JavaScript, HTML, and CSS.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-6 rounded-xl bg-background/60 backdrop-blur-xl shadow-md hover:shadow-lg border border-primary/20 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Problem-Solving</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Applying creative thinking to tackle complex challenges and build 
                    user-centric solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-xl bg-background/60 backdrop-blur-xl shadow-md hover:shadow-lg border border-primary/20 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Enthusiastic about AI and ML, with hands-on experience in Python 
                    and libraries like Numpy, Pandas, Matplotlib, PyTorch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
