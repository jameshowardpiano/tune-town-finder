
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
      <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 p-2 focus-within:ring-2 focus-within:ring-piano-accent focus-within:ring-opacity-50">
        <MapPin className="ml-3 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          className="flex-grow border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
          placeholder="Enter city or state..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button 
          type="submit" 
          className="rounded-full px-6 py-2 bg-piano-blue hover:bg-piano-accent transition-colors"
        >
          <Search className="mr-2 h-5 w-5" />
          Find Tuners
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
