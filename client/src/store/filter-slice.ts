import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  userID: string | null;
  date: Date | null;
  task_description: string | null;
  task_status: boolean | null;
  startDate: Date | null;
  endDate: Date | null;
}

const initialState: FilterState[] = [];

const filterSlice = createSlice({
  name: "filterDate",
  initialState,
  reducers: {
    setFilteringByDate(state, action: PayloadAction<FilterState[]>) {
      return action.payload;
    },
    filterByDate(state, action: PayloadAction<{ startDate: Date, endDate: Date }>) {
      const { startDate, endDate } = action.payload;
      const filteredTasks = state.filter(task => {
        if (task.date) {
          const taskDate = new Date(task.date);
          const withinRange = taskDate >= startDate && taskDate <= endDate;
          return withinRange;
        }
        return false; // Handle null dates as needed
      });
      return filteredTasks;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
