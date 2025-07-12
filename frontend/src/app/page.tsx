'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/test`);
        if (!response.ok) {
          throw new Error('Network response was not ok. Is the API server running?');
        }
        const data = await response.json();
        setMessage(data.message);
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
    fetchData();
  }, []);

  return (
    <main className="font-sans text-center mt-12 px-4">
      <h1 className="text-5xl font-bold text-blue-600">Azure Adventure Tours</h1>
      <p className="mt-2 text-lg text-gray-700">This is the frontend Next.js application.</p>

      <div className="mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">API Connection Test</h2>

        {isLoading && <p className="text-gray-500">Loading data from backend...</p>}

        {error && <p className="text-red-600 font-semibold">Error: {error}</p>}

        {message && (
          <p className="text-gray-800">
            Response from API:{" "}
            <span className="font-bold text-green-600 break-all">
              {message}
            </span>
          </p>
        )}
      </div>
    </main>
  );
}
