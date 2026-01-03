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
  <div className="min-h-screen bg-background p-8">
    <ProductList.Root productsListConfig={productsListConfig}>

      {/* Categories Section */}
      <div className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Categories</h2>
        <CategoryList.Root categoriesListConfig={categoriesListConfig}>
          <CategoryList.Loading>Loading categories...</CategoryList.Loading>
          <div className="flex flex-wrap gap-2">
            <CategoryList.CategoryRepeater>
              <Category.Trigger asChild>
                <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Category.Label />
                </button>
              </Category.Trigger>
            </CategoryList.CategoryRepeater>
          </div>
        </CategoryList.Root>
      </div>

      {/* Products Section */}
      <div>
        <h2 className="font-heading text-2xl mb-4">Products</h2>
        <ProductList.Products>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductList.ProductRepeater>
              <div className="p-4 border border-foreground/10 rounded-lg bg-secondary">
                <Product.Name className="font-heading text-lg mb-2" />
                <Product.Price className="text-primary font-paragraph" />
              </div>
            </ProductList.ProductRepeater>
          </div>
        </ProductList.Products>
      </div>

    </ProductList.Root>
  </div>
);
}
