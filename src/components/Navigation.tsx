import { Cloud } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-bg backdrop-blur-xl border-b border-glass-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-warm flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">WeatherEG</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#forecast" className="text-muted-foreground hover:text-foreground transition-colors">
              Data Platform
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Clients
            </a>
          </div>

          <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
            Request Access
          </Button>
        </div>
      </div>
    </nav>
  );
};
