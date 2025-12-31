import { Label } from '@/components/ui/label';
import { Category, CategoryList } from '@wix/stores/components';
import type { CategoriesListServiceConfig } from '@wix/stores/services';

interface CategoryPickerProps {
  categoriesListConfig: CategoriesListServiceConfig;
}

export function CategoryPicker({ categoriesListConfig }: CategoryPickerProps) {
  return (
<div>
    <CategoryList.Root categoriesListConfig={categoriesListConfig}>
      <div>
        <div className="flex items-center justify-between mb-3">
          <Label className="text-foreground font-semibold text-sm uppercase tracking-wide">
            Shop by Category
          </Label>
        </div>

        {/* Category Navigation - Horizontal scrollable for mobile */}
        <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide pl-2">
          <CategoryList.CategoryRepeater>
            <Category.Trigger>
            </Category.Trigger>
          </CategoryList.CategoryRepeater>
        </div>
      </div>
    </CategoryList.Root>

    </div>
  );
}

export default CategoryPicker;
