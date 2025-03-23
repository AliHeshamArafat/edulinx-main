import FilterSelect from "./filterSelect";
import FilterSelectSkeleton from "@/components/skeletons/filterSelectSkeleton";
import SelectedFilters from "./selectedFilters";

interface FiltersContainerProps {
  filters: Record<
    string,
    {
      label: string;
      placeholder: string;
      options: { value: string; label: string }[];
      isLoading: boolean;
    }
  >;
  values: Record<string, string>;
  onChange: (key: string) => (value: string) => void;
  isFiltersLoading?: boolean;
}

export default function FiltersContainer({ filters, values, onChange, isFiltersLoading }: FiltersContainerProps) {
  const handleRemoveFilter = (key: string) => {
    onChange(key)("");
  };

  if (isFiltersLoading) {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-6">
          {[...Array(4)].map((_, index) => (
            <FilterSelectSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-6">
        {Object.entries(filters).map(([key, filter]) => (
          <FilterSelect
            key={key}
            label={filter.label}
            placeholder={filter.placeholder}
            options={filter.options}
            value={values[key]}
            onChange={onChange(key)}
          />
        ))}
      </div>
      
      <SelectedFilters
        filters={filters}
        values={values}
        onRemove={handleRemoveFilter}
      />
    </div>
  );
}
