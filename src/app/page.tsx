import Hero from '@/component/Hero';
import Projects from '@/component/Projects';
import Skills from '@/component/Skills';

export default function Home() {
  return (
    <main className="container mx-auto px-4 max-w-6xl">
      <Hero />
      <Skills />
      <Projects />
      
      <footer className="py-20 text-center border-t border-slate-100">
        <p className="text-slate-400 text-sm font-mono">
          © {new Date().getFullYear()} Aya Almadhon. Built with Next.js & Engineering Precision.
        </p>
      </footer>
    </main>
  );
}