import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";

interface CitySelectorProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
}

const egyptianCities = [
  "Cairo",
  "Alexandria",
  "Giza",
  "Luxor",
  "Aswan",
  "Port Said",
  "Hurghada",
  "Sharm El Sheikh",
];

export const CitySelector = ({ selectedCity, onCityChange }: CitySelectorProps) => {
  return (
    <div className="flex items-center gap-3 max-w-xs mx-auto">
      <MapPin className="w-5 h-5 text-primary" />
      <Select value={selectedCity} onValueChange={onCityChange}>
        <SelectTrigger className="border-border bg-card/80 backdrop-blur-sm">
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent>
          {egyptianCities.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
