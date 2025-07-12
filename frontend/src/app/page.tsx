'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Tour = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tours`);
        if (!response.ok) {
          throw new Error('Network response was not ok. Is the API server running?');
        }
        const data: Tour[] = await response.json();
        setTours(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchTours();
  }, []);

  return (
    <main className="font-sans bg-gray-50 min-h-screen">
      <header className="text-center py-12 px-4 bg-white shadow-md">
        <h1 className="text-5xl font-bold text-blue-600">Azure Adventure Tours</h1>
        <p className="mt-2 text-lg text-gray-700">Find your next great adventure!</p>
      </header>

      <div className="container mx-auto px-4 py-8">
        {isLoading && <p className="text-center text-gray-500">Loading tours...</p>}
        {error && <p className="text-center text-red-600 font-semibold">Error: {error}</p>}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative w-full h-56">
                  <Image
                    src={tour.imageUrl}
                    alt={tour.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{tour.name}</h2>
                  <p className="text-gray-600 mb-4 flex-grow">{tour.description}</p>
                  <div className="text-right text-2xl font-bold text-blue-600">
                    {new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(tour.price)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
