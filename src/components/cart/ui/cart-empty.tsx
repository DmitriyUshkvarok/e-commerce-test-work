'use client';

import { ShoppingCart } from 'lucide-react';

export default function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center h-60 text-center text-gray-500">
      <ShoppingCart className="w-12 h-12 mb-4" />
      <p className="text-lg">Ваш кошик порожній</p>
    </div>
  );
}
