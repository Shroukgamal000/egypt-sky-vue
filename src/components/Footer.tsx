import { Cloud, Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-warm flex items-center justify-center">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Aura</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Egypt's high-fidelity meteorological intelligence platform. Developed and maintained by Shrouk Gamal Kamel.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>High-Precision Analytics</li>
              <li>Atmospheric Data</li>
              <li>Satellite Tracking</li>
              <li>Real-time Forecasting</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Founder</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Shrouk Gamal Kamel</li>
              <li>Met-Tech Specialist</li>
              <li>UI/UX Engineering</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="mailto:sheroukgamal82@gmail.com"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-white transition-all flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-white transition-all flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              sheroukgamal82@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>© 2026 Aura. Crafted by Shrouk Gamal Kamel.</div>
        </div>
      </div>
    </footer>
  );
};
