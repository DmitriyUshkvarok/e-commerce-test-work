import { Product } from '@/types/product';
import { useEffect, useState } from 'react';

export function useFilteredProducts(
  products: Product[],
  selectedCategory: string,
  priceRange: [number, number],
) {
  const [filtered, setFiltered] = useState<Product[]>([]);

  useEffect(() => {
    const filteredData = products.filter((p) => {
      const inCategory = selectedCategory
        ? p.category === selectedCategory
        : true;
      const inPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return inCategory && inPrice;
    });
    setFiltered(filteredData);
  }, [products, selectedCategory, priceRange]);

  return filtered;
}
