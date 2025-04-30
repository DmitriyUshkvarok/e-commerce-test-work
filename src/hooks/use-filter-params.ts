import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export function useFilterParams() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get('category') || '';
  const initialMin = parseInt(searchParams.get('min') || '0');
  const initialMax = parseInt(searchParams.get('max') || '100000');

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialMin,
    initialMax,
  ]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategory) params.set('category', selectedCategory);
    if (priceRange[0] !== 0) params.set('min', priceRange[0].toString());
    if (priceRange[1] !== 100000) params.set('max', priceRange[1].toString());

    router.replace(`?${params.toString()}`);
  }, [selectedCategory, priceRange, router]);

  return {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
  };
}
