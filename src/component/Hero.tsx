"use client";

import { Mail, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-20 px-4">
      <div className="max-w-3xl">
        <div className="inline-block px-3 py-1 mb-6 text-sm font-mono text-blue-600 bg-blue-50 border border-blue-100 rounded-full">
          Computer Systems Engineering 
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          Aya Almadhon
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          Frontend Specialist with 2 years of experience building high-performance 
          <span className="text-blue-600 font-semibold"> React & Next.js </span> 
          applications. Currently engineering Full-Stack solutions to solve complex 
          real-world challenges.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex gap-3 pr-6 border-r border-slate-200">
            <a href="https://github.com/Ayaalmadhon2004" target="_blank" className="p-2 text-slate-500 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/aya-almadhon2025" target="_blank" className="p-2 text-slate-500 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
            <a href="mailto:ayaalmadhon0@gmail.com" className="p-2 text-slate-500 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            View My Projects <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}