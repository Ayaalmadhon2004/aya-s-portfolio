// src/components/Projects.tsx
import {  ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Gaza Pulse | Humanitarian Distribution Logistics",
    description: "In response to critical logistical challenges, I engineered a mission-critical platform to streamline food distribution. Integrated Real-Time Queue Monitoring and Automated Resource Allocation to minimize congestion and ensure equitable access.",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "Supabase", "i18n"],
    link: "https://gaza-food-project.vercel.app",
    github: "https://github.com/Ayaalmadhon2004/Healthy-Food",
  },
  {
  title: "VibeSync | Social Media Interaction Prototype",
  description: "A high-fidelity React-based networking platform featuring modular component architecture. Implemented complex UI logic for messaging, user connections, and real-time activity simulations with a focus on seamless state transitions.",
  tech: ["React.js", "JavaScript", "CSS3", "Modular Architecture"],
  link: "https://social-media-psi-red.vercel.app/",
  github: "https://github.com/Ayaalmadhon2004",
  },
  {
  title: "NexTrade | Modern E-Commerce Platform",
  description: "A high-performance React-driven retail interface. Implemented a robust dynamic filtering system and organized product architecture to optimize user discovery and navigation flows.",
  tech: ["React.js", "JavaScript", "Tailwind CSS", "Dynamic Routing"],
  link: "https://ecommerce-one-teal-22.vercel.app/",
  github: "https://github.com/Ayaalmadhon2004",
}
];

export default function Projects() {
  return (
    <section className="py-24 px-4" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Featured Engineering Projects
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="mb-6 rounded-2xl bg-slate-50 aspect-video flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 transition-colors overflow-hidden">
                 <span className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em] group-hover:text-blue-500 transition-colors">
                   {project.title.split('|')[0]} View
                 </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                {project.title}
              </h3>
              
              <p className="text-slate-600 mt-4 mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-extrabold tracking-wider uppercase bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-100">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-50">
                <a 
                  href={project.link} 
                  target="_blank" 
                  className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors"
                >
                  Code <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}