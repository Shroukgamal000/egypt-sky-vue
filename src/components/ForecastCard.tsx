import { Card, CardContent } from "@/components/ui/card";
import { Cloud, CloudRain, Sun } from "lucide-react";

interface ForecastCardProps {
  day: string;
  temperature: number;
  condition: string;
}

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case "sunny":
    case "clear":
      return <Sun className="w-8 h-8 text-accent" />;
    case "cloudy":
    case "partly cloudy":
      return <Cloud className="w-8 h-8 text-primary" />;
    case "rainy":
      return <CloudRain className="w-8 h-8 text-primary" />;
    default:
      return <Sun className="w-8 h-8 text-accent" />;
  }
};

export const ForecastCard = ({ day, temperature, condition }: ForecastCardProps) => {
  return (
    <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-3">{day}</p>
          <div className="flex justify-center mb-3">{getWeatherIcon(condition)}</div>
          <p className="text-2xl font-bold text-foreground mb-1">{temperature}°C</p>
          <p className="text-sm text-muted-foreground">{condition}</p>
        </div>
      </CardContent>
    </Card>
  );
};
