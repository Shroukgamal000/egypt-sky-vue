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
    <Card className="overflow-hidden border-none shadow-xl bg-card/50 backdrop-blur-sm animate-fade-in">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-2">{city}</h2>
          <p className="text-muted-foreground text-lg">{new Date().toLocaleDateString('en-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="mr-6">{getWeatherIcon(condition)}</div>
          <div>
            <div className="text-6xl font-bold text-foreground">
              {temperature}°C
            </div>
            <div className="text-xl text-muted-foreground mt-2">{condition}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
          <div className="flex items-center">
            <Wind className="w-5 h-5 text-primary mr-2" />
            <div>
              <p className="text-sm text-muted-foreground">Wind Speed</p>
              <p className="text-lg font-semibold text-foreground">{windSpeed} km/h</p>
            </div>
          </div>
          <div className="flex items-center">
            <Cloud className="w-5 h-5 text-primary mr-2" />
            <div>
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="text-lg font-semibold text-foreground">{humidity}%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
