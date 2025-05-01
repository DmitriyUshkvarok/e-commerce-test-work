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
    const params = new URLSearchParams(searchParams.toString()); // ✅ сохраняем все параметры

    // Обновляем только фильтры
    if (selectedCategory) {
      params.set('category', selectedCategory);
    } else {
      params.delete('category');
    }

    if (priceRange[0] !== 0) {
      params.set('min', priceRange[0].toString());
    } else {
      params.delete('min');
    }

    if (priceRange[1] !== 100000) {
      params.set('max', priceRange[1].toString());
    } else {
      params.delete('max');
    }

    // ❗ Если фильтры изменились, то сбрасываем страницу на 1
    if (
      selectedCategory !== initialCategory ||
      priceRange[0] !== initialMin ||
      priceRange[1] !== initialMax
    ) {
      params.set('page', '1');
    }

    router.replace(`?${params.toString()}`);
  }, [selectedCategory, priceRange, searchParams, initialCategory, initialMin, initialMax, router]);

  return {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
  };
}
