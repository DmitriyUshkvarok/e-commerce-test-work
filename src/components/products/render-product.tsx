import { Product } from '@/types/product';
import ProductGrid from './product-grid';
import ProductLargeGrid from './product-large-grid';
import ProductListView from './product-list-view';


type ViewType = 'grid' | 'large' | 'list';

export default function renderProductView(products: Product[], view: ViewType) {
  switch (view) {
    case 'large':
      return <ProductLargeGrid products={products} />;
    case 'list':
      return <ProductListView products={products} />;
    case 'grid':
    default:
      return <ProductGrid products={products} />;
  }
}
