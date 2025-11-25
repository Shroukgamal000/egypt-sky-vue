import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WeatherCard } from "@/components/WeatherCard";
import { ForecastCard } from "@/components/ForecastCard";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { weatherData } from "@/data/weatherData";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("Cairo");
  const currentWeather = weatherData[selectedCity];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <Hero selectedCity={selectedCity} onCityChange={setSelectedCity} />

      <Features />

      {/* Current Weather Section */}
      <section id="forecast" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Right Now in {selectedCity}
            </h2>
            <p className="text-xl text-muted-foreground">
              Live updates you can trust
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <WeatherCard
              city={currentWeather.city}
              temperature={currentWeather.temperature}
              condition={currentWeather.condition}
              humidity={currentWeather.humidity}
              windSpeed={currentWeather.windSpeed}
            />
          </div>

          {/* 5-Day Forecast */}
          <div>
            <h3 className="text-3xl font-bold text-foreground text-center mb-8">
              5-Day Forecast
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {currentWeather.forecast.map((day, index) => (
                <div
                  key={day.day}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ForecastCard
                    day={day.day}
                    temperature={day.temperature}
                    condition={day.condition}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      <Newsletter />
      
      <Footer />
    </div>
  );
};

export default Index;
