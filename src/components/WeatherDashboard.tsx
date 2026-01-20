import {
    Wind,
    Droplets,
    Sun,
    Wind as WindIcon,
    Eye,
    ArrowDownWideNarrow,
    Activity,
    ThermometerSun,
    Sunrise,
    Sunset
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { cn } from "@/lib/utils";

interface DashboardStatsCardProps {
    title: string;
    value: string | number;
    unit?: string;
    description?: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}

const DashboardStatsCard = ({ title, value, unit, description, icon, children, className }: DashboardStatsCardProps) => (
    <div className={cn("glass-panel p-5 flex flex-col h-full", className)}>
        <div className="flex items-center gap-2 mb-3 text-white/40">
            {icon}
            <span className="text-sm font-medium uppercase tracking-wider">{title}</span>
        </div>
        <div className="flex-1">
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{value}</span>
                {unit && <span className="text-lg text-white/40">{unit}</span>}
            </div>
            {description && <p className="text-sm text-white/40 mt-1">{description}</p>}
            {children}
        </div>
    </div>
);

const SunHoursCard = ({ sunrise, sunset, currentProgress }: { sunrise: string, sunset: string, currentProgress: number }) => (
    <DashboardStatsCard
        title="Sun Hours"
        value="10hrs 30mins"
        icon={<Sun className="h-4 w-4" />}
        className="relative overflow-hidden"
    >
        <div className="mt-4 h-24 relative">
            {/* Sun path curve */}
            <svg className="w-full h-full" viewBox="0 0 200 100">
                <path
                    d="M20,80 Q100,0 180,80"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                />
                {/* Active path */}
                <path
                    d="M20,80 Q100,0 180,80"
                    fill="none"
                    stroke="url(#sun-gradient)"
                    strokeWidth="3"
                    strokeDasharray="200"
                    strokeDashoffset={200 * (1 - currentProgress)}
                />
                <defs>
                    <linearGradient id="sun-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FB923C" />
                        <stop offset="50%" stopColor="#FACC15" />
                        <stop offset="100%" stopColor="#FB923C" />
                    </linearGradient>
                </defs>
                {/* Sun indicator */}
                <circle cx={20 + 160 * currentProgress} cy={80 - 64 * Math.sin(Math.PI * currentProgress)} r="4" fill="#FACC15" className="animate-pulse" />
            </svg>
            <div className="flex justify-between mt-2 text-xs text-white/40 font-medium">
                <div className="flex flex-col items-center">
                    <Sunrise className="h-3 w-3 mb-1 text-orange-400" />
                    <span>{sunrise}</span>
                    <span className="opacity-50 mt-0.5">Sunrise</span>
                </div>
                <div className="flex flex-col items-center">
                    <Sunset className="h-3 w-3 mb-1 text-orange-400" />
                    <span>{sunset}</span>
                    <span className="opacity-50 mt-0.5">Sunset</span>
                </div>
            </div>
        </div>
    </DashboardStatsCard>
);

const HourlyChart = ({ data }: { data: any[] }) => (
    <div className="h-48 w-full mt-6">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#38BDF8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(8px)' }}
                    itemStyle={{ color: '#fff' }}
                />
                <Area
                    type="monotone"
                    dataKey="temp"
                    stroke="#38BDF8"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorTemp)"
                />
                <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }}
                    dy={10}
                />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

