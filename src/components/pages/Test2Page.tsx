import { Product, ProductList } from '@wix/stores/components';

import {
  loadProductsListServiceConfig,
  parseUrlToSearchOptions,
  ProductsListServiceConfig
} from '@wix/stores/services';

import { Category, CategoryList } from "@wix/headless-stores/react";
import { loadCategoriesListServiceConfig } from '@wix/stores/services';
const categoriesListConfig = await loadCategoriesListServiceConfig();

import { useEffect, useState } from 'react';

export default function TestPage() {
  const [productsListConfig, setProductsListConfig] = useState<ProductsListServiceConfig | null>(null);

  useEffect(() => {
    async function loadConfig() {
      const { searchOptions } = await parseUrlToSearchOptions(
        window.location.href,
        [],
        [],
        { filter: {} }
      );
      const config = await loadProductsListServiceConfig({ searchOptions });
      setProductsListConfig(config);
    }

    loadConfig();
  }, []);

  if (!productsListConfig) {
    return <div className="min-h-screen bg-background">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <ProductList.Root productsListConfig={productsListConfig}>
        <ProductList.Products>
          <ProductList.ProductRepeater>
            <Product.Name />
            <Product.Price />
          </ProductList.ProductRepeater>
        </ProductList.Products>


         <CategoryList.Root categoriesListConfig={categoriesListConfig}>
      <CategoryList.Loading>Loading...</CategoryList.Loading>
      <CategoryList.CategoryRepeater>
        <Category.Label />
      </CategoryList.CategoryRepeater>
    </CategoryList.Root>

      </ProductList.Root>
    </div>
  );
}
