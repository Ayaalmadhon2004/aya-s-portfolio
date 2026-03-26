"use client"
import { ArrowDown, Mail, Globe, Cpu } from "lucide-react"
import { Button } from "@/component/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 py-24 bg-background overflow-hidden">
      <div className="relative z-10 max-w-6xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-emerald-500/40" />
          <p className="text-emerald-500 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
            Computer Systems Engineering
          </p>
        </div>
        
        <h1 className="text-6xl md:text-[100px] lg:text-[120px] font-black text-foreground mb-10 tracking-tighter leading-[0.9]">
          Aya Almadhon<span className="text-emerald-500">.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-light">
          Frontend Specialist with 2 years of experience crafting high-performance 
          <span className="text-emerald-500 font-medium italic text-shadow-sm"> React </span> & 
          <span className="text-emerald-500 font-medium italic"> Next.js </span> ecosystems.
        </p>
        
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex gap-6 pr-8 border-r border-white/10">
            <a href="https://github.com/Ayaalmadhon2004" className="text-muted-foreground hover:text-emerald-500 transition-colors"><Globe size={22} /></a>
            <a href="https://linkedin.com/in/aya-almadhon2025" className="text-muted-foreground hover:text-emerald-500 transition-colors"><Cpu size={22} /></a>
            <a href="mailto:ayaalmadhon0@gmail.com" className="text-muted-foreground hover:text-emerald-500 transition-colors"><Mail size={22} /></a>
          </div>

          <Button variant="outline" size="lg" className="group border-white/10 hover:border-emerald-500/50 text-foreground rounded-xl font-bold bg-white/5 backdrop-blur-sm">
            Explore Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform text-emerald-500" />
          </Button>
        </div>
      </div>
      
      {/* الخط الجمالي الجانبي */}
      <div className="absolute left-6 md:left-16 lg:left-32 top-[70%] -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent hidden md:block" />
    </section>
  )
}