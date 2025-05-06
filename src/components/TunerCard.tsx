
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface TunerInfo {
  id: number;
  name: string;
  location: string;
  rating: number;
  phone: string;
  website?: string;
  distance?: string;
  image?: string;
}

const TunerCard: React.FC<{ tuner: TunerInfo }> = ({ tuner }) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-playfair text-xl text-piano-blue">{tuner.name}</CardTitle>
            <div className="flex items-center mt-1 text-gray-600 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{tuner.location}</span>
            </div>
          </div>
          <div className="flex items-center bg-piano-light px-2 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-medium">{tuner.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="mt-2 space-y-2">
          <div className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-2" />
            <span>{tuner.phone}</span>
          </div>
          {tuner.website && (
            <div className="flex items-center text-piano-accent">
              <Globe className="h-4 w-4 mr-2" />
              <a href={tuner.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Website
              </a>
            </div>
          )}
          {tuner.distance && (
            <div className="text-sm text-gray-500">
              <span>{tuner.distance} away</span>
            </div>
          )}
          <div className="mt-4">
            <Button variant="outline" className="w-full border-piano-blue text-piano-blue hover:bg-piano-blue hover:text-white">
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TunerCard;
