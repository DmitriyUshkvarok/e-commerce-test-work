'use client';

import { useAppSelector } from '@/hooks/redux-hooks';
import CartList from './cart-list';
import CartEmpty from './ui/cart-empty';

export default function CartContainer() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Кошик</h2>
      {items.length === 0 ? <CartEmpty /> : <CartList />}
    </div>
  );
}
