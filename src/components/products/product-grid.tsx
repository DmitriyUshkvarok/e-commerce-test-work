import { Product } from '@/types/product';
import ProductCard from './product-card';
import { SortableProductGrid } from './sortable-wrapper';

export default function ProductGrid({ products }: { products: Product[] }) {
  const handleReorder = (newOrder: Product[]) => {
    console.log('Новый порядок:', newOrder);
  };
  return (
    <SortableProductGrid
      products={products}
      onReorder={handleReorder}
      renderItem={(product) => (
        <ProductCard key={product.id} product={product} />
      )}
    />
  );
}
