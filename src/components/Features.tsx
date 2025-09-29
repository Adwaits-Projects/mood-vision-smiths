import { Eye, Smartphone, Settings, Shield } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Real-Time Detection",
      description: "Instant mood analysis through advanced computer vision and audio processing"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Cross-Platform",
      description: "Works seamlessly across all your devices - mobile, desktop, smart TV, and VR"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Customizable",
      description: "Personalize preferences, genres, and sensitivity to match your unique taste"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Privacy First",
      description: "All processing happens locally - your emotional data never leaves your device"
    }
  ];

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Experience the future of personalized entertainment with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in-up group relative"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Circular Feature Card */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-smooth" />
                
                {/* Main Circle */}
                <div className="relative w-48 h-48 mx-auto rounded-full gradient-card border-2 border-primary/30 group-hover:border-primary/60 transition-smooth flex items-center justify-center group-hover:scale-105 glow-primary">
                  <div className="text-center">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-smooth">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 animate-fade-in-up delay-600">
          <div className="flex justify-center space-x-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-primary opacity-60 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};