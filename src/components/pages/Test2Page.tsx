
import { loadCategoriesListServiceConfig } from '@wix/stores/services';
import { CategoryList } from '@wix/stores/components';

// Load categories data during SSR
const categoriesConfig = await loadCategoriesListServiceConfig();

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background">
      // Render
<CategoryList.Root categoriesConfig={categoriesConfig}>

</CategoryList.Root>
    </div>
  );
}