export const WeatherDashboard = ({ city, currentTemp, condition, high, low, hourlyData, humidity, windSpeed, visibility, pressure, aqi, uv }: any) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
            {/* Main Large Weather Card */}
            <div className="lg:col-span-2 glass-panel p-8 flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <h2 className="text-4xl font-bold mb-1">{city}, Egypt</h2>
                            <p className="text-white/40">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                            <p className="text-xs text-white/20 mt-1 uppercase tracking-tighter">Updated a few minutes ago</p>
                        </div>
                        <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
                            <button className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">°F</button>
                            <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10">°C</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 mb-12">
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full" />
                            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-24 h-24 rounded-3xl shadow-[0_0_40px_rgba(234,179,8,0.3)] flex items-center justify-center relative z-10">
                                <Sun className="h-14 w-14 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="text-8xl font-black tracking-tight leading-none">{currentTemp}°</span>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-semibold text-white/80">{condition}</span>
                                    <span className="text-lg text-white/40">H:{high}° L:{low}°</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-3 mt-auto">
                        {['Wed 21', 'Thu 22', 'Fri 23', 'Sat 24', 'Sun 25'].map((day, i) => (
                            <div key={day} className={cn("flex flex-col items-center p-4 rounded-2xl transition-all", i === 0 ? "bg-white/10 border border-white/10" : "hover:bg-white/5")}>
                                <span className="text-xs font-bold uppercase mb-3 text-white/60">{i === 0 ? 'Today' : day.split(' ')[0]}</span>
                                <Sun className="h-8 w-8 text-yellow-400 mb-3" />
                                <div className="flex flex-col items-center">
                                    <span className="text-sm font-bold">{18 + i}°</span>
                                    <span className="text-[10px] text-white/30 font-medium">{12 + i}°</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <HourlyChart data={hourlyData} />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <DashboardStatsCard
                    title="Visibility"
                    value={visibility}
                    unit="km"
                    description="Excellent"
                    icon={<Eye className="h-4 w-4" />}
                >
                    <div className="mt-4 flex gap-1 items-end h-8">
                        {[10, 20, 30, 40, 50].map((h, i) => (
                            <div key={i} className="flex-1 bg-accent/20 rounded-sm" style={{ height: `${h}%` }} />
                        ))}
                        <div className="flex-1 bg-accent rounded-sm h-[60%]" />
                    </div>
                </DashboardStatsCard>

                <DashboardStatsCard
                    title="Wind"
                    value={windSpeed}
                    unit="km/h"
                    description="Force: 4 (Moderate Breeze)"
                    icon={<WindIcon className="h-4 w-4" />}
                >
                    <div className="mt-4 flex items-center justify-center relative h-20 w-20 mx-auto">
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10" />
                        <div className="w-full h-0.5 bg-accent origin-center transform rotate-45" />
                        <div className="h-10 w-10 glass-panel rounded-full flex items-center justify-center">
                            <Activity className="h-4 w-4 text-accent" />
                        </div>
                    </div>
                </DashboardStatsCard>

                <DashboardStatsCard
                    title="AQI"
                    value={aqi}
                    description="Moderate"
                    icon={<Activity className="h-4 w-4" />}
                >
                    <div className="mt-4 w-full bg-white/5 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 w-[60%] rounded-full" />
                    </div>
                </DashboardStatsCard>

                <DashboardStatsCard
                    title="UV Index"
                    value={uv}
                    description="Moderate"
                    icon={<ThermometerSun className="h-4 w-4" />}
                >
                    <div className="mt-4 flex items-end gap-1 h-3">
                        {Array.from({ length: 11 }).map((_, i) => (
                            <div key={i} className={cn("flex-1 rounded-full", i <= uv ? "bg-accent" : "bg-white/10")} />
                        ))}
                    </div>
                </DashboardStatsCard>

                <DashboardStatsCard
                    title="Pressure"
                    value={pressure}
                    unit="mb"
                    description="Falling slowly"
                    icon={<ArrowDownWideNarrow className="h-4 w-4" />}
                >
                    <div className="mt-6 h-8 w-full border-b border-dashed border-white/20 relative">
                        <div className="absolute bottom-0 left-1/4 w-3 h-3 bg-accent rounded-full -mb-1.5" />
                    </div>
                </DashboardStatsCard>

                <DashboardStatsCard
                    title="Humidity"
                    value={humidity}
                    unit="%"
                    description="Dry"
                    icon={<Droplets className="h-4 w-4" />}
                >
                    <div className="mt-4 flex gap-1 items-end h-10">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className={cn("flex-1 rounded-sm transition-all duration-700", i < 4 ? "bg-accent" : "bg-accent/10")} style={{ height: `${20 + i * 10}%` }} />
                        ))}
                    </div>
                </DashboardStatsCard>

                <div className="sm:col-span-2">
                    <SunHoursCard sunrise="06:50 AM" sunset="05:21 PM" currentProgress={0.65} />
                </div>
            </div>
        </div>
    );
};
