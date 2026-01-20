import fs from 'fs';

const svgContent = fs.readFileSync('egypt-map.svg', 'utf-8');

// Extract inner SVG markup (paths and groups)
const pathsMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
if (!pathsMatch) {
  console.error('Could not find SVG content');
  process.exit(1);
}
let paths = pathsMatch[1];

// Mapping for consistency between SVG IDs and weatherApi CITY_COORDINATES keys
const idMapping = {
  "Al Minya": "Minya",
  "Al Fayyum": "Fayoum",
  "Kafr el-Sheikh": "Kafr El Sheikh",
  "Al Sharqia": "Sharqia",
  "Sharqia": "Sharqia",
  "Dakahlia": "Dakahlia",
  "Gharbia": "Gharbia",
  "Monufia": "Monufia",
  "Qalyubia": "Qalyubia",
  "Beheira": "Beheira",
  "Damietta": "Damietta",
  "Port Said": "Port Said",
  "Ismailia": "Ismailia",
  "Suez": "Suez",
  "Cairo": "Cairo",
  "Giza": "Giza",
  "Alexandria": "Alexandria",
  "Matruh": "Matruh",
  "North Sinai": "North Sinai",
  "South Sinai": "South Sinai",
  "Red Sea": "Red Sea",
  "New Valley": "New Valley",
  "Aswan": "Aswan",
  "Luxor": "Luxor",
  "Qena": "Qena",
  "Sohag": "Sohag",
  "Asyut": "Asyut",
  "Beni Suef": "Beni Suef",
};

// Convert HTML class attributes to React className and fix path tags
paths = paths.replace(/<path([^>]*?)>/g, (match, attrs) => {
  // Strip trailing slash if present (from self-closing SVG tags)
  let cleanAttrs = attrs.replace(/\/$/, '').trim();

  // Convert class to className
  let newAttrs = cleanAttrs.replace(/\sclass="([^"]*)"/g, ' className="$1"');

  // Extract id
  const idMatch = newAttrs.match(/id="([^"]*)"/);
  let id = idMatch ? idMatch[1] : '';

  // Clean ID and handle mapping
  let cityKey = id.replace(/ Governorate$/, '');
  if (idMapping[cityKey]) {
    cityKey = idMapping[cityKey];
  }

  // Ensure each <path> has properties for interaction
  // Use primary color for strokes and add a glow filter
  if (!/stroke=/.test(newAttrs)) newAttrs += ' stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.8"';

  // Add interactivity and dynamic styling
  if (cityKey) {
    const fillStyle = `fill: getCityColor("${cityKey}")`;
    newAttrs += ` onClick={() => onCitySelect("${cityKey}")} style={{ ${fillStyle} }}`;

    if (newAttrs.includes('className="')) {
      newAttrs = newAttrs.replace('className="', 'className="transition-all duration-500 hover:opacity-100 hover:stroke-white/80 cursor-pointer ');
    } else {
      newAttrs += ' className="transition-all duration-500 hover:opacity-100 hover:stroke-white/80 cursor-pointer"';
    }
  } else {
    if (!/fill=/.test(newAttrs)) newAttrs += ' fill="currentColor"';
  }

  return `<path ${newAttrs} />`;
});

// Final cleanup
paths = paths.replace(/\s+/g, ' ');

const componentContent = `import React from 'react';

interface EgyptMapPathsProps {
  onCitySelect: (city: string) => void;
  cityTemperatures?: Record<string, number>;
}

export const EgyptMapPaths = ({ onCitySelect, cityTemperatures = {} }: EgyptMapPathsProps) => {
  const getCityColor = (city: string) => {
    const temp = cityTemperatures[city];
    // Base Topographical color (Desert Yellow) derived from user's image
    const baseColor = "rgba(253, 230, 138, 0.7)"; 
    
    if (temp === undefined) return baseColor;
    
    // Scale temp (10 to 45 deg C) to color
    // Blending desert yellow with temperature intensity
    const normalized = Math.min(Math.max((temp - 10) / 35, 0), 1);
    
    // Gradient: Desert Yellow (Cold) -> Vibrant Heat Orange/Red (Hot)
    const r = Math.round(253 + normalized * 2);
    const g = Math.round(230 - normalized * 130);
    const b = Math.round(138 - normalized * 80);
    
    return \`rgba(\${r}, \${g}, \${b}, 0.8)\`;
  };

  return (
    <g>
      ${paths}
    </g>
  );
};
`;

fs.writeFileSync('src/components/EgyptMapPaths.tsx', componentContent);
console.log('Successfully created src/components/EgyptMapPaths.tsx');
