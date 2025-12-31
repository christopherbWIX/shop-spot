
import { loadCategoriesListServiceConfig } from '@wix/stores/services';
import { CategoryList } from '@wix/stores/components/react';

// Load categories data during SSR
const categoriesConfig = await loadCategoriesListServiceConfig();


<CategoryList.Root categoriesConfig={categoriesConfig}>
  <CategoryList.ItemContent>
    {({ category }) => (
      <div>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
      </div>
    )}
  </CategoryList.ItemContent>
</CategoryList.Root>
