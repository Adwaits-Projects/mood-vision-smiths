import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { MoodDetectionDemo } from "./MoodDetectionDemo";

export const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Entertainment AI Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-ping" />
        <div className="absolute top-32 right-20 w-2 h-2 bg-accent rounded-full animate-ping delay-1000" />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-primary-glow rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent rounded-full animate-ping delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            VisionSmiths
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Seeing Beyond the Obvious
          </p>
        </div>

        <div className="animate-fade-in-up delay-200">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Why Mood Matters in Entertainment
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Personalized recommendations powered by real-time emotional AI. 
            Experience entertainment that truly understands how you feel.
          </p>
        </div>

        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => setIsDemoOpen(true)}
          >
            <Play className="w-5 h-5 mr-2" />
            Try Demo
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-4">
            Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl float" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl float delay-1000" />
      </div>

      <MoodDetectionDemo 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </section>
  );
};