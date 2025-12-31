import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Product, ProductName, ProductPrice, ProductDescription } from '@/components/ui/store/Product';
import { ProductVariants, ProductVariantOptions, ProductVariantOptionRepeater } from '@/components/ui/store/Product';
import { OptionName, OptionChoices, OptionChoiceRepeater } from '@/components/ui/store/Option';
import { Choice, ChoiceText, ChoiceColor } from '@/components/ui/store/Choice';
import { loadProductServiceConfig, ProductService } from '@wix/stores/services';

export default function TestProductPage() {
  const [productData, setProductData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadProduct = async () => {
      try {
        // Load the first product from the store
        const config = await loadProductServiceConfig();
        const service = new ProductService(config);
        const products = await service.getProducts({ limit: 1 });
        
        if (products && products.length > 0) {
          setProductData(products[0]);
        }
      } catch (error) {
        console.error('Failed to load product:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary py-12 px-4 md:px-8">
      <div className="max-w-[120rem] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:text-primary-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl uppercase mb-8">Test Product Component</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Live Product Component Example */}
          <div className="bg-white border-2 border-primary p-8 rounded-lg">
            <h2 className="font-heading text-2xl uppercase mb-6">Product Component Example</h2>
            
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <p className="font-paragraph text-sm text-primary/60">Loading product data...</p>
              </div>
            ) : productData ? (
              <Product product={productData}>
                <div className="space-y-6">
                  {/* Product Name */}
                  <div>
                    <ProductName className="font-heading text-2xl uppercase text-primary" />
                  </div>

                  {/* Product Price */}
                  <div className="flex items-baseline gap-2">
                    <ProductPrice className="font-heading text-3xl text-primary" />
                  </div>

                  {/* Product Description */}
                  <div>
                    <ProductDescription className="font-paragraph text-sm text-primary/80 line-clamp-3" />
                  </div>

                  {/* Product Variants */}
                  <ProductVariants>
                    <ProductVariantOptions>
                      <ProductVariantOptionRepeater>
                        <div className="space-y-3 mb-4 border-t border-primary/20 pt-4">
                          <OptionName className="font-heading text-sm uppercase text-primary" />
                          <OptionChoices>
                            <div className="flex flex-wrap gap-2">
                              <OptionChoiceRepeater>
                                <Choice>
                                  <ChoiceColor className="w-8 h-8 border-2" />
                                  <ChoiceText className="text-xs px-2 py-1" />
                                </Choice>
                              </OptionChoiceRepeater>
                            </div>
                          </OptionChoices>
                        </div>
                      </ProductVariantOptionRepeater>
                    </ProductVariantOptions>
                  </ProductVariants>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-3 font-heading uppercase mt-6">
                    Add to Cart
                  </Button>
                </div>
              </Product>
            ) : (
              <div className="flex items-center justify-center h-96">
                <p className="font-paragraph text-sm text-primary/60">No product data available</p>
              </div>
            )}
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-2xl uppercase mb-4">Product Component Features</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li>Display product name and description</li>
                <li>Show product images and media gallery</li>
                <li>Display pricing information</li>
                <li>Handle product variants (size, color, etc.)</li>
                <li>Manage product quantity selection</li>
                <li>Add to cart functionality</li>
                <li>Display stock status</li>
                <li>Show product ratings and reviews</li>
                <li>Handle product modifiers and options</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Product Sub-Components:</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li><strong>ProductName:</strong> Displays product title</li>
                <li><strong>ProductPrice:</strong> Shows current price</li>
                <li><strong>ProductDescription:</strong> Product details</li>
                <li><strong>ProductVariants:</strong> Size, color options</li>
                <li><strong>ProductActionAddToCart:</strong> Add to cart button</li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Example Structure:</h3>
              <pre className="font-mono text-xs overflow-x-auto">
{`<Product product={productData}>
  <ProductName />
  <ProductPrice />
  <ProductDescription />
  <ProductVariants>
    <ProductVariantOptions>
      <ProductVariantOptionRepeater>
        <Option>
          <OptionName />
          <OptionChoices>
            <OptionChoiceRepeater>
              <Choice>
                <ChoiceText />
              </Choice>
            </OptionChoiceRepeater>
          </OptionChoices>
        </Option>
      </ProductVariantOptionRepeater>
    </ProductVariantOptions>
  </ProductVariants>
</Product>`}
              </pre>
            </div>
          </div>
        </div>

        <Link to="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-3 font-heading uppercase">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
