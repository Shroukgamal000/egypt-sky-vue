import { CloudSun, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { CitySelector } from "./CitySelector";

interface HeroProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export const Hero = ({ selectedCity, onCityChange }: HeroProps) => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-scale-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Trusted by Agriculture, Logistics & Research</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Professional Weather Intelligence
            <br />
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              for Egypt
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
            Access accurate, real-time meteorological data across all major Egyptian cities. Enterprise-grade forecasting with comprehensive analytics for business-critical decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="rounded-full px-8 shadow-2xl hover:shadow-xl transition-all text-lg h-14">
              <CloudSun className="w-5 h-5 mr-2" />
              Access Live Data
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80 text-lg h-14"
            >
              View API Documentation
            </Button>
          </div>

          {/* City Selector */}
          <div className="max-w-md mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <CitySelector selectedCity={selectedCity} onCityChange={onCityChange} />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-40 left-10 w-20 h-20 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-60 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};
