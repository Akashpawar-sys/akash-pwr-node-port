"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">#</span>contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's build something amazing together. Reach out for collaborations or opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-muted">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-muted focus:border-purple-500"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-muted focus:border-purple-500"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-muted/50 border-muted focus:border-purple-500 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="text-center text-green-400 text-sm font-medium">
                    Message sent successfully! 🎉
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-muted hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:akashpawar6340@zohomail.in" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                >
                  akashpawar6340@zohomail.in
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-muted hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
                <CardDescription>
                  Connect with me on these platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href="https://github.com/Akashpawar-sys" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-purple-500/10 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-purple-400 transition-colors" />
                  <div>
                    <div className="font-medium group-hover:text-purple-400 transition-colors">GitHub</div>
                    <div className="text-sm text-muted-foreground">@Akashpawar-sys</div>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/akash-pawar-818698a9/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-cyan-500/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                  <div>
                    <div className="font-medium group-hover:text-cyan-400 transition-colors">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">@akash-pawar-818698a9</div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Availability Badge */}
            <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border-purple-500/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                  </div>
                  <div>
                    <div className="font-semibold">Available for opportunities</div>
                    <div className="text-sm text-muted-foreground">Open to freelance and full-time roles</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-purple-500/10 rotate-45 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-cyan-500/10 rotate-12 pointer-events-none" />
    </section>
  );
}
