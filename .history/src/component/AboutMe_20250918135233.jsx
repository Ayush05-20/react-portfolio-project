import { Brain, Code, User } from "lucide-react"
import React from "react"

const AboutMe = () => {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/20 blur-[150px] rounded-full opacity-50" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600/20 blur-[130px] rounded-full opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
            About Me
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Side: About Content */}
          <div className="lg:w-1/2 text-center lg:text-left relative">
            {/* Aura Ring */}
            <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-sky-400/30 to-blue-600/30 blur-3xl animate-pulse opacity-70" />

            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Learner • Developer • Problem Solver
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              I’m a dedicated and passionate student with deep curiosity for
              <span className="text-primary font-medium"> Web Development</span>,
              <span className="text-primary font-medium"> Artificial Intelligence</span>, and
              <span className="text-primary font-medium"> Machine Learning</span>.  
              I thrive on exploring new technologies and transforming ideas into
              impactful solutions that blend creativity with technical expertise.
            </p>

            <a
              href="#contact"
              className="cosmic-button-light px-6 py-3 rounded-xl inline-block font-medium"
            >
              Let’s Connect
            </a>
          </div>

          {/* Right Side: Skills Timeline */}
          <div className="lg:w-1/2 relative">
            {/* Vertical glowing line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-400/70 via-primary/60 to-blue-600/70" />

            <div className="space-y-12">
              {/* Skill Item 1 */}
              <div className="relative pl-16 group">
                <div className="absolute left-0 top-1 w-12 h-12 flex items-center justify-center rounded-full bg-background shadow-md border border-primary/30 group-hover:scale-110 transition">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Web Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Building sleek, responsive, and dynamic websites with React, JavaScript, HTML, and CSS.
                  </p>
                </div>
              </div>

              {/* Skill Item 2 */}
              <div className="relative pl-16 group">
                <div className="absolute left-0 top-1 w-12 h-12 flex items-center justify-center rounded-full bg-background shadow-md border border-primary/30 group-hover:scale-110 transition">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Problem-Solving</h4>
                  <p className="text-muted-foreground text-sm">
                    Applying creative strategies to tackle challenges and deliver
                    user-centric solutions.
                  </p>
                </div>
              </div>

              {/* Skill Item 3 */}
              <div className="relative pl-16 group">
                <div className="absolute left-0 top-1 w-12 h-12 flex items-center justify-center rounded-full bg-background shadow-md border border-primary/30 group-hover:scale-110 transition">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">AI & Machine Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    Enthusiastic about AI and ML, with hands-on experience in Python
                    and libraries like NumPy, Pandas, Matplotlib, PyTorch.
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
