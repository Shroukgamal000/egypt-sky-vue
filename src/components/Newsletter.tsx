import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-warm rounded-3xl p-12 text-center shadow-2xl">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get weekly weather insights, tips, and updates delivered straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 rounded-full"
            />
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 shadow-lg"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
