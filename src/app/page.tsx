import Hero from '@/component/Hero';
import Projects from '@/component/Projects';
import Skills from '@/component/Skills';

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Skills />
      <Projects />
      
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-slate-500 text-xs font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} Aya Almadhon — Engineered for Impact
        </p>
      </footer>
    </main>
  );
}