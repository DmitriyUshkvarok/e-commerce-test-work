'use client';

import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { removeFromCart } from '@/redux/slices/cartSlice';

interface DeleteFromCartButtonProps {
  productId: string;
}

export default function DeleteFromCartButton({
  productId,
}: DeleteFromCartButtonProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className="cursor-pointer"
    >
      <Trash2 className="w-5 h-5 text-red-500" />
    </Button>
  );
}
