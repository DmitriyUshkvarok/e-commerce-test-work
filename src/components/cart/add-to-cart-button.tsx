'use client';

import { Product } from '@/types/product';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { addToCart } from '@/redux/slices/cartSlice';
import { Button } from '@/components/ui/button';

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  const isInCart = useAppSelector((state) =>
    state.cart.items.some((item) => item.id === product.id),
  );

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <Button
      onClick={handleAdd}
      className="px-6 py-2 bg-purple-600 text-white rounded-[20px] cursor-pointer hover:bg-purple-700 transition"
    >
      {isInCart ? 'Додати ще' : 'Додати в кошик'}
    </Button>
  );
}
