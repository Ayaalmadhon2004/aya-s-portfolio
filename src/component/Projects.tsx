"use client"
import { Globe, Cpu } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "Gaza Pulse",
    subtitle: "Humanitarian Distribution Logistics",
    description: "In response to critical logistical challenges, I engineered a mission-critical platform to streamline food distribution. Integrated Real-Time Queue Monitoring and Automated Resource Allocation to minimize congestion and ensure equitable access.",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "Supabase", "i18n"],
    link: "https://gaza-food-project.vercel.app",
    github: "https://github.com/Ayaalmadhon2004/Healthy-Food",
  },
  {
    id: "02",
    title: "VibeSync",
    subtitle: "Social Media Interaction Prototype",
    description: "A high-fidelity React-based networking platform featuring modular component architecture. Implemented complex UI logic for messaging, user connections, and real-time activity simulations with a focus on seamless state transitions.",
    tech: ["React.js", "JavaScript", "CSS3", "Modular Architecture"],
    link: "https://social-media-psi-red.vercel.app/",
    github: "https://github.com/Ayaalmadhon2004",
  },
  {
    id: "03",
    title: "NexTrade",
    subtitle: "Modern E-Commerce Platform",
    description: "A high-performance React-driven retail interface. Implemented a robust dynamic filtering system and organized product architecture to optimize user discovery and navigation flows.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Dynamic Routing"],
    link: "https://ecommerce-one-teal-22.vercel.app/",
    github: "https://github.com/Ayaalmadhon2004",
  }
]

export default function Projects() {
  return (
    <section className="py-32 px-8 md:px-20 lg:px-40 bg-background border-t border-white/5" id="projects">
      <div className="max-w-7xl mx-auto"> 
        
        {/* Header Section */}
        <div className="flex items-center gap-6 mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
            Selected Work
          </h2>
          <div className="h-[1px] flex-1 bg-emerald-500/20" />
        </div>

        {/* Projects List */}
        <div className="space-y-40">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative group grid lg:grid-cols-12 gap-12 items-start"
            >
              {/* Background ID Number */}
              <span className="absolute -left-12 -top-16 text-[180px] font-black text-emerald-500/[0.03] leading-none pointer-events-none select-none group-hover:text-emerald-500/[0.08] transition-all duration-700 font-mono">
                {project.id}
              </span>

              {/* Content Area */}
              <div className="lg:col-span-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-emerald-500" />
                  <p className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase">
                    {project.subtitle}
                  </p>
                </div>

                <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight group-hover:text-emerald-400 transition-colors">
                  {project.title}<span className="text-emerald-500">.</span>
                </h3>

                <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl font-light">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tech.map((item) => (
                    <span key={item} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-emerald-500/80 tracking-widest uppercase hover:border-emerald-500/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-12">
                  <a href={project.link} target="_blank" className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-white hover:text-emerald-500 transition-all border-b border-transparent hover:border-emerald-500 pb-2">
                    <Globe size={18} className="text-emerald-500" /> 
                    Live Preview
                  </a>
                  <a href={project.github} target="_blank" className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-white hover:text-emerald-500 transition-all border-b border-transparent hover:border-emerald-500 pb-2">
                    <Cpu size={18} className="text-emerald-500" /> 
                    Source Code
                  </a>
                </div>
              </div>

              {/* Right Decorative Line (Matches high-end styles) */}
              <div className="hidden lg:flex lg:col-span-4 h-full items-center justify-end">
                <div className="w-[1px] h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent relative">
                  <div className="absolute top-1/2 -left-[1px] w-[3px] h-16 bg-emerald-500 group-hover:h-40 transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}