"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Container, GitBranch, Activity } from "lucide-react";

const skillCategories = [
  {
    title: "Tools & Containers",
    icon: Container,
    color: "text-purple-400",
    skills: ["Docker", "Kubernetes", "Podman", "Helm", "Containerd", "CRI-O"]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    color: "text-cyan-400",
    skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode", "Oracle Cloud"]
  },
  {
    title: "CI/CD & Automation",
    icon: GitBranch,
    color: "text-pink-400",
    skills: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD", "Flux"]
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    color: "text-green-400",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "Jaeger"]
  }
];

const additionalSkills = [
  "Terraform", "Ansible", "Puppet", "Chef",
  "Python", "Bash", "Go", "Node.js",
  "PostgreSQL", "MongoDB", "Redis", "MySQL",
  "Nginx", "Apache", "Traefik", "HAProxy",
  "Git", "Linux", "Networking", "Security"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">#</span>skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build reliable infrastructure
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-muted hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-muted/50 ${category.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-purple-500/20 transition-colors cursor-default font-mono text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills */}
        <Card className="bg-card/30 backdrop-blur-sm border-muted">
          <CardHeader>
            <CardTitle className="text-xl">Additional Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="border-cyan-500/30 hover:bg-cyan-500/10 transition-colors cursor-default font-mono px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 border-2 border-purple-500/10 rotate-45 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-cyan-500/10 rotate-12 pointer-events-none" />
      </div>
    </section>
  );
}
