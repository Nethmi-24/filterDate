const FILTER_BY_DATE = 'FILTER_BY_DATE';

export const filterByDate = (startDate: Date, endDate: Date) => {
  return {
    type: FILTER_BY_DATE,
    payload: { startDate, endDate },
  };
};
