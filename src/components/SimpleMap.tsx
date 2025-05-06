
import React from 'react';
import { TunerInfo } from './TunerCard';
import { MapPin } from 'lucide-react';

interface SimpleMapProps {
  tuners: TunerInfo[];
}

const SimpleMap: React.FC<SimpleMapProps> = ({ tuners }) => {
  if (!tuners.length) return null;

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md relative bg-gray-100 border border-gray-300">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4">
          <h3 className="font-playfair text-lg font-semibold mb-2">Map View</h3>
          <p className="text-gray-600 text-sm">
            This is a placeholder for an interactive map.
            <br />In a production app, we'd integrate with Google Maps or similar.
          </p>
        </div>
      </div>
      {tuners.map((tuner) => (
        <div 
          key={tuner.id}
          className="absolute animate-pulse"
          style={{ 
            top: `${30 + Math.random() * 40}%`, 
            left: `${30 + Math.random() * 40}%`
          }}
        >
          <MapPin className="h-8 w-8 text-piano-blue" />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-xs px-2 py-1 rounded shadow whitespace-nowrap">
            {tuner.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleMap;
