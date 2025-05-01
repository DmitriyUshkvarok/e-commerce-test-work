import { Product } from '@/types/product';
import ProductCard from './product-card';
import { SortableProductGrid } from './sortable-wrapper';

export default function ProductLargeGrid({
  products,
}: {
  products: Product[];
}) {
  const handleReorder = (newOrder: Product[]) => {
    console.log('Новый порядок (large):', newOrder);
  };

  return (
    <SortableProductGrid 
      products={products}
      onReorder={handleReorder}
      wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-6" // 👈 Кастомная сетка
      renderItem={(product) => (
        <ProductCard key={product.id} product={product} />
      )}
    />
  );
}
