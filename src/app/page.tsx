"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        
        {/* LEFT COLUMN - Sticky Header */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="mb-8 h-36 w-36 overflow-hidden rounded-full border-4 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Image src="/profile.jpg.png" alt="Nayan A. Pise" width={144} height={144} className="h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('bg-gray-800') }} />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              <a href="/">Nayan A. Pise</a>
            </h1>
            <h2 className="mt-3 text-xl font-bold tracking-tight text-amber-500 sm:text-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              AI/ML Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-relaxed text-gray-100 font-medium drop-shadow-md">
              Pre-final year CSE (AI & ML) Student optimizing LLMs and building scalable AI web applications.
            </p>
            
            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li>
                  <a className="group flex items-center py-3 active" href="#about">
                    <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-amber-500 group-focus-visible:w-16 group-focus-visible:bg-amber-500 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-amber-500 group-focus-visible:text-amber-500 drop-shadow-md">About</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#experience">
                    <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-amber-500 group-focus-visible:w-16 group-focus-visible:bg-amber-500 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-amber-500 group-focus-visible:text-amber-500 drop-shadow-md">Experience</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-gray-500 transition-all group-hover:w-16 group-hover:bg-amber-500 group-focus-visible:w-16 group-focus-visible:bg-amber-500 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-amber-500 group-focus-visible:text-amber-500 drop-shadow-md">Projects</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-8 flex flex-col gap-6 lg:mt-0">
            <a href="/resume (6).pdf" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 px-6 py-3 text-sm font-bold text-black transition-colors shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              <FileText className="h-4 w-4" />
              Download Resume
            </a>
            
            <ul className="ml-1 flex items-center gap-5">
              <li className="shrink-0">
                <a href="https://github.com/nayan-pise" target="_blank" rel="noreferrer" className="block text-gray-300 hover:text-amber-400 transition-colors drop-shadow-md">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
              </li>
              <li className="shrink-0">
                <a href="https://www.linkedin.com/in/nayan-pise-94a62a346/" target="_blank" rel="noreferrer" className="block text-gray-300 hover:text-amber-400 transition-colors drop-shadow-md">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li className="shrink-0">
                <a href="mailto:nayan.pise8347@gmail.com" className="block text-gray-300 hover:text-amber-400 transition-colors drop-shadow-md">
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* RIGHT COLUMN - Scrollable Content */}
        <main className="pt-24 lg:w-1/2 lg:py-24">
          
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/95 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white drop-shadow-md lg:sr-only">About</h2>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/80 p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <p className="mb-4 text-gray-100 text-[1.05rem] leading-relaxed font-medium">
                Pre-final year Computer Science student (VIT Bhopal, CGPA: 8.4) with a strong portfolio of 3+ end-to-end ML projects. Proficient in Python, TensorFlow, and Scikit-learn, with hands-on experience deploying predictive models achieving 90%+ accuracy. 
              </p>
              <p className="mb-4 text-gray-100 text-[1.05rem] leading-relaxed font-medium">
                Currently, my focus is on LLM optimization, computer vision, and building scalable AI web applications that solve real-world problems.
              </p>
              
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-bold text-white drop-shadow-sm">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C/C++', 'SQL', 'HTML/CSS', 'Java', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'NLP', 'Deep Learning', 'Pandas', 'NumPy', 'React.js', 'Express.js', 'Flask', 'AWS', 'OCI'].map(skill => (
                    <span key={skill} className="rounded-full bg-amber-500/20 border border-amber-500/40 px-3 py-1 text-xs font-bold text-amber-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/95 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white drop-shadow-md lg:sr-only">Experience</h2>
            </div>
            
            <div className="group/list">
              {[
                {
                  role: "AI Web Developer Intern",
                  company: "Inambiguous Foundation",
                  date: "May 2026 - June 2026",
                  description: "Integrating advanced AI models into robust web applications.",
                  skills: ["React", "AI Integration", "Web Development"]
                },
                {
                  role: "LLM Post-Training Intern",
                  company: "Ethara.ai",
                  date: "Feb 2026 - May 2026",
                  description: "Optimized LLMs for video editing workflows via Supervised Fine-Tuning (SFT) and RLHF. Engineered an LLM-driven prompt system for a video color picker feature, enhancing model comprehension.",
                  skills: ["LLMs", "SFT", "RLHF", "Prompt Engineering"]
                },
                {
                  role: "Machine Learning Engineer Intern",
                  company: "CodSoft",
                  date: "Nov 2025 - Dec 2025",
                  description: "Engineered 3 scalable ML pipelines (Fraud, Spam, Churn) processing 15,000+ records. Optimized Random Forest classifiers to achieve a 15% reduction in false positives for fraud detection.",
                  skills: ["Scikit-learn", "Pandas", "Random Forest", "Data Pipelines"]
                }
              ].map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12 p-5 rounded-xl bg-black/40 hover:bg-black/90 hover:border-l-4 hover:border-amber-500 shadow-lg border border-transparent hover:border-white/10"
                >
                  <header className="z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-amber-500 sm:col-span-2 drop-shadow-sm">{exp.date}</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-bold leading-snug text-white">
                      <div>
                        <span className="inline-flex items-baseline font-bold leading-tight text-white group-hover:text-amber-400 focus-visible:text-amber-400 drop-shadow-sm">
                          <span>{exp.role} · <span className="inline-block text-gray-200">{exp.company}</span></span>
                        </span>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-200 font-medium">{exp.description}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <li key={skill}>
                          <div className="flex items-center rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold leading-5 text-amber-300 border border-amber-500/30">{skill}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/95 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white drop-shadow-md lg:sr-only">Projects</h2>
            </div>
            
            <div className="group/list">
              {[
                {
                  name: "AI Mock Interview System",
                  description: "Generated 50+ unique interview scenarios; integrated Flask REST API reducing practice loops by 40%.",
                  skills: ["Python", "NLP", "Flask", "ML"],
                  image: "/project1.png"
                },
                {
                  name: "Heart Disease Prediction",
                  description: "Analyzed 4,000+ records, achieved 92% accuracy, and reduced feature dimensionality by 25% using PCA.",
                  skills: ["Python", "Scikit-learn", "Pandas", "PCA"],
                  image: "/project2.png"
                },
                {
                  name: "Signature Forgery Detection",
                  description: "Built a CNN trained on 1,000+ images, attained 96% detection rate, and optimized inference time to under 200ms.",
                  skills: ["OpenCV", "TensorFlow", "CNN"],
                  image: "/project3.png"
                },
                {
                  name: "Sign-Language Video Call App",
                  description: "Real-time sign language interpretation utilizing computer vision and web integration.",
                  skills: ["Computer Vision", "Web Integration", "Real-time Processing"],
                  image: "/project4.png"
                }
              ].map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12 bg-black/60 p-5 rounded-xl border border-white/10 hover:bg-black/90 hover:border-amber-500/50 shadow-2xl backdrop-blur-sm"
                >
                  <div className="z-10 sm:col-span-2 mt-1">
                    <div className="h-20 w-full rounded border-2 border-gray-600 flex items-center justify-center overflow-hidden">
                       <Image src={project.image} alt={project.name} width={100} height={80} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-bold leading-snug text-white">
                      <div>
                        <span className="inline-flex items-baseline font-bold leading-tight text-white group-hover:text-amber-400 focus-visible:text-amber-400 drop-shadow-sm">
                          {project.name}
                        </span>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-200 font-medium">{project.description}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {project.skills.map(skill => (
                        <li key={skill}>
                          <div className="flex items-center rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold leading-5 text-amber-300 border border-amber-500/30">{skill}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="certifications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
             <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/95 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white drop-shadow-md lg:sr-only">Certifications</h2>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/80 p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <h3 className="mb-4 text-lg font-bold text-white drop-shadow-sm">Certifications & Achievements</h3>
              <ul className="list-disc pl-5 text-gray-100 text-[1.05rem] font-medium space-y-3 marker:text-amber-500">
                <li>NPTEL Cloud Computing (Elite + Gold)</li>
                <li>NPTEL Internet of Things (Elite + Gold)</li>
                <li>Oracle OCI AI Foundations Associate</li>
                <li>Oracle OCI Generative AI Professional</li>
                <li>Participant in EY Techathon 6.0 (Top 100 teams)</li>
                <li>Adobe Hackathon Participant</li>
              </ul>
            </motion.div>
          </section>

          <section id="connect" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
             <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/95 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white drop-shadow-md lg:sr-only">Connect</h2>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/80 p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <h3 className="mb-4 text-lg font-bold text-white drop-shadow-sm">Connect & Profiles</h3>
              <div className="flex flex-col gap-4">
                <a href="https://github.com/nayan-pise" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-gray-100 hover:text-amber-400 transition-colors font-medium text-[1.05rem]">
                  <Github className="h-6 w-6 text-amber-500 group-hover:scale-110 transition-transform" />
                  GitHub: nayan-pise
                </a>
                <a href="https://www.linkedin.com/in/nayan-pise-94a62a346/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-gray-100 hover:text-amber-400 transition-colors font-medium text-[1.05rem]">
                  <Linkedin className="h-6 w-6 text-amber-500 group-hover:scale-110 transition-transform" />
                  LinkedIn: Nayan Pise
                </a>
              </div>
            </motion.div>
          </section>

        </main>
      </div>
    </div>
  );
}
