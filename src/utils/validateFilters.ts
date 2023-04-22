type TKey = 'status' | 'email';

const validFilters = ['status', 'email'];

const validateFilters = (filtersKeys: TKey[]) => {
  for (const filter of filtersKeys) {
    if (!validFilters.includes(filter)) {
      throw new Error(
        `Invalid filter: ${filter}. Valid filters are: ${validFilters.join(
          ', '
        )}`
      );
    }
  }
};

export default validateFilters;
