import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Category } from '@wix/stores/components';
import { loadCategoriesListServiceConfig } from '@wix/stores/services';

export default function TestCategoryPage() {
  const [categoryConfig, setCategoryConfig] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadConfig = async () => {
      try {
        const config = await loadCategoriesListServiceConfig();
        setCategoryConfig(config);
      } catch (error) {
        console.error('Failed to load category config:', error);
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

        <h1 className="font-heading text-5xl md:text-6xl uppercase mb-8">Test Category Component</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Live Category Component Example */}
          <div className="bg-white border-2 border-primary p-8 rounded-lg">
            <h2 className="font-heading text-2xl uppercase mb-6">Category Component Example</h2>
            
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <p className="font-paragraph text-sm text-primary/60">Loading category data...</p>
              </div>
            ) : categoryConfig ? (
              <div className="space-y-4">
                <Category.Root categoryData={categoryConfig}>
                  <div className="border border-primary/20 p-6 bg-background/50 rounded">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-heading text-lg uppercase mb-2">Category Name:</h3>
                        <Category.Label className="font-paragraph text-base text-primary" />
                      </div>
                      
                      <div>
                        <h3 className="font-heading text-lg uppercase mb-2">Category Description:</h3>
                        <Category.Description className="font-paragraph text-sm text-primary/80" />
                      </div>

                      <div className="pt-4 border-t border-primary/20">
                        <Category.Trigger asChild>
                          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-3 font-heading uppercase">
                            View Category
                          </Button>
                        </Category.Trigger>
                      </div>
                    </div>
                  </div>
                </Category.Root>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="font-paragraph text-sm text-primary/60">No category data available</p>
              </div>
            )}
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-2xl uppercase mb-4">Category Component Features</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li>Display category name and label</li>
                <li>Show category description</li>
                <li>Handle category selection and navigation</li>
                <li>Display product count for the category</li>
                <li>Support for category triggers/actions</li>
                <li>Category metadata and SEO information</li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Example Structure:</h3>
              <pre className="font-mono text-xs overflow-x-auto">
{`<Category.Root categoryData={data}>
  <Category.Label />
  <Category.Description />
  <Category.Trigger asChild>
    <Button>View Category</Button>
  </Category.Trigger>
</Category.Root>`}
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
