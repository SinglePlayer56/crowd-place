import {SelectFiltersProps} from "./SelectFilters.props";
import styles from './SelectFilters.module.css';
import {CustomButton, Filter} from "@/components";
import cn from 'classnames';

const SelectFilters = ({filters, className}: SelectFiltersProps) => {

  return (
    <div className={cn(styles.filtersWrapper, className)}>
        {filters.map((filter) => (
            <Filter
                options={filter.options}
                placeholder={filter.placeholder}
            />
        ))}
        <CustomButton className={styles.filters__button} color={'blue'} text={'View'} />
    </div>
  );
};

export default SelectFilters;
