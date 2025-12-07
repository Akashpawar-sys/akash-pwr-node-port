"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-500/20 rotate-45 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-cyan-500/20 rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-pink-500/20 rotate-45 animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Dot Grid Pattern */}
        <div className="absolute top-1/4 right-1/4 grid grid-cols-4 gap-4 opacity-20">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-purple-400 rounded-full" />
          ))}
        </div>
        
        <div className="absolute bottom-1/4 left-1/3 grid grid-cols-3 gap-3 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-muted/50 border border-purple-500/30 backdrop-blur-sm">
          <Terminal className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-gradient">Akash Pawar</span>
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-purple-400">
          DevOps Engineer
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Building robust infrastructure and automating deployment pipelines.
          <br />
          Transforming complex systems into scalable, reliable solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg group"
            onClick={scrollToContact}
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-cyan-500/50 hover:bg-cyan-500/10 px-8 py-6 text-lg"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-purple-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
