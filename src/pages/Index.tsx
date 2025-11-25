import { useState } from "react";
import { WeatherCard } from "@/components/WeatherCard";
import { ForecastCard } from "@/components/ForecastCard";
import { CitySelector } from "@/components/CitySelector";
import { weatherData } from "@/data/weatherData";
import { CloudSun } from "lucide-react";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("Cairo");
  const currentWeather = weatherData[selectedCity];

  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CloudSun className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-bold text-foreground">
              Egypt Weather
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Professional Weather Forecasting for Egyptian Cities
          </p>
        </header>

        {/* City Selector */}
        <div className="mb-12 animate-slide-up">
          <CitySelector
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
          />
        </div>

        {/* Current Weather */}
        <div className="max-w-2xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <WeatherCard
            city={currentWeather.city}
            temperature={currentWeather.temperature}
            condition={currentWeather.condition}
            humidity={currentWeather.humidity}
            windSpeed={currentWeather.windSpeed}
          />
        </div>

        {/* 5-Day Forecast */}
        <div className="max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            5-Day Forecast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {currentWeather.forecast.map((day, index) => (
              <div
                key={day.day}
                className="animate-slide-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
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

        {/* Footer */}
        <footer className="text-center mt-16 pb-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-muted-foreground">
            © 2025 Egypt Weather - Accurate forecasts for all major Egyptian cities
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
