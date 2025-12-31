import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Product, ProductName, ProductPrice, ProductDescription } from '@/components/ui/store/Product';
import { Image } from '@/components/ui/image';

export default function TestProductPage() {
  // Mock product data for demonstration
  const mockProduct = {
    _id: 'test-product-1',
    name: 'Premium Desk Lamp',
    description: 'A sleek and modern desk lamp with adjustable brightness and color temperature.',
    price: 89.99,
    image: 'https://static.wixstatic.com/media/45a11d_6080b9207e354418b0b6b309d815360c~mv2.png?originWidth=384&originHeight=448',
  };

  return (
    <div className="min-h-screen bg-background text-primary py-12 px-4 md:px-8">
      <div className="max-w-[120rem] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:text-primary-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl uppercase mb-8">Test Product Component</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Product Example */}
          <div className="bg-white border-2 border-primary p-8 rounded-lg">
            <h2 className="font-heading text-2xl uppercase mb-4">Product Component Example</h2>
            
            <div className="space-y-6">
              <div className="aspect-square bg-background/50 border border-primary/20 rounded flex items-center justify-center">
                <Image src={mockProduct.image} alt={mockProduct.name} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-3xl uppercase">{mockProduct.name}</h3>
                <p className="font-heading text-2xl text-primary">${mockProduct.price}</p>
                <p className="font-paragraph text-sm text-primary/80">{mockProduct.description}</p>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-3 font-heading uppercase">
                Add to Cart
              </Button>
            </div>
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

            <div className="bg-primary text-primary-foreground border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Example Structure:</h3>
              <pre className="font-mono text-xs overflow-x-auto">
{`<Product product={productData}>
  <ProductMediaGallery />
  <ProductName />
  <ProductPrice />
  <ProductDescription />
  <ProductVariants>
    <Option>
      <OptionName />
      <OptionChoices>
        <Choice>
          <ChoiceText />
        </Choice>
      </OptionChoices>
    </Option>
  </ProductVariants>
  <ProductActionAddToCart />
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
