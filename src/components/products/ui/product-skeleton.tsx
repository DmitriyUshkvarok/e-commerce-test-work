type SkeletonProps = {
  view?: 'grid' | 'large' | 'list';
};

export default function ProductSkeleton({ view = 'grid' }: SkeletonProps) {
  const base = 'bg-gray-200 rounded-md animate-pulse';

  if (view === 'list') {
    return (
      <div className="flex gap-4 items-center p-4 border rounded-lg">
        <div className={`w-24 h-24 ${base}`} />
        <div className="flex-1 space-y-2">
          <div className={`h-4 w-1/2 ${base}`} />
          <div className={`h-4 w-1/3 ${base}`} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className={`h-40 w-full ${base}`} />
      <div className={`h-4 w-2/3 ${base}`} />
      <div className={`h-4 w-1/3 ${base}`} />
    </div>
  );
}
