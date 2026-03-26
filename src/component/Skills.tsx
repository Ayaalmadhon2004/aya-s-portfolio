// src/components/Skills.tsx

const skillGroups = [
  {
    category: "Frontend Architecture",
    skills: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "Prisma ORM", "PostgreSQL", "Supabase", "RESTful APIs"]
  },
  {
    category: "Performance & Tools",
    skills: ["TanStack Query", "SEO Optimization", "Git/GitHub", "Zustand/Context API", "Core Web Vitals"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-slate-50/50 rounded-3xl my-10" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight">
          Technical Expertise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillGroups.map((group, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-l-4 border-blue-600 pl-4">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}