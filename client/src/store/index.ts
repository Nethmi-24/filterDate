import { configureStore } from "@reduxjs/toolkit";
import userSlice, { UserState } from "./user-slice";
import taskSlice,{TaskState} from "./task-slice";
import filterSlice ,{ FilterState } from "./filter-slice";
export interface RootState {
  user: UserState;
  task:TaskState;
  filter:FilterState
}
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    task:taskSlice.reducer,
    filter:filterSlice
  },
});
export default store;










