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


import {
  ProductCompareAtPrice,
  ProductDescription,
  ProductMediaGallery,
  ProductName,
  ProductPrice,
  ProductSlug,
  ProductRibbon,
  ProductStock,
  ProductVariantOptionRepeater,
  ProductVariantOptions,
  ProductVariants,
  ProductVariantSelectorReset,
} from '@/components/ui/store/Product';

  return (
  <div style={{ minHeight: '100vh', padding: '32px' }}>
    <ProductList.Root productsListConfig={productsListConfig}>

      {/* Categories */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          Categories
        </h2>

          <CategoryList.Loading>Loading...</CategoryList.Loading>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <CategoryList.CategoryRepeater>
              <Category.Trigger />
            </CategoryList.CategoryRepeater>
          </div>

      </div>

      {/* Products */}
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          Products
        </h2>
        <ProductList.Products>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            <ProductList.ProductRepeater>
              <div style={{
                padding: '16px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px'
              }}>
                <Product.Name />
                <Product.Price />
                <ProductVariants>
                                          <ProductVariantOptions>
                                            <div className="mb-3 space-y-2">
                                              <ProductVariantOptionRepeater>
                                                <div className="space-y-2">
                                                  <OptionName className="text-content-secondary text-xs font-medium uppercase tracking-wide" />
                                                  <OptionChoices>
                                                    <div className="flex flex-wrap gap-1.5">
                                                      <OptionChoiceRepeater>
                                                        <>
                                                          <ChoiceColor className="w-7 h-7 border-2" />
                                                          <ChoiceText className="text-xs" />
                                                        </>
                                                      </OptionChoiceRepeater>
                                                    </div>
                                                  </OptionChoices>
                                                </div>
                                              </ProductVariantOptionRepeater>
                                            </div>
                                          </ProductVariantOptions>
                                        </ProductVariants>
              </div>
            </ProductList.ProductRepeater>
          </div>
        </ProductList.Products>
      </div>

    </ProductList.Root>
  </div>
);
}
