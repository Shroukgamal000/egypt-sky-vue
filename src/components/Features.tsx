import { Cloud, Zap, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Cloud,
    title: "Hyper-Accurate",
    description: "Advanced forecasting models ensure you're always prepared for Egypt's unique weather patterns.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time updates delivered instantly, so you never miss a weather change.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Designed with care for the Egyptian community, combining beauty with functionality.",
  },
  {
    icon: Shield,
    title: "Always Reliable",
    description: "Trusted by thousands daily for accurate forecasts across all major cities.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-soft">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why People Love Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than just weather data—it's a delightful experience crafted for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
