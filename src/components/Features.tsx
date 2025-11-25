import { MapPin, Clock, Calendar, Heart, Zap, Shield } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-soft">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Enterprise Weather Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced meteorological data and forecasting infrastructure designed for professional applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in">
            <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Nationwide Coverage</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive meteorological data across all major Egyptian cities with granular location accuracy for regional analysis.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">High-Frequency Updates</h3>
            <p className="text-muted-foreground leading-relaxed">
              Real-time data synchronization with sub-hourly refresh intervals ensuring current conditions for operational planning.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Extended Forecasting</h3>
            <p className="text-muted-foreground leading-relaxed">
              Multi-day projections with probabilistic modeling and trend analysis for strategic resource allocation and scheduling.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">API Integration</h3>
            <p className="text-muted-foreground leading-relaxed">
              RESTful API with comprehensive documentation enabling seamless integration into existing business systems and workflows.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">High Performance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Enterprise-grade infrastructure with 99.9% uptime SLA and millisecond response times for mission-critical applications.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.5s" }}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Validated Accuracy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Quality-assured datasets from verified sources with continuous validation ensuring regulatory compliance and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
