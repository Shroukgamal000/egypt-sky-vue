import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { CITY_COORDINATES } from "@/utils/weatherApi";
import { cn } from "@/lib/utils";

interface CitySearchProps {
    onCitySelect: (city: string) => void;
    className?: string;
}

export const CitySearch = ({ onCitySelect, className }: CitySearchProps) => {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const cityList = useMemo(() => Object.keys(CITY_COORDINATES), []);

    const filteredCities = useMemo(() => {
        if (!query) return [];
        const lowerQuery = query.toLowerCase();
        return cityList.filter((city) => {
            const details = CITY_COORDINATES[city];
            return (
                city.toLowerCase().includes(lowerQuery) ||
                details.arabicName.includes(query)
            );
        });
    }, [query, cityList]);

    const handleSelect = (city: string) => {
        onCitySelect(city);
        setQuery("");
        setIsOpen(false);
    };

    return (
        <div className={cn("relative w-full max-w-md mx-auto z-50", className)}>
            <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-foreground/40" />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Search for a city... (e.g. Cairo, Alexandria)"
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-full py-4 pl-12 pr-6 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all backdrop-blur-md"
                />
            </div>

            {isOpen && filteredCities.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background/90 backdrop-blur-xl border border-border rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <ul className="max-h-64 overflow-y-auto">
                        {filteredCities.map((city) => {
                            const details = CITY_COORDINATES[city];
                            return (
                                <li key={city}>
                                    <button
                                        onClick={() => handleSelect(city)}
                                        className="w-full px-6 py-3 text-left hover:bg-foreground/10 transition-colors flex items-center justify-between group"
                                    >
                                        <span className="text-foreground group-hover:text-accent transition-colors font-medium">
                                            {city}
                                        </span>
                                        <span className="text-foreground/40 font-arabic text-lg">
                                            {details.arabicName}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

            {isOpen && query && filteredCities.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background/90 backdrop-blur-xl border border-border rounded-2xl p-4 text-center text-foreground/40 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    No cities found matching "{query}"
                </div>
            )}

            {/* Click outside backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[-1]"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};
