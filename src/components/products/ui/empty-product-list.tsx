import { SaladIcon } from 'lucide-react';

export default function EmptyProductList() {
  return (
    <div className="text-center py-12 px-4 text-gray-500">
      <div className="flex justify-center mb-4">
        <SaladIcon className="w-10 h-10 text-gray-400" />
      </div>
      <h2 className="text-xl font-semibold mb-2">Товарів не знайдено</h2>
      <p className="text-sm">
        Спробуйте змінити фільтри або перегляньте інші категорії.
      </p>
    </div>
  );
}
