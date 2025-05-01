'use client';

import { CartItem } from '@/redux/slices/cartSlice';
import Image from 'next/image';
import DeleteFromCartButton from './ui/delete-from-cart';

interface CartItemCardProps {
  item: CartItem;
}

export default function CartItemCard({ item }: CartItemCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.name}
          width={100}
          height={100}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-sm text-gray-500">x{item.quantity}</p>
        </div>
      </div>
      <DeleteFromCartButton productId={item.id} />
    </div>
  );
}
