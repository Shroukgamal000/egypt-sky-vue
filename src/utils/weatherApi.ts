
export interface WeatherData {
    city: string;
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    forecast: {
        day: string;
        temperature: number;
        condition: string;
    }[];
}

export const CITY_COORDINATES: Record<string, { lat: number; lon: number; arabicName: string }> = {
    Cairo: { lat: 30.0444, lon: 31.2357, arabicName: "القاهرة" },
    Alexandria: { lat: 31.2001, lon: 29.9187, arabicName: "الإسكندرية" },
    Giza: { lat: 30.0131, lon: 31.2089, arabicName: "الجيزة" },
    Luxor: { lat: 25.6872, lon: 32.6396, arabicName: "الأقصر" },
    Aswan: { lat: 24.0889, lon: 32.8998, arabicName: "أسوان" },
    "Port Said": { lat: 31.2653, lon: 32.3019, arabicName: "بورسعيد" },
    Hurghada: { lat: 27.2579, lon: 33.8116, arabicName: "الغردقة" },
    "Sharm El Sheikh": { lat: 27.9158, lon: 34.3299, arabicName: "شرم الشيخ" },
    Suez: { lat: 29.9668, lon: 32.5498, arabicName: "السويس" },
    Ismailia: { lat: 30.5903, lon: 32.2715, arabicName: "الإسماعيلية" },
    Fayoum: { lat: 29.3084, lon: 30.8428, arabicName: "الفيوم" },
    "Beni Suef": { lat: 29.0661, lon: 31.0994, arabicName: "بني سويف" },
    Minya: { lat: 28.0871, lon: 30.7618, arabicName: "المنيا" },
    Asyut: { lat: 27.1809, lon: 31.1837, arabicName: "أسيوط" },
    Sohag: { lat: 26.5569, lon: 31.6948, arabicName: "سوهاج" },
    Qena: { lat: 26.1551, lon: 32.7160, arabicName: "قنا" },
    "Red Sea": { lat: 26.1020, lon: 34.2654, arabicName: "البحر الأحمر" },
    Damietta: { lat: 31.4175, lon: 31.8144, arabicName: "دمياط" },
    Dakahlia: { lat: 31.1656, lon: 31.4913, arabicName: "الدقهلية" },
    Sharqia: { lat: 30.5965, lon: 31.5041, arabicName: "الشرقية" },
    Qalyubia: { lat: 30.3291, lon: 31.2156, arabicName: "القليوبية" },
    "Kafr El Sheikh": { lat: 31.1107, lon: 30.9388, arabicName: "كفر الشيخ" },
    Gharbia: { lat: 30.8754, lon: 31.0335, arabicName: "الغربية" },
    Monufia: { lat: 30.5972, lon: 30.9876, arabicName: "المنوفية" },
    Beheira: { lat: 30.8481, lon: 30.3436, arabicName: "البحيرة" },
    "Matruh": { lat: 31.3543, lon: 27.2373, arabicName: "مطروح" },
    "North Sinai": { lat: 30.2824, lon: 33.6176, arabicName: "شمال سيناء" },
    "South Sinai": { lat: 28.9697, lon: 33.6176, arabicName: "جنوب سيناء" },
    "New Valley": { lat: 25.4521, lon: 28.9869, arabicName: "الوادي الجديد" },
};

const getWeatherCondition = (code: number): string => {
    // WMO Weather interpretation codes (WW)
    if (code === 0) return "Sunny";
    if (code === 1 || code === 2 || code === 3) return "Partly Cloudy";
    if (code === 45 || code === 48) return "Cloudy";
    if (code >= 51 && code <= 67) return "Rainy";
    if (code >= 80 && code <= 82) return "Rainy";
    if (code >= 95) return "Stormy";
    return "Sunny";
};

export const fetchWeather = async (city: string): Promise<WeatherData> => {
    const coords = CITY_COORDINATES[city];
    if (!coords) {
        throw new Error(`Coordinates not found for city: ${city}`);
    }

    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    console.log("Weather API Response:", data);

    if (!data.current || !data.daily || !data.daily.time) {
        console.error("Invalid weather data format:", data);
        throw new Error("Invalid weather data format received from API");
    }

    const current = data.current;
    const daily = data.daily;

    const forecast = daily.time.slice(1, 6).map((time: string, index: number) => {
        const date = new Date(time);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        // Use max temp for forecast
        const temp = Math.round(daily.temperature_2m_max[index + 1]);
        const code = daily.weather_code[index + 1];

        return {
            day: index === 0 ? "Tomorrow" : dayName,
            temperature: temp,
            condition: getWeatherCondition(code),
        };
    });

    return {
        city,
        temperature: Math.round(current.temperature_2m),
        condition: getWeatherCondition(current.weather_code),
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        forecast,
    };
};
