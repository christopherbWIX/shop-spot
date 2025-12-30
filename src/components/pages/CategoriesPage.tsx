import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCategories } from '@/components/ui/store/Filter';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function CategoriesPage() {
  const { categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 px-8 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary-foreground/10 rotate-12" />
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-primary-foreground/5 -rotate-6" />
        
        <div className="relative max-w-[120rem] mx-auto">
          <div className="font-paragraph text-xs text-primary-foreground/80 uppercase tracking-widest mb-4">
            Browse Collections
          </div>
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl uppercase text-primary-foreground leading-none tracking-tight">
            PRODUCT
            <br />
            CATEGORIES
          </h1>
          <p className="font-paragraph text-base text-primary-foreground/80 mt-6 max-w-2xl">
            Explore our carefully curated collections organized by category. 
            Find exactly what you need with our intuitive category system.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-8">
        <div className="max-w-[120rem] mx-auto">
          {categories && categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link
                  key={category.id || index}
                  to={`/store/${category.slug}`}
                  className="group relative bg-secondary hover:bg-primary transition-all duration-300 overflow-hidden"
                >
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-abstractshape/20 group-hover:bg-primary-foreground/10 transition-colors duration-300 rotate-45 translate-x-16 -translate-y-16" />
                  
                  <div className="relative p-8 min-h-[280px] flex flex-col justify-between">
                    <div>
                      <div className="font-paragraph text-xs text-foreground group-hover:text-primary-foreground/80 uppercase tracking-widest mb-3 transition-colors duration-300">
                        Category {String(index + 1).padStart(2, '0')}
                      </div>
                      <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary group-hover:text-primary-foreground leading-tight transition-colors duration-300">
                        {category.name}
                      </h2>
                      {category.description && (
                        <p className="font-paragraph text-sm text-foreground/70 group-hover:text-primary-foreground/70 mt-4 line-clamp-3 transition-colors duration-300">
                          {category.description}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 font-paragraph text-sm uppercase tracking-wider text-primary group-hover:text-primary-foreground mt-6 transition-colors duration-300">
                      View Products
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-paragraph text-base text-foreground/60">
                No categories available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary py-16 px-8">
        <div className="max-w-[120rem] mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-primary mb-6">
            BROWSE ALL PRODUCTS
          </h2>
          <p className="font-paragraph text-base text-foreground/70 mb-8 max-w-2xl mx-auto">
            Not sure which category to explore? View our complete product catalog.
          </p>
          <Link to="/store">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading uppercase tracking-wide px-8 py-4 transition-colors duration-300 inline-flex items-center gap-2">
              View All Products
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
