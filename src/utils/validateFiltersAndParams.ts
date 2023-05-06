type TKey = string | number;

const validFilters = ['status', 'email', 'price', 'orderId'];
const validParams = ['limit', 'offset', 'orderBy', 'orderDirection'];
const validateFiltersAndParams = (filtersKeys: TKey[]) => {
  for (const filter of filtersKeys) {
    if (
      !validFilters.includes(filter.toString()) &&
      !validParams.includes(filter.toString())
    ) {
      throw new Error(
        `Invalid filter: ${filter}. Valid filters are: ${validFilters.join(
          ', '
        )}`
      );
    }
  }
};

export default validateFiltersAndParams;
