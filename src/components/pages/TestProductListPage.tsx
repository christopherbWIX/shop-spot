import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import {
  ProductList,
  ProductRepeater,
  Products,
  ProductName,
  ProductPrice,
} from '@wix/stores/components';
import { loadProductsListServiceConfig } from '@wix/stores/services';

export default function TestProductListPage() {
  const [productsConfig, setProductsConfig] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadConfig = async () => {
      try {
        const config = await loadProductsListServiceConfig();
        setProductsConfig(config);
      } catch (error) {
        console.error('Failed to load products config:', error);
      } finally {
        setLoading(false);
      }
    };
    loadConfig();
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary py-12 px-4 md:px-8">
      <div className="max-w-[120rem] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:text-primary-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl uppercase mb-8">Test Product List Component</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Live Product List Component Example */}
          <div className="lg:col-span-2 bg-white border-2 border-primary p-8 rounded-lg">
            <h2 className="font-heading text-2xl uppercase mb-6">Product List Example</h2>
            
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <p className="font-paragraph text-sm text-primary/60">Loading products...</p>
              </div>
            ) : productsConfig ? (
              <ProductList productsListConfig={productsConfig} variant="grid">
                <div className="space-y-6">
                  <Products>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <ProductRepeater>
                        <div className="border border-primary/20 p-4 rounded hover:shadow-lg transition-shadow">
                          <div className="aspect-square bg-background/50 rounded mb-4 flex items-center justify-center">
                            <p className="font-paragraph text-xs text-primary/60">Product Image</p>
                          </div>
                          <div className="space-y-2">
                            <ProductName className="font-heading text-sm uppercase text-primary line-clamp-2" />
                            <ProductPrice className="font-heading text-lg text-primary" />
                            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-2 font-heading text-xs uppercase">
                              View Product
                            </Button>
                          </div>
                        </div>
                      </ProductRepeater>
                    </div>
                  </Products>
                </div>
              </ProductList>
            ) : (
              <div className="flex items-center justify-center h-96">
                <p className="font-paragraph text-sm text-primary/60">No products available</p>
              </div>
            )}
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-2xl uppercase mb-4">Product List Features</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li>Display multiple products in grid or list layout</li>
                <li>Support for product filtering by category, price, etc.</li>
                <li>Sorting options (price, popularity, newest, etc.)</li>
                <li>Pagination or infinite scroll</li>
                <li>Product images and quick view</li>
                <li>Price display and comparison</li>
                <li>Product badges and ribbons</li>
                <li>Responsive grid layouts</li>
                <li>Search functionality</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Common Use Cases:</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li>Product catalog/shop pages</li>
                <li>Category product listings</li>
                <li>Search results pages</li>
                <li>Featured products sections</li>
                <li>Product recommendations</li>
                <li>Collection pages</li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Example Structure:</h3>
              <pre className="font-mono text-xs overflow-x-auto">
{`<ProductList 
  productsListConfig={config}
>
  <Products>
    <div className="grid">
      <ProductRepeater>
        <div>
          <ProductName />
          <ProductPrice />
        </div>
      </ProductRepeater>
    </div>
  </Products>
</ProductList>`}
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
