'use client';

import ViewSelector from './ui/view-selector';
import renderProductView from './render-product';
import ProductFilter from './ui/product-filter';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setSelector } from '@/redux/slices/viewSelectorSlice';
import { useFilterParams } from '@/hooks/use-filter-params';
import { useFilteredProducts } from '@/hooks/use-filtered-products';
import { getUniqueCategories } from '@/utils/get-unique-categories';
import { Product } from '@/types/product';
import renderSkeletonView from './ui/render-skeleton';
import EmptyProductList from './ui/empty-product-list';
import PaginationControl from './ui/pagination-control';
import { usePaginationParams } from '@/hooks/use-pagination-params';

const ITEMS_PER_PAGE = 8;

type ViewType = 'grid' | 'large' | 'list';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { selectedCategory, setSelectedCategory, priceRange, setPriceRange } =
    useFilterParams();
  const filtered = useFilteredProducts(products, selectedCategory, priceRange);

  const view = useAppSelector((state) => state.viewSelector.value);
  const dispatch = useAppDispatch();

  const { currentPage, totalPages, setPage } = usePaginationParams(
    filtered.length,
    ITEMS_PER_PAGE,
  );
  const paginatedProducts = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleViewChange = (view: ViewType) => {
    dispatch(setSelector(view));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Помилка завантаження товарів');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = getUniqueCategories(products);

  if (error) return <p className="text-red-600 font-semibold p-4">{error}</p>;

  if (isLoading) {
    return <div className="p-4">{renderSkeletonView(view)}</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col justify-center md:flex-row md:justify-between items-center">
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
        />
        <ViewSelector view={view} onChange={handleViewChange} />
      </div>

      {paginatedProducts.length === 0 ? (
        <EmptyProductList />
      ) : (
        <>
          {renderProductView(paginatedProducts, view)}
          {totalPages > 1 && (
            <PaginationControl
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </div>
  );
}
