import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TestCategoryListPage() {
  return (
    <div className="min-h-screen bg-background text-primary py-12 px-4 md:px-8">
      <div className="max-w-[120rem] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:text-primary-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl uppercase mb-8">Test Category List Component</h1>
        
        <div className="bg-white border-2 border-primary p-8 rounded-lg mb-8">
          <h2 className="font-heading text-2xl uppercase mb-4">Category List Example</h2>
          <p className="font-paragraph text-sm mb-6 text-primary/80">
            This page demonstrates the CategoryList headless component from @wix/stores/components.
            The CategoryList component is used to display multiple categories with filtering, sorting, and pagination capabilities.
          </p>

          <div className="space-y-4">
            <div className="border border-primary/20 p-6 bg-background/50">
              <h3 className="font-heading text-lg uppercase mb-2">Category List Component Features:</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li>Display multiple categories in a grid or list layout</li>
                <li>Support for category filtering and search</li>
                <li>Sorting options (alphabetical, by product count, etc.)</li>
                <li>Pagination for large category lists</li>
                <li>Category images and metadata display</li>
                <li>Responsive grid layouts</li>
                <li>Category count and statistics</li>
              </ul>
            </div>

            <div className="border border-primary/20 p-6 bg-background/50">
              <h3 className="font-heading text-lg uppercase mb-2">Common Use Cases:</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li>Category browse/shop pages</li>
                <li>Category navigation sidebars</li>
                <li>Category directory pages</li>
                <li>Multi-level category hierarchies</li>
                <li>Category filtering in product discovery</li>
              </ul>
            </div>

            <div className="border border-primary/20 p-6 bg-primary text-primary-foreground">
              <h3 className="font-heading text-lg uppercase mb-2">Example Structure:</h3>
              <pre className="font-mono text-xs overflow-x-auto">
{`<CategoryList categoryListConfig={config}>
  <Categories className="grid grid-cols-3 gap-4">
    <CategoryRepeater>
      <Category>
        <CategoryName />
        <CategoryImage />
        <CategoryProductCount />
      </Category>
    </CategoryRepeater>
  </Categories>
  <Pagination />
</CategoryList>`}
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
