import { Cloud } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-bg backdrop-blur-xl border-b border-glass-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-warm flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Aura</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <span className="text-muted-foreground hover:text-white transition-colors cursor-default">Precision Maps</span>
            <span className="text-muted-foreground hover:text-white transition-colors cursor-default">Analytics</span>
            <span className="text-muted-foreground hover:text-white transition-colors cursor-default">Founder</span>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="mailto:sheroukgamal82@gmail.com">
              <Button size="lg" className="rounded-full shadow-lg bg-accent hover:bg-accent/80 transition-all font-bold">
                Contact Shrouk
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
