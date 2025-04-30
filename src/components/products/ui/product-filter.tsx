'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Slider } from '@/components/ui/slider';

type ProductFilterProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
};

export default function ProductFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: ProductFilterProps) {
  const handleCategoryChange = (value: string) => {
    onCategoryChange(value === 'all' ? '' : value);
  };

  return (
    <div className="mb-4 flex gap-6 items-center justify-center md:justify-start w-full">
      <div className="w-full max-w-64">
        <Select
          value={selectedCategory === '' ? 'all' : selectedCategory}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Усі категорії" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Усі категорії</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-[200px]">
        <div className="flex justify-between text-sm">
          <span>Ціна: {priceRange[0]}₴</span>
          <span>{priceRange[1]}₴</span>
        </div>
        <Slider
          min={0}
          max={100000}
          step={500}
          value={priceRange}
          onValueChange={(val) => onPriceChange([val[0], val[1]])}
        />
      </div>
    </div>
  );
}
