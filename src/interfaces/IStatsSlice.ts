export default interface IOrderSlice {
  statistics: {
    orders: {
      total: 0 | null;
      active: 0 | null;
      percentage: {
        total: {
          lastWeek: 0 | null;
          lastMonth: 0 | null;
        };
        active: {
          lastWeek: 0 | null;
          lastMonth: 0 | null;
        };
      };
    };
    users: {
      total: 0 | null;
      percentage: {
        lastWeek: 0 | null;
        lastMonth: 0 | null;
      };
    };
    charts: [] | null;
  };
}
