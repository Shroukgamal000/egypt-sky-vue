import fs from 'fs';
import { geoPath, geoMercator } from 'd3-geo';

async function generateMap() {
    const url = 'https://github.com/wmgeolab/geoBoundaries/raw/main/releaseData/gbOpen/EGY/ADM1/geoBoundaries-EGY-ADM1.geojson';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch GeoJSON: ${response.statusText}`);

        const geojson = await response.json();

        // Create a projection
        // Center roughly on Egypt (approx 30E, 27N)
        const projection = geoMercator()
            .center([30, 27])
            .scale(2500) // Adjust scale to fit
            .translate([400, 300]); // Center in 800x600 SVG

        const pathGenerator = geoPath().projection(projection);

        let svgContent = `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="0.5" class="w-full h-full">\n`;

        geojson.features.forEach((feature, index) => {
            let d = pathGenerator(feature);
            if (d) {
                // Optimize path data by rounding coordinates to 1 decimal place
                d = d.replace(/\d+\.\d+/g, (match) => parseFloat(match).toFixed(1));

                const name = feature.properties.shapeName || `Region ${index}`;
                // Escape quotes in name just in case
                const safeName = name.replace(/"/g, '&quot;');
                svgContent += `  <path d="${d}" id="${safeName}" name="${safeName}" class="hover:fill-white/20 transition-colors cursor-pointer outline-none" />\n`;
            }
        });

        svgContent += `</svg>`;

        console.log("SVG Generated successfully");

        // Write to a file
        fs.writeFileSync('egypt-map.svg', svgContent);

    } catch (error) {
        console.error('Error generating map:', error);
    }
}

generateMap();
