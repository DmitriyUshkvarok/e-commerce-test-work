import Image from 'next/image';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { Product } from '@/types/product';
import clsx from 'clsx';
import Link from 'next/link';

type ProductCardProps = {
  product: Product;
  cardClassName?: string;
  imageClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  priceClassName?: string;
};

export default function ProductCard({
  product,
  cardClassName,
  imageClassName,
  headerClassName,
  titleClassName,
  descriptionClassName,
  contentClassName,
  footerClassName,
  priceClassName,
}: ProductCardProps) {
  const placeholder = '/placeholder.png';
  return (
    <Card className={clsx('flex flex-col', cardClassName)}>
      <CardHeader className={clsx(headerClassName)}>
        <Image
          src={product.image?.trim() || placeholder}
          alt={product.name}
          width={150}
          height={150}
          className={clsx(
            'w-full h-48 object-cover rounded-md mb-4',
            imageClassName,
          )}
        />
      </CardHeader>
      <CardContent className={clsx(contentClassName)}>
        <h2 className={clsx('text-lg font-semibold', titleClassName)}>
          {product.name}
        </h2>
        <p className={clsx('text-sm text-gray-600 mb-2', descriptionClassName)}>
          {product.description}
        </p>
      </CardContent>
      <CardFooter className={clsx('mt-auto', footerClassName)}>
        <div className="flex justify-between items-center w-full">
          <p
            className={clsx('font-bold text-[#9d74d7] text-lg', priceClassName)}
          >
            {product.price.toLocaleString()}₴
          </p>
          <Link
            href={`/product/${product.id}`}
            className="text-sm text-blue-600 hover:underline"
          >
            Детальніше →
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
