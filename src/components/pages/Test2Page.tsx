import { Product, ProductList } from '@wix/stores/components';
import { loadProductsListServiceConfig } from '@wix/stores/services';

// Load config (in useEffect, server component, or loader)
const productsListConfig = await loadProductsListServiceConfig(window.location.href);

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background">
      // Render
      <ProductList.Root productsListConfig={productsListConfig}>
        <ProductList.Products>
          <ProductList.ProductRepeater>
            <Product.Name />
            <Product.Price />
          </ProductList.ProductRepeater>
        </ProductList.Products>
      </ProductList.Root>
    </div>
  );
}
