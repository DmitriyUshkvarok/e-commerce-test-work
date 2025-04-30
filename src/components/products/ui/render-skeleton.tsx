import ProductSkeleton from './product-skeleton';

export default function renderSkeletonView(view: 'grid' | 'large' | 'list') {
  const skeletonCount = view === 'list' ? 6 : 8;

  if (view === 'list') {
    return (
      <div className="space-y-4">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductSkeleton key={i} view="list" />
        ))}
      </div>
    );
  }

  const gridCols = view === 'grid' ? 'grid-cols-4' : 'grid-cols-2';

  return (
    <div className={`grid gap-6 ${gridCols}`}>
      {Array.from({ length: skeletonCount }).map((_, i) => (
        <ProductSkeleton key={i} view={view} />
      ))}
    </div>
  );
}
