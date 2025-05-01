import { Product } from '@/types/product';
import ProductCard from './product-card';
import { SortableProductGrid } from './sortable-wrapper';

export default function ProductListView({ products }: { products: Product[] }) {
  const handleReorder = (newOrder: Product[]) => {
    console.log('Новый порядок (list):', newOrder);
  };

  return (
    <SortableProductGrid
      products={products}
      onReorder={handleReorder}
      wrapperClassName="space-y-4" // 👈 список вместо сетки
      renderItem={(product) => (
        <ProductCard
          key={product.id}
          product={product}
          imageClassName="w-40 h-40"
          cardClassName="flex flex-row items-center"
          headerClassName="w-full max-w-[400px]"
          contentClassName="flex flex-col gap-4 self-start"
          titleClassName="text-xl"
          descriptionClassName="text-gray-500"
          footerClassName="w-full mt-0 self-start"
        />
      )}
    />
  );
}
