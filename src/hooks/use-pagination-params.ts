import { useSearchParams, useRouter } from 'next/navigation';

export function usePaginationParams(
  totalItems: number,
  itemsPerPage: number = 8,
) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.replace(`?${params.toString()}`);
  };

  return { currentPage, totalPages, setPage };
}
