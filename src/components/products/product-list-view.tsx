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
          imageClassName="w-full h-full object-cover"
          cardClassName="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          headerClassName="w-full sm:w-40 sm:h-40 shrink-0"
          contentClassName="flex-1"
          titleClassName="text-lg sm:text-xl"
          descriptionClassName="text-gray-500 text-sm"
          footerClassName="w-full"
          priceClassName="text-base sm:text-lg"
          priceAndLinkWrapper="flex sm:flex-col justify-between gap-2 sm:flex-row"
        />
      )}
    />
  );
}
