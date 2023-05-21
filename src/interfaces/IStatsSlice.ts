export default interface IOrderSlice {
  statistics: {
    orders: {
      total: number | null;
      active: number | null;
      percentage: {
        total: {
          lastWeek: number | null;
          lastMonth: number | null;
        };
        active: {
          lastWeek: number | null;
          lastMonth: number | null;
        };
      };
    };
    users: {
      total: number | null;
      percentage: {
        lastWeek: number | null;
        lastMonth: number | null;
      };
    };
    charts: [] | null;
    pageViews: number | null;
  };
}
