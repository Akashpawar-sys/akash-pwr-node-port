"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-muted/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl font-mono text-gradient">Akash Pawar</span>
            </div>
            <p className="text-sm text-muted-foreground">
              DevOps Engineer specializing in cloud infrastructure, automation, and scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              {["Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Akashpawar-sys"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-purple-500/20 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-pawar-818698a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-cyan-500/20 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="mailto:akashpawar6340@zohomail.in"
                className="p-2 rounded-lg bg-muted/50 hover:bg-pink-500/20 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-muted/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              © {currentYear} Akash Pawar. Built with Next.js & Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & Developed with <span className="text-purple-400">♥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
