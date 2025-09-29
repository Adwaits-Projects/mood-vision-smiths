import { Monitor, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-16 px-6 bg-gradient-to-t from-background via-secondary to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Glowing Screen Silhouette */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="relative inline-block">
            {/* Screen Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary to-accent rounded-lg blur-xl opacity-50 scale-110" />
            
            {/* Screen */}
            <div className="relative w-64 h-40 mx-auto rounded-lg bg-gradient-to-b from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center glow-intense">
              <Monitor className="w-16 h-16 text-primary" />
            </div>
            
            {/* Person Silhouette */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-8 bg-gradient-to-t from-foreground/60 to-transparent rounded-t-full" />
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center mb-12 animate-fade-in-up delay-200">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VisionSmiths
          </h3>
          <p className="text-xl text-muted-foreground mb-6">
            Seeing Beyond the Obvious
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Revolutionizing entertainment discovery through advanced emotional AI. 
            Experience content that truly understands and adapts to your feelings.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up delay-400">
          {[
            { icon: <Twitter className="w-6 h-6" />, label: "Twitter" },
            { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
            { icon: <Github className="w-6 h-6" />, label: "GitHub" },
            { icon: <Mail className="w-6 h-6" />, label: "Email" }
          ].map((social, index) => (
            <div
              key={index}
              className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/40 hover:scale-110 transition-smooth cursor-pointer group"
            >
              <span className="group-hover:scale-110 transition-smooth">
                {social.icon}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 text-center animate-fade-in-up delay-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 VisionSmiths. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <span className="hover:text-primary cursor-pointer transition-smooth">Privacy Policy</span>
              <span className="hover:text-primary cursor-pointer transition-smooth">Terms of Service</span>
              <span className="hover:text-primary cursor-pointer transition-smooth">Contact</span>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping opacity-60" />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40" />
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-primary-glow rounded-full animate-ping delay-1000 opacity-30" />
      </div>
    </footer>
  );
};