import { Zap, Gamepad2, Headphones, Tv } from "lucide-react";

export const WhyItStandsOut = () => {
  const highlights = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "End Scroll Fatigue",
      description: "No more endless browsing. Get instant, mood-perfect recommendations that save hours of decision time."
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Adaptive Gaming & Playlists",
      description: "Dynamic content that evolves with your emotional journey throughout the day."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "VR Integration",
      description: "Immersive experiences that respond to your emotional state in real-time for next-level entertainment."
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Smart Device Partnerships",
      description: "Seamless integration with major OTT platforms and smart devices for unified entertainment experiences."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why VisionSmiths Stands Out
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary technology that transforms how you discover and experience entertainment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="animate-slide-in group relative p-8 rounded-2xl gradient-card border border-primary/20 hover:border-primary/40 transition-smooth hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="text-primary group-hover:scale-110 transition-smooth p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20">
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent opacity-60 group-hover:opacity-100 transition-smooth" />
              <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-primary opacity-40 group-hover:opacity-80 transition-smooth" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center animate-fade-in-up delay-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">&lt;0.5s</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Platforms</div>
            </div>
            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};