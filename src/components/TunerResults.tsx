
import React from 'react';
import TunerCard, { TunerInfo } from './TunerCard';

interface TunerResultsProps {
  tuners: TunerInfo[];
  searchLocation: string;
}

const TunerResults: React.FC<TunerResultsProps> = ({ tuners, searchLocation }) => {
  if (!tuners.length) return null;
  
  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-playfair font-semibold">Piano Tuners in {searchLocation}</h2>
        <p className="text-gray-600 mt-1">Found {tuners.length} professional tuners in your area</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tuners.map(tuner => (
          <TunerCard key={tuner.id} tuner={tuner} />
        ))}
      </div>
    </div>
  );
};

export default TunerResults;
