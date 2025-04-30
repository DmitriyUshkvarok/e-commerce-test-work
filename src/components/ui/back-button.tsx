'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-purple-600 transition font-medium mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      Назад до списку
    </button>
  );
}
