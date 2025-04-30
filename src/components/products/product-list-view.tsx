import { Product } from '@/types/product';
import ProductCard from './product-card';

export default function ProductListView({ products }: { products: Product[] }) {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          imageClassName="w-40 h-40"
          cardClassName="flex flex-row items-center"
          headerClassName="w-full max-w-[400px]"
          contentClassName="flex flex-col gap-4 self-start"
          titleClassName="text-xl"
          descriptionClassName="text-gray-500"
          footerClassName="w-full justify-end"
        />
      ))}
    </div>
  );
}
