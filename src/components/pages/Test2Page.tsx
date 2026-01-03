import { Product, ProductList } from '@wix/stores/components';
import { loadProductsListServiceConfig } from '@wix/stores/services';

// Load config (in useEffect, server component, or loader)
const productsListConfig = await loadProductsListServiceConfig(window.location.href);



// Step 3: Parse URL with YOUR defaults
const parsedSearchOptions = await parseUrlToSearchOptions(
  request.url,                           // the URL to parse
  categoriesListConfig.categories,       // categories list
  customizations,                        // customizations
  {                                      // 👈 YOUR DEFAULTS
    cursorPaging: { limit: 20 },
    filter: {
      'allCategoriesInfo.categories': {
        $matchItems: [{ _id: selectedCategory._id! }],
      },
    },
  }
);


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
