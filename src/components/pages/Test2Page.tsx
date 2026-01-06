// When using this file as a reference for code examples do not include any classNames or styling!

import {
  Category,
  CategoryList,
  Choice,
  Option,
  Product,
  ProductList
} from '@wix/stores/components';

import { MediaGallery } from '@wix/headless-media/react';

import {
  loadCategoriesListServiceConfig,
  loadProductsListServiceConfig,
  parseUrlToSearchOptions,
  ProductsListServiceConfig
} from '@wix/stores/services';


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
  <div style={{ minHeight: '100vh', padding: '32px' }}>
    <ProductList.Root productsListConfig={productsListConfig}>

      {/* ProductList.Error - Shows error if any */}
      <ProductList.Error className="text-destructive mb-4" />

      {/* ProductList.TotalsDisplayed - Shows count of displayed products */}
      <div className="mb-4 text-secondary-foreground">
        Showing <ProductList.TotalsDisplayed className="font-bold" /> products
      </div>

      {/* ProductList.Sort - Sorting dropdown */}
      <div className="mb-4">
        <ProductList.Sort className="p-2 border rounded" />
      </div>

      {/* ProductList.Filter.Root - Filter container */}
      <ProductList.Filter.Root className="mb-4 p-4 border rounded">
        <div className="text-sm text-secondary-foreground">Filters will appear here when configured</div>
      </ProductList.Filter.Root>

      {/* ProductList.FilterResetTrigger - Reset all filters. Only visible if filters are applied */}
      <ProductList.FilterResetTrigger
        className="mb-4 px-4 py-2 bg-secondary text-secondary-foreground rounded"
        label="Clear All Filters"
      />

      {/* ProductList.Raw - Access raw list data */}
      <ProductList.Raw>
        {({ totalProducts, displayedProducts, isFiltered }) => (
          <div className="mb-4 p-2 bg-secondary rounded text-sm">
            Raw: {displayedProducts}/{totalProducts} products {isFiltered && '(filtered)'}
          </div>
        )}
      </ProductList.Raw>

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
                <Category.ID className="text-sm" />

                {/* Category.Raw - Default renders hidden JSON, visible here for testing */}
                <Category.Raw className="text-xs text-secondary-foreground" />
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
                {/* Product.MediaGallery - Product image gallery */}
                <Product.MediaGallery
                  infinite={true}
                  autoPlay={{ direction: 'forward', intervalMs: 5000 }}
                >
                  {/* MediaGallery.Viewport - Main image display */}
                  <MediaGallery.Viewport className="w-full aspect-square rounded-lg mb-2" />

                  {/* Navigation buttons */}
                  <div className="flex justify-between mb-2">
                    {/* MediaGallery.Previous - Previous image button */}
                    <MediaGallery.Previous className="px-3 py-1 bg-secondary rounded">←</MediaGallery.Previous>
                    {/* MediaGallery.Next - Next image button */}
                    <MediaGallery.Next className="px-3 py-1 bg-secondary rounded">→</MediaGallery.Next>
                  </div>

                  {/* MediaGallery.Thumbnails - Thumbnail container */}
                  <MediaGallery.Thumbnails>
                    {/* MediaGallery.ThumbnailRepeater - Iterates over media items */}
                    <MediaGallery.ThumbnailRepeater>
                      {/* MediaGallery.ThumbnailItem - Individual thumbnail */}
                      <MediaGallery.ThumbnailItem className="w-16 h-16 rounded border-2 cursor-pointer" />
                    </MediaGallery.ThumbnailRepeater>
                  </MediaGallery.Thumbnails>
                </Product.MediaGallery>

                {/* Product.Ribbon - Shows ribbon badge (e.g., "Sale", "New"). Only renders if ribbon exists */}
                <Product.Ribbon className="inline-block px-2 py-1 text-xs bg-primary text-primary-foreground rounded mb-2" />

                <Product.Name className="text-lg font-bold" />

                {/* Product.Description - Product description text */}
                <Product.Description className="text-sm text-secondary-foreground mb-2" />

                {/* Product.Slug - URL slug for the product */}
                <Product.Slug className="text-xs text-secondary-foreground" />

                <div className="flex items-center gap-2 my-2">
                  <Product.Price className="text-lg font-bold" />
                  {/* Product.CompareAtPrice - Original price when on sale. Only renders if discounted */}
                  <Product.CompareAtPrice className="text-sm text-secondary-foreground line-through" />
                </div>

                {/* Product.Stock - Product-level stock status */}
                <Product.Stock
                  className="text-sm mb-2"
                  labels={{
                    inStock: 'In Stock',
                    limitedStock: 'Limited Stock',
                    outOfStock: 'Out of Stock'
                  }}
                />

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
                                  <Choice.Color className="w-10 h-10 rounded-full border-4" />
                                  <Choice.Text className="px-4 py-2 border rounded-lg" />
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
                                  <Choice.Color className="w-10 h-10 rounded-full border-4" />
                                  <Choice.Text className="px-4 py-2 border rounded-lg" />
                                  <Choice.FreeText className="p-2 border rounded-lg w-full" placeholder="Enter custom text..." />
                              </Option.ChoiceRepeater>
                            </div>
                          </Option.Choices>
                        </div>
                      </Product.ModifierOptionRepeater>
                    </div>
                  </Product.ModifierOptions>
                </Product.Modifiers>

                {/* Product.ProductVariantSelectorReset - Reset variant selections. Only renders if selections exist */}
                <Product.ProductVariantSelectorReset
                  className="text-sm text-secondary-foreground underline mb-2"
                  label="Reset Selections"
                />

                {/* Product.ProductVariant - Selected variant details */}
                <div className="text-sm text-secondary-foreground space-y-1 mb-2">
                  {/* Product.ProductVariant.Stock - Selected variant stock status with pre-order support */}
                  <Product.ProductVariant.Stock
                    labels={{
                      inStock: 'In Stock',
                      limitedStock: 'Low Stock',
                      outOfStock: 'Out of Stock',
                      preOrder: 'Available for Pre-order'
                    }}
                  />
                  {/* Product.ProductVariant.SKU - Selected variant SKU. Only renders if SKU exists */}
                  <div>SKU: <Product.ProductVariant.SKU /></div>
                  {/* Product.ProductVariant.Weight - Selected variant weight. Only renders if weight exists */}
                  <div>Weight: <Product.ProductVariant.Weight /></div>
                </div>

                {/* Product.Quantity - Quantity selector with stock validation */}
                <div className="mb-4">
                  <span className="text-sm font-medium mr-2">Quantity:</span>
                  <Product.Quantity.Root className="inline-flex items-center border rounded">
                    <>
                      {/* Product.Quantity.Decrement - Decrease quantity button */}
                      <Product.Quantity.Decrement className="px-3 py-1 hover:bg-secondary transition-colors" />
                      {/* Product.Quantity.Input - Quantity display/input */}
                      <Product.Quantity.Input className="w-12 text-center py-1 border-x" />
                      {/* Product.Quantity.Increment - Increase quantity button */}
                      <Product.Quantity.Increment className="px-3 py-1 hover:bg-secondary transition-colors" />
                    </>
                  </Product.Quantity.Root>
                  {/* Product.Quantity.Raw - Access raw quantity data for custom messages */}
                  <Product.Quantity.Raw asChild>
                    {({ availableQuantity, inStock, isPreOrderEnabled }) => (
                      <span className="ml-2 text-xs text-secondary-foreground">
                        {!inStock && isPreOrderEnabled && availableQuantity && `Max: ${availableQuantity} (Pre-order)`}
                        {inStock && availableQuantity && availableQuantity < 10 && `Only ${availableQuantity} left!`}
                      </span>
                    )}
                  </Product.Quantity.Raw>
                </div>

                {/* Product Actions */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {/* Product.Action.AddToCart - Add to cart button. Hidden when pre-order is enabled */}
                  <Product.Action.AddToCart
                    label="Add to Cart"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded"
                    loadingState="Adding..."
                  />
                  {/* Product.Action.BuyNow - Buy now button. Hidden when out of stock or pre-order enabled */}
                  <Product.Action.BuyNow
                    label="Buy Now"
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded"
                    loadingState="Processing..."
                  />
                  {/* Product.Action.PreOrder - Pre-order button. Only renders when pre-order is enabled */}
                  <Product.Action.PreOrder
                    label="Pre-Order"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded"
                    loadingState="Processing..."
                  />
                </div>

                {/* Product.Raw - Access raw product data. Only renders with asChild */}
                <Product.Raw asChild>
                  {({ product }) => (
                    <div className="mt-2 text-xs text-secondary-foreground">
                      ID: {product._id}
                    </div>
                  )}
                </Product.Raw>

              </div>
            </ProductList.ProductRepeater>
          </div>
        </ProductList.Products>

        {/* ProductList.LoadMoreTrigger - Load more products button */}
        <ProductList.LoadMoreTrigger
          className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded"
          label="Load More Products"
          loadingState={<span>Loading...</span>}
        />
      </div>

    </ProductList.Root>
  </div>
);
}
