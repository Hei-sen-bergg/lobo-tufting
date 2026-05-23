import { useEffect, useState } from 'react';
import { sanityClient } from './client';

interface UseSanityDataOptions<T> {
  initialData?: T;
}

export function useSanityData<T>(
  query: string,
  options?: UseSanityDataOptions<T>
) {
  const [data, setData] = useState<T | null>(options?.initialData || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await sanityClient.fetch<T>(query);
        setData(result);
        setError(null);
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setError(error);
        console.error('Error fetching Sanity data:', error);
        // Data will remain as initialData or null if query fails
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
}

// Helper function to generate optimized image URL from Sanity
export function getSanityImageUrl(
  imageUrl: string,
  width?: number,
  height?: number,
  quality: number = 80
): string {
  if (!imageUrl) return '';
  
  let url = imageUrl;
  
  if (width || height) {
    const params = new URLSearchParams();
    if (width) params.append('w', String(width));
    if (height) params.append('h', String(height));
    params.append('q', String(quality));
    params.append('fit', 'max');
    
    url = `${url}?${params.toString()}`;
  }
  
  return url;
}
