import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { WeatherDashboard } from "@/components/WeatherDashboard";
import { CitySearch } from "@/components/CitySearch";
import { Footer } from "@/components/Footer";
import { fetchWeather, CITY_COORDINATES } from "@/utils/weatherApi";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("Cairo");
  const { toast } = useToast();

  const { data: currentWeather, isLoading, error } = useQuery({
    queryKey: ["weather", selectedCity],
    queryFn: () => fetchWeather(selectedCity),
    retry: 1,
  });

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Error fetching weather data",
        description: "Please check your internet connection and try again.",
      });
    }
  }, [error, toast]);

  const hourlyMockData = useMemo(() => [
    { time: '4 PM', temp: 18 },
    { time: '7 PM', temp: 16 },
    { time: '10 PM', temp: 15 },
    { time: '1 AM', temp: 14 },
    { time: '4 AM', temp: 13 },
    { time: '7 AM', temp: 12 },
    { time: '10 AM', temp: 16 },
    { time: '1 PM', temp: 20 },
  ], []);

  return (
    <div className="min-h-screen bg-gradient-hero text-white">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-12 overflow-x-hidden">
        <div className="text-center mb-16 animate-fade-in text-shadow-glow">
          <h1 className="text-7xl md:text-9xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/20 tracking-[10px] md:tracking-[20px] uppercase">
            Aura
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto mb-12 font-medium tracking-widest uppercase">
            Developed by Shrouk Gamal Kamel.
          </p>
          <div className="max-w-xl mx-auto">
            <CitySearch onCitySelect={setSelectedCity} className="mb-12" />
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto animate-scale-in">
          {isLoading ? (
            <div className="flex justify-center items-center h-[600px] glass-panel rounded-[50px]">
              <Loader2 className="h-16 w-16 animate-spin text-accent" />
            </div>
          ) : currentWeather ? (
            <WeatherDashboard
              city={currentWeather.city}
              currentTemp={currentWeather.temperature}
              condition={currentWeather.condition}
              high={currentWeather.temperature + 4}
              low={currentWeather.temperature - 6}
              humidity={currentWeather.humidity}
              windSpeed={currentWeather.windSpeed}
              visibility={10}
              pressure={1019}
              aqi={83}
              uv={3}
              hourlyData={hourlyMockData}
            />
          ) : (
            <div className="h-96 flex items-center justify-center glass-panel text-white/30 rounded-[50px]">
              Failed to load weather data.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
