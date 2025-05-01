'use client';

import { useAppSelector } from '@/hooks/redux-hooks';
import CartItemCard from './cart-item-card';

export default function CartList() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
