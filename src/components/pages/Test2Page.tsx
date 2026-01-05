import {
  Category,
  CategoryList,
  Choice,
  Option,
  Product,
  ProductList
} from '@wix/stores/components';

import {
  loadCategoriesListServiceConfig,
  loadProductsListServiceConfig,
  parseUrlToSearchOptions,
  ProductsListServiceConfig
} from '@wix/stores/services';


const categoriesListConfig = await loadCategoriesListServiceConfig();

import React, { useEffect, useState } from 'react';

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
  <div style={{ minHeight: '100vh', padding: '32px' }}>
    <ProductList.Root productsListConfig={productsListConfig}>

      {/* Categories */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          Categories
        </h2>
        <CategoryList.Root categoriesListConfig={categoriesListConfig}>
          <CategoryList.Loading>Loading categories...</CategoryList.Loading>

          {/* Category.CategoryFilter - Shows selected category */}
          <Category.CategoryFilter className="mb-4" label="Filtering by:" />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <CategoryList.CategoryRepeater>
              <div className="flex items-center gap-2 p-2 border rounded">
                <Category.Trigger className="px-3 py-1 bg-primary text-primary-foreground rounded" />
                <Category.Label className="text-sm" />
                <Category.ID className="sr-only" />

                {/* Category.Raw - Access full category data with asChild */}
                <Category.Raw asChild>
                  {React.forwardRef<HTMLSpanElement, { category: any; isSelected: boolean }>(
                    ({ category, isSelected, ...props }, ref) => (
                      <span
                        ref={ref}
                        {...props}
                        data-slug={category.slug}
                        data-selected={isSelected}
                        className="text-xs text-secondary-foreground"
                      >
                        ({category.slug})
                      </span>
                    )
                  )}
                </Category.Raw>
              </div>
            </CategoryList.CategoryRepeater>
          </div>
        </CategoryList.Root>
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

                {/* Variants - Size, Color choices */}
                <Product.Variants>
                  <Product.VariantOptions>
                    <div className="mb-3 space-y-2">
                      <Product.VariantOptionRepeater>
                        <div className="space-y-2">
                          <Option.Name className="text-lg font-medium" />
                          <Option.Choices>
                            <div className="flex flex-wrap gap-2">
                              <Option.ChoiceRepeater>
                                <>
                                  <Choice.Color className="w-10 h-10 rounded-full border-4" />
                                  <Choice.Text className="px-4 py-2 border rounded-lg" />
                                </>
                              </Option.ChoiceRepeater>
                            </div>
                          </Option.Choices>
                        </div>
                      </Product.VariantOptionRepeater>
                    </div>
                  </Product.VariantOptions>
                </Product.Variants>

                {/* Modifiers - Custom text inputs, mandatory fields */}
                <Product.Modifiers>
                  <Product.ModifierOptions>
                    <div className="mb-3 space-y-2">
                      <Product.ModifierOptionRepeater>
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Option.Name className="text-lg font-medium" />
                            <Option.MandatoryIndicator className="text-red-500" />
                          </div>
                          <Option.Choices>
                            <div className="flex flex-wrap gap-2">
                              <Option.ChoiceRepeater>
                                <>
                                  <Choice.Color className="w-10 h-10 rounded-full border-4" />
                                  <Choice.Text className="px-4 py-2 border rounded-lg" />
                                  <Choice.FreeText className="p-2 border rounded-lg w-full" placeholder="Enter custom text..." />
                                </>
                              </Option.ChoiceRepeater>
                            </div>
                          </Option.Choices>
                        </div>
                      </Product.ModifierOptionRepeater>
                    </div>
                  </Product.ModifierOptions>
                </Product.Modifiers>

              </div>
            </ProductList.ProductRepeater>
          </div>
        </ProductList.Products>
      </div>

    </ProductList.Root>
  </div>
);
}
