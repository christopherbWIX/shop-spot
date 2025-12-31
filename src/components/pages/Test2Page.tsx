
import { Category, CategoryList } from '@wix/stores/components';
import { loadCategoriesListServiceConfig } from '@wix/stores/services';

// Load categories data during SSR
const categoriesListConfig = await loadCategoriesListServiceConfig();

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background">
      // Render
   <CategoryList.Root categoriesListConfig={categoriesListConfig}>
      <CategoryList.Loading>Loading...</CategoryList.Loading>
      <CategoryList.CategoryRepeater>
        <Category.Label />
      </CategoryList.CategoryRepeater>
    </CategoryList.Root>
    </div>
  );
}
