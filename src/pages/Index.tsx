
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import TunerResults from '@/components/TunerResults';
import SimpleMap from '@/components/SimpleMap';
import { getTunersByLocation, mockTuners } from '@/data/mockTuners';
import { Piano } from 'lucide-react';

const Index = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [tuners, setTuners] = useState(mockTuners['']);

  const handleSearch = (location: string) => {
    setSearchLocation(location);
    setTuners(getTunersByLocation(location));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-piano-light to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <Piano className="h-16 w-16 text-piano-blue" />
                <div className="absolute -top-2 -right-1 w-3 h-3 rounded-full bg-piano-accent animate-piano-wave"></div>
                <div className="absolute -top-1 -left-2 w-2 h-2 rounded-full bg-piano-accent animate-piano-wave" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-piano-blue mb-4">
                Find Piano Tuners Near You
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mb-10">
                Connect with professional piano tuners in your area and keep your instrument in perfect harmony.
              </p>
              
              <SearchBar onSearch={handleSearch} />

              <div className="mt-8 flex flex-wrap gap-8 justify-center text-gray-600">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-piano-light flex items-center justify-center mr-3">
                    <span className="font-bold text-piano-blue">1</span>
                  </div>
                  <span>Search your location</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-piano-light flex items-center justify-center mr-3">
                    <span className="font-bold text-piano-blue">2</span>
                  </div>
                  <span>Browse tuner profiles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-piano-light flex items-center justify-center mr-3">
                    <span className="font-bold text-piano-blue">3</span>
                  </div>
                  <span>Contact and schedule</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {tuners.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <TunerResults tuners={tuners} searchLocation={searchLocation || "Featured Locations"} />
                </div>
                <div className="lg:col-span-1">
                  <SimpleMap tuners={tuners} />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-16 bg-piano-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Why Choose TuneTown</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-piano-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-piano-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Verified Professionals</h3>
                <p className="text-gray-600">All tuners are screened and verified for quality and reliability.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-piano-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-piano-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Transparent Reviews</h3>
                <p className="text-gray-600">Read genuine reviews from other piano owners in your area.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-piano-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-piano-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Easy Scheduling</h3>
                <p className="text-gray-600">Book appointments that work with your schedule, hassle-free.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">What Piano Owners Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "TuneTown helped me find an amazing piano tuner in my area. My piano hasn't sounded this good in years!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div className="ml-3">
                      <h4 className="font-medium">Client {i}</h4>
                      <p className="text-sm text-gray-500">{["New York", "Los Angeles", "Chicago"][i-1]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
