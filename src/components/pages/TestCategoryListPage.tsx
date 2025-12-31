import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { CategoryList, Category } from '@wix/stores/components';
import { loadCategoriesListServiceConfig } from '@wix/stores/services';

export default function TestCategoryListPage() {
  const [categoriesConfig, setCategoriesConfig] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadConfig = async () => {
      try {
        const config = await loadCategoriesListServiceConfig();
        setCategoriesConfig(config);
      } catch (error) {
        console.error('Failed to load categories config:', error);
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

        <h1 className="font-heading text-5xl md:text-6xl uppercase mb-8">Test Category List Component</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Live Category List Component Example */}
          <div className="bg-white border-2 border-primary p-8 rounded-lg">
            <h2 className="font-heading text-2xl uppercase mb-6">Category List Example</h2>
            
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <p className="font-paragraph text-sm text-primary/60">Loading categories...</p>
              </div>
            ) : categoriesConfig ? (
              <CategoryList.Root categoriesListConfig={categoriesConfig}>
                <div className="space-y-4">
                  <div className="border border-primary/20 p-6 bg-background/50 rounded">
                    <h3 className="font-heading text-lg uppercase mb-4">Available Categories:</h3>
                    <div className="flex flex-wrap gap-2">
                      <CategoryList.CategoryRepeater>
                        <Category.Trigger asChild>
                          <button className="px-4 py-2 border-2 border-primary/20 hover:border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded font-heading text-sm uppercase data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[selected=true]:border-primary">
                            <Category.Label />
                          </button>
                        </Category.Trigger>
                      </CategoryList.CategoryRepeater>
                    </div>
                  </div>
                </div>
              </CategoryList.Root>
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="font-paragraph text-sm text-primary/60">No categories available</p>
              </div>
            )}
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-2xl uppercase mb-4">Category List Features</h3>
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

            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Common Use Cases:</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li>Category browse/shop pages</li>
                <li>Category navigation sidebars</li>
                <li>Category directory pages</li>
                <li>Multi-level category hierarchies</li>
                <li>Category filtering in product discovery</li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Example Structure:</h3>
              <pre className="font-mono text-xs overflow-x-auto">
{`<CategoryList.Root 
  categoriesListConfig={config}
>
  <CategoryList.CategoryRepeater>
    <Category.Trigger asChild>
      <button>
        <Category.Label />
      </button>
    </Category.Trigger>
  </CategoryList.CategoryRepeater>
</CategoryList.Root>`}
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
