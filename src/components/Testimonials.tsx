import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground">
            Organizations rely on our meteorological intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all animate-scale-in">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-6 leading-relaxed">
              "The API integration was seamless. We've reduced weather-related operational delays by 40% across our logistics network."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-white font-bold">
                MK
              </div>
              <div>
                <p className="font-semibold text-foreground">Mohamed Kamal</p>
                <p className="text-sm text-muted-foreground">Operations Director, TransEgypt Logistics</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-6 leading-relaxed">
              "Accurate forecasts enable precise irrigation scheduling. This platform has improved our crop yield planning significantly."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-white font-bold">
                LA
              </div>
              <div>
                <p className="font-semibold text-foreground">Laila Ahmed</p>
                <p className="text-sm text-muted-foreground">Agricultural Manager, Delta Farms Group</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-6 leading-relaxed">
              "Essential data infrastructure for our climate research. The consistency and reliability meet our academic standards."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-white font-bold">
                YM
              </div>
              <div>
                <p className="font-semibold text-foreground">Dr. Yasmin Mahmoud</p>
                <p className="text-sm text-muted-foreground">Senior Researcher, Cairo University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
