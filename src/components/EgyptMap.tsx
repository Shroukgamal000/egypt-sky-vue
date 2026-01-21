import React, { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CITY_COORDINATES } from '@/utils/weatherApi';

interface EgyptMapProps {
    onCitySelect: (city: string) => void;
    selectedCity: string;
}

// Component to handle map center updates
const ChangeView = ({ center, zoom }: { center: L.LatLngExpression, zoom: number }) => {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.setView(center, zoom, {
                animate: true,
                duration: 1.5
            });
        }
    }, [center, zoom, map]);
    return null;
};

// Custom Marker Component
const CustomMarker = ({ name, position, isSelected, onClick, arabicName }: any) => {
    const icon = useMemo(() => L.divIcon({
        className: 'custom-div-icon',
        html: `
            <div class="relative flex items-center justify-center">
                <div class="absolute w-4 h-4 bg-accent rounded-full animate-sonar ${isSelected ? 'scale-150' : ''}"></div>
                <div class="relative w-3 h-3 bg-white border-2 border-accent rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)] z-10 transition-transform duration-500 ${isSelected ? 'scale-125' : 'hover:scale-110'}"></div>
                ${isSelected ? `<div class="absolute -top-10 bg-accent/90 text-white px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap backdrop-blur-md shadow-lg border border-white/20 uppercase tracking-widest animate-fade-in">${name}</div>` : ''}
            </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
    }), [isSelected, name]);

    return (
        <Marker
            position={position}
            icon={icon}
            eventHandlers={{
                click: onClick,
            }}
        >
            <Popup className="custom-popup" closeButton={false}>
                <div className="flex flex-col items-center gap-1 p-1">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">{name}</span>
                    <span className="text-xs text-white/60 font-medium font-arabic">{arabicName}</span>
                </div>
            </Popup>
        </Marker>
    );
};

export const EgyptMap = ({ onCitySelect, selectedCity }: EgyptMapProps) => {
    const defaultCenter: L.LatLngExpression = [26.8, 30.8];
    const defaultZoom = 6;

    const selectedCoords = CITY_COORDINATES[selectedCity];
    const mapCenter: L.LatLngExpression = selectedCoords
        ? [selectedCoords.lat, selectedCoords.lon]
        : defaultCenter;

    return (
        <div className="w-full h-[500px] md:h-[700px] rounded-[40px] overflow-hidden border border-border/50 shadow-3xl relative group">
            {/* Map Overlay for better blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none z-10" />

            <MapContainer
                center={mapCenter}
                zoom={defaultZoom}
                scrollWheelZoom={false}
                className="w-full h-full"
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; Google'
                    url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                />

                <ChangeView center={mapCenter} zoom={selectedCoords ? 8 : defaultZoom} />

                {Object.entries(CITY_COORDINATES).map(([name, coords]) => (
                    <CustomMarker
                        key={name}
                        name={name}
                        arabicName={coords.arabicName}
                        position={[coords.lat, coords.lon]}
                        isSelected={selectedCity === name}
                        onClick={() => onCitySelect(name)}
                    />
                ))}
            </MapContainer>

            {/* UI HUD Elements */}
            <div className="absolute top-8 left-8 z-20 pointer-events-none">
                <div className="glass-panel px-6 py-4 rounded-3xl animate-fade-in">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-[3px] text-foreground/80">Satellite Connectivity</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 right-8 z-20 pointer-events-none">
                <div className="glass-panel px-6 py-4 rounded-3xl animate-fade-in">
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Scanning Region</p>
                        <p className="text-xl font-bold text-foreground capitalize">{selectedCity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
