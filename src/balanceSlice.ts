import { createSlice } from "@reduxjs/toolkit";
type objectProps = {
  title: string;
  id: number;
  price: number;
};
type stateProps = {
  incomeList: Array<objectProps>;
  expenseList: Array<objectProps>;
};
export type reducerProps = {
  balance: stateProps;
};
const initialState: stateProps = {
  incomeList: [],
  expenseList: [],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    addIncome(state, action) {
      //income obj
      state.incomeList = [...state.incomeList, action.payload];
    },
    deleteIncome(state, action) {
      //id
      state.incomeList = state.incomeList.filter((e) => {
        return e.id !== action.payload;
      });
    },
    clearIncome(state) {
      state.incomeList = [];
    },
    addExpense(state, action) {
      //Expense obj
      state.expenseList = [...state.expenseList, action.payload];
    },
    deleteExpense(state, action) {
      //id
      state.expenseList = state.expenseList.filter((el) => {
        return el.id !== action.payload;
      });
    },
    clearExpense(state) {
      state.expenseList = [];
    },
  },
});
export default balanceSlice.reducer;
export const {
  addIncome,
  deleteIncome,
  clearIncome,
  addExpense,
  deleteExpense,
  clearExpense,
} = balanceSlice.actions;
export const getTotalIncome = (state: reducerProps) => {
  return state.balance.incomeList.length !== 0
    ? state.balance.incomeList.reduce(
        (sum, item) => sum + Number(item.price),
        0,
      )
    : 0;
};
export const getTotalExpense = (state: reducerProps) => {
  return state.balance.expenseList.length !== 0
    ? state.balance.expenseList.reduce(
        (sum, item) => sum + Number(item.price),
        0,
      )
    : 0;
};
