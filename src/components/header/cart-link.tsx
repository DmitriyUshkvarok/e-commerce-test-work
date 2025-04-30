'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '@/hooks/redux-hooks';

const CartLink = () => {
  const totalItems = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <Link href="/cart" className="relative flex items-center text-sm">
      <ShoppingCart className="w-5 h-5 text-white" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] leading-tight font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartLink;
