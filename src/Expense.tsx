import { useDispatch } from "react-redux";
import AddForm from "./AddForm";
import ExpenseContainer from "./ExpenseContainer";
import { clearExpense } from "./balanceSlice";

function Expense() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(clearExpense());
  }
  return (
    <div className="flex h-full w-[48%] flex-col rounded-md bg-red-50 shadow-xl ring-[1.3px] ring-red-900">
      <div className="relative flex w-full items-center">
        <h1 className="grow rounded-t-md border-b-2 border-red-900 bg-white py-2 text-center text-3xl font-bold leading-none">
          Expense
        </h1>
        <button
          onClick={handleClick}
          className="absolute right-0 mr-3 w-20 rounded-lg bg-red-100 text-lg ring-1 ring-red-800"
        >
          clear
        </button>
      </div>
      <ExpenseContainer></ExpenseContainer>
      <AddForm type={"expense"} />
    </div>
  );
}

export default Expense;
