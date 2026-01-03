import { Product, ProductList } from '@wix/stores/components';

import {
  loadProductsListServiceConfig,
  parseUrlToSearchOptions,
  ProductsListServiceConfig
} from '@wix/stores/services';

import { loadCategoriesListServiceConfig } from '@wix/stores/services';
const categoriesConfig = await loadCategoriesListServiceConfig();
import { CategoryList } from "@wix/headless-stores/react";

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
      </ProductList.Root>
    </div>
  );
}
