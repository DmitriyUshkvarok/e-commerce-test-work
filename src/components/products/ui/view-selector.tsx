'use client';
import { Button } from '@/components/ui/button';
type ViewType = 'grid' | 'large' | 'list';

type ViewSelectorProps = {
  view: ViewType;
  onChange: (view: ViewType) => void;
};

export default function ViewSelector({ view, onChange }: ViewSelectorProps) {
  const baseClass =
    'px-3 py-1 rounded-[18px] border cursor-pointer transition duration-300 hover:bg-[#9d74d7] hover:text-white text-[#9d74d7]';

  return (
    <div className="flex justify-end mb-4 space-x-2">
      <Button
        type="button"
        variant="outline"
        onClick={() => onChange('grid')}
        className={`${baseClass} ${view === 'grid' ? 'bg-[#9d74d7] text-white' : ''}`}
      >
        Сітка
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={() => onChange('large')}
        className={`${baseClass} ${view === 'large' ? 'bg-[#9d74d7] text-white' : ''}`}
      >
        Велика
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={() => onChange('list')}
        className={`${baseClass} ${view === 'list' ? 'bg-[#9d74d7] text-white' : ''}`}
      >
        Список
      </Button>
    </div>
  );
}
