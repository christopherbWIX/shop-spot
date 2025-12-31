import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function TestProductListPage() {
  // Mock products for demonstration
  const mockProducts = [
    { id: 1, name: 'Modular Pack', price: '$120.00', tag: 'Best Seller' },
    { id: 2, name: 'Analog Watch', price: '$250.00', tag: 'New' },
    { id: 3, name: 'Desk Mat', price: '$45.00', tag: 'Essential' },
    { id: 4, name: 'Type Specimen', price: '$30.00', tag: 'Print' },
  ];

  return (
    <div className="min-h-screen bg-background text-primary py-12 px-4 md:px-8">
      <div className="max-w-[120rem] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:text-primary-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl uppercase mb-8">Test Product List Component</h1>
        
        <div className="bg-white border-2 border-primary p-8 rounded-lg mb-8">
          <h2 className="font-heading text-2xl uppercase mb-4">Product List Example</h2>
          <p className="font-paragraph text-sm mb-6 text-primary/80">
            This page demonstrates the ProductList headless component from @wix/stores/components.
            The ProductList component is used to display multiple products with filtering, sorting, and pagination.
          </p>

          {/* Product Grid Example */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {mockProducts.map((product) => (
              <div key={product.id} className="border border-primary/20 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-background/50 flex items-center justify-center relative">
                  <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 font-bold">
                    {product.tag}
                  </span>
                  <Image src="https://static.wixstatic.com/media/45a11d_6080b9207e354418b0b6b309d815360c~mv2.png?originWidth=384&originHeight=448" alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 border-t border-primary/20">
                  <h3 className="font-heading text-sm uppercase mb-2">{product.name}</h3>
                  <p className="font-paragraph text-sm font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="border border-primary/20 p-6 bg-background/50">
              <h3 className="font-heading text-lg uppercase mb-2">Product List Component Features:</h3>
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

            <div className="border border-primary/20 p-6 bg-background/50">
              <h3 className="font-heading text-lg uppercase mb-2">Common Use Cases:</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li>Product catalog/shop pages</li>
                <li>Category product listings</li>
                <li>Search results pages</li>
                <li>Featured products sections</li>
                <li>Product recommendations</li>
                <li>Collection pages</li>
              </ul>
            </div>

            <div className="border border-primary/20 p-6 bg-primary text-primary-foreground">
              <h3 className="font-heading text-lg uppercase mb-2">Example Structure:</h3>
              <pre className="font-mono text-xs overflow-x-auto">
{`<ProductList productsListConfig={config}>
  <Products className="grid grid-cols-4 gap-4">
    <ProductRepeater>
      <Product>
        <ProductMediaGallery />
        <ProductName />
        <ProductPrice />
      </Product>
    </ProductRepeater>
  </Products>
  <LoadMoreTrigger />
  <Pagination />
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
