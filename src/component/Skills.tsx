export default function SkillsSection() {
  const skills = [
    { title: "FRONTEND ARCHITECTURE", items: ["React.js", "Next.js", "TypeScript"] },
    { title: "BACKEND & DATABASE", items: ["Node.js", "Prisma", "PostgreSQL"] },
    { title: "PERFORMANCE & TOOLS", items: ["TanStack Query", "SEO", "Git/GitHub"] }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-32 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tighter italic uppercase">Technical Expertise</h2>
        <p className="text-muted-foreground mb-20 max-w-2xl text-lg font-light leading-relaxed">
          Specialized in building scalable systems with a focus on performance and clean architecture.
        </p>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {skills.map((group) => (
            <div key={group.title} className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-emerald-500" />
                <h3 className="text-[10px] font-bold tracking-[0.3em] text-emerald-500 uppercase">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map(item => (
                  <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-muted-foreground font-mono transition-colors hover:border-emerald-500/30 hover:text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}