import { Camera, Mic, MessageSquare, Brain, Sparkles, ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <div className="flex space-x-2">
        <Camera className="w-8 h-8" />
        <Mic className="w-8 h-8" />
        <MessageSquare className="w-8 h-8" />
      </div>,
      title: "Input",
      description: "Camera, Microphone & Text",
      detail: "Capture facial expressions, voice tone, and text cues"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Processing", 
      description: "AI Detects Mood",
      detail: "Advanced multimodal AI analyzes your emotional state"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Output",
      description: "Personalized Picks",
      detail: "Curated entertainment that matches your current mood"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Three simple steps to discover entertainment that truly resonates with your emotions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Card */}
              <div className="animate-fade-in-up delay-200 p-8 rounded-2xl gradient-card border border-primary/20 hover:border-primary/40 transition-smooth hover:scale-105 hover:shadow-2xl">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-smooth">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-lg font-semibold text-primary mb-2">{step.description}</p>
                <p className="text-muted-foreground">{step.detail}</p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pipeline Visual */}
        <div className="mt-16 animate-fade-in-up delay-400">
          <div className="w-full h-2 bg-gradient-to-r from-primary via-accent to-primary-glow rounded-full pulse-glow" />
          <p className="text-sm text-muted-foreground mt-4">
            Real-time processing pipeline
          </p>
        </div>
      </div>
    </section>
  );
};