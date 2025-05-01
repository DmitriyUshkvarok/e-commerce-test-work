import { notFound } from 'next/navigation';
import { Product } from '@/types/product';
import Image from 'next/image';
import AddToCartButton from '@/components/cart/ui/add-to-cart-button';
import BackButton from '@/components/ui/back-button';

async function getProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: 'no-store',
  });
  const products: Product[] = await res.json();
  return products.find((p) => p.id === id) || null;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-4 pt-[80px] pb-[70px]">
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl text-blue-600 font-semibold">
            {product.price.toLocaleString()}₴
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
}
