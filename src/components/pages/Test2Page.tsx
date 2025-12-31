
import { CategoryList } from '@wix/stores/components';
import { loadCategoriesListServiceConfig } from '@wix/stores/services';

// Load categories data during SSR
const categoriesListConfig = await loadCategoriesListServiceConfig();

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background">
      // Render
<CategoryList.Root categoriesListConfig={categoriesListConfig}>

</CategoryList.Root>
    </div>
  );
}
