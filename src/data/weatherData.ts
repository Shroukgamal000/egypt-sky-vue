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

export const weatherData: Record<string, WeatherData> = {
  Cairo: {
    city: "Cairo",
    temperature: 28,
    condition: "Sunny",
    humidity: 45,
    windSpeed: 15,
    forecast: [
      { day: "Tomorrow", temperature: 29, condition: "Sunny" },
      { day: "Wednesday", temperature: 27, condition: "Partly Cloudy" },
      { day: "Thursday", temperature: 26, condition: "Cloudy" },
      { day: "Friday", temperature: 28, condition: "Sunny" },
      { day: "Saturday", temperature: 30, condition: "Sunny" },
    ],
  },
  Alexandria: {
    city: "Alexandria",
    temperature: 24,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 22,
    forecast: [
      { day: "Tomorrow", temperature: 23, condition: "Cloudy" },
      { day: "Wednesday", temperature: 25, condition: "Partly Cloudy" },
      { day: "Thursday", temperature: 24, condition: "Sunny" },
      { day: "Friday", temperature: 26, condition: "Sunny" },
      { day: "Saturday", temperature: 25, condition: "Partly Cloudy" },
    ],
  },
  Giza: {
    city: "Giza",
    temperature: 27,
    condition: "Sunny",
    humidity: 42,
    windSpeed: 14,
    forecast: [
      { day: "Tomorrow", temperature: 28, condition: "Sunny" },
      { day: "Wednesday", temperature: 26, condition: "Partly Cloudy" },
      { day: "Thursday", temperature: 25, condition: "Cloudy" },
      { day: "Friday", temperature: 27, condition: "Sunny" },
      { day: "Saturday", temperature: 29, condition: "Sunny" },
    ],
  },
  Luxor: {
    city: "Luxor",
    temperature: 32,
    condition: "Sunny",
    humidity: 30,
    windSpeed: 18,
    forecast: [
      { day: "Tomorrow", temperature: 33, condition: "Sunny" },
      { day: "Wednesday", temperature: 34, condition: "Sunny" },
      { day: "Thursday", temperature: 32, condition: "Sunny" },
      { day: "Friday", temperature: 35, condition: "Sunny" },
      { day: "Saturday", temperature: 36, condition: "Sunny" },
    ],
  },
  Aswan: {
    city: "Aswan",
    temperature: 35,
    condition: "Sunny",
    humidity: 25,
    windSpeed: 20,
    forecast: [
      { day: "Tomorrow", temperature: 36, condition: "Sunny" },
      { day: "Wednesday", temperature: 37, condition: "Sunny" },
      { day: "Thursday", temperature: 35, condition: "Sunny" },
      { day: "Friday", temperature: 38, condition: "Sunny" },
      { day: "Saturday", temperature: 39, condition: "Sunny" },
    ],
  },
  "Port Said": {
    city: "Port Said",
    temperature: 22,
    condition: "Cloudy",
    humidity: 70,
    windSpeed: 25,
    forecast: [
      { day: "Tomorrow", temperature: 23, condition: "Partly Cloudy" },
      { day: "Wednesday", temperature: 22, condition: "Cloudy" },
      { day: "Thursday", temperature: 24, condition: "Sunny" },
      { day: "Friday", temperature: 25, condition: "Sunny" },
      { day: "Saturday", temperature: 23, condition: "Partly Cloudy" },
    ],
  },
  Hurghada: {
    city: "Hurghada",
    temperature: 30,
    condition: "Sunny",
    humidity: 55,
    windSpeed: 20,
    forecast: [
      { day: "Tomorrow", temperature: 31, condition: "Sunny" },
      { day: "Wednesday", temperature: 29, condition: "Sunny" },
      { day: "Thursday", temperature: 30, condition: "Partly Cloudy" },
      { day: "Friday", temperature: 32, condition: "Sunny" },
      { day: "Saturday", temperature: 33, condition: "Sunny" },
    ],
  },
  "Sharm El Sheikh": {
    city: "Sharm El Sheikh",
    temperature: 29,
    condition: "Sunny",
    humidity: 50,
    windSpeed: 18,
    forecast: [
      { day: "Tomorrow", temperature: 30, condition: "Sunny" },
      { day: "Wednesday", temperature: 28, condition: "Sunny" },
      { day: "Thursday", temperature: 29, condition: "Partly Cloudy" },
      { day: "Friday", temperature: 31, condition: "Sunny" },
      { day: "Saturday", temperature: 32, condition: "Sunny" },
    ],
  },
};
