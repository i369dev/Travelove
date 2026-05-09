import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { places, routes } from '../data/mockData';

interface GlobeComponentProps {
  autoRotate: boolean;
  showRoutes: boolean;
}

export function GlobeComponent({ autoRotate, showRoutes }: GlobeComponentProps) {
  const globeEl = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [countries, setCountries] = useState<any>({ features: [] });
  const [hoverD, setHoverD] = useState<any>();
  const [isRotating, setIsRotating] = useState(false);
  const rotateTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInteraction = () => {
    setIsRotating(true);
    if (rotateTimeoutRef.current) clearTimeout(rotateTimeoutRef.current);
    rotateTimeoutRef.current = setTimeout(() => {
      setIsRotating(false);
    }, 150);
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Load medium-resolution GeoJSON for country borders to fix lag and gaps
    fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(countriesData => {
        const filteredCountries = countriesData.features
          .filter((d: any) => d.properties.NAME !== 'Antarctica')
          .map((f: any) => ({ ...f, isCountry: true }));
        
        setCountries({
          features: filteredCountries
        });
      });
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = autoRotate;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = true;
    }
  }, [autoRotate]);

  useEffect(() => {
    if (globeEl.current) {
       globeEl.current.pointOfView({ lat: 39.8, lng: -98.5, altitude: 1.5 });
    }
  }, []);

  // Transform markers for html elements
  const gData = places.map(p => ({
    lat: p.lat,
    lng: p.lng,
    name: p.name,
    color: '#fce81e',
  }));

  const arcsData = showRoutes ? routes.map(r => ({
    startLat: r.startLat,
    startLng: r.startLng,
    endLat: r.endLat,
    endLng: r.endLng,
    color: ['rgba(253, 224, 27, 0)', '#fde01b'],
  })) : [];

  return (
    <div className="absolute inset-0 globe-container z-0" style={{ cursor: 'inherit' }}>
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        showGraticules={false}
        showAtmosphere={true}
        atmosphereColor="#3a6bf0"
        atmosphereAltitude={0.12}
        polygonsData={countries.features}
        polygonAltitude={() => 0.001}
        polygonCapColor={(d: any) => (d === hoverD ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0)')}
        polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
        polygonStrokeColor={() => 'rgba(0, 0, 0, 0)'}
        polygonsTransitionDuration={0}
        onPolygonHover={(d: any) => {
          if (!isRotating) {
            setHoverD(d);
          }
        }}
        onZoom={handleInteraction}
        onPovChanged={handleInteraction}
        polygonLabel={(d: any) => `
          <div class="bg-brand-navy border border-[#224099] text-white rounded-md px-2 py-1 shadow-lg text-xs font-sans pointer-events-none">
            ${d.properties.NAME}
          </div>
        `}
        onPolygonClick={(d: any) => {
          if (globeEl.current) {
            // Use standard label coordinates from Natural Earth dataset for precise centering
            const lat = d.properties.LABEL_Y || (d.bbox ? (d.bbox[1] + d.bbox[3]) / 2 : 0);
            const lng = d.properties.LABEL_X || (d.bbox ? (d.bbox[0] + d.bbox[2]) / 2 : 0);
            globeEl.current.pointOfView({ lat, lng, altitude: 0.8 }, 1000);
          }
        }}
        htmlElementsData={gData}
        htmlLat="lat"
        htmlLng="lng"
        htmlElement={(d: any) => {
          const el = document.createElement('div');
          el.innerHTML = `
            <div class="bg-brand-yellow rounded-sm p-[2px] shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform border border-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#080d19" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </div>
          `;
          el.style.pointerEvents = 'auto';
          el.onclick = () => {
             console.log('Selected Location:', d.name);
             if (globeEl.current) {
               globeEl.current.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.5 }, 1000);
             }
          };
          return el;
        }}
        arcsData={arcsData}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor={(d: any) => d.color}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={1500}
        arcStroke={1}
      />
    </div>
  );
}
