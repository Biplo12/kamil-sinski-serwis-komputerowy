const validateFiltersAndParams = (filtersKeys: (string | number)[]): void => {
  const validFilters = ['status', 'email', 'price', 'orderId'];
  const validParams = ['limit', 'offset', 'orderBy', 'orderDirection'];
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

  return;
};

export default validateFiltersAndParams;
