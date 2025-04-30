import type { Product } from '@/types/product';

export function getUniqueCategories(products: Product[]) {
  return Array.from(new Set(products.map((p) => p.category)));
}
