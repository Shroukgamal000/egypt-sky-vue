import { Card, CardContent } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Wind } from "lucide-react";

interface WeatherCardProps {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case "sunny":
    case "clear":
      return <Sun className="w-16 h-16 text-accent" />;
    case "cloudy":
    case "partly cloudy":
      return <Cloud className="w-16 h-16 text-primary" />;
    case "rainy":
      return <CloudRain className="w-16 h-16 text-primary" />;
    default:
      return <Sun className="w-16 h-16 text-accent" />;
  }
};

export const WeatherCard = ({
  city,
  temperature,
  condition,
  humidity,
  windSpeed,
}: WeatherCardProps) => {
  return (
    <Card className="overflow-hidden border-white/10 shadow-2xl bg-white/5 backdrop-blur-md animate-fade-in text-white">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">{city}</h2>
          <p className="text-white/60 text-lg">{new Date().toLocaleDateString('en-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="mr-6">{getWeatherIcon(condition)}</div>
          <div>
            <div className="text-6xl font-bold">
              {temperature}°C
            </div>
            <div className="text-xl text-white/60 mt-2">{condition}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center">
            <Wind className="w-5 h-5 text-accent mr-2" />
            <div>
              <p className="text-sm text-white/60">Wind Speed</p>
              <p className="text-lg font-semibold">{windSpeed} km/h</p>
            </div>
          </div>
          <div className="flex items-center">
            <Cloud className="w-5 h-5 text-accent mr-2" />
            <div>
              <p className="text-sm text-white/60">Humidity</p>
              <p className="text-lg font-semibold">{humidity}%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
