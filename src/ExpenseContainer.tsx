import { useDispatch, useSelector } from "react-redux";
import { deleteExpense, reducerProps } from "./balanceSlice";

type expenseDivProps = {
  title: string;
  price: number;
  id: number;
};

function ExpenseContainer() {
  const ExpenseList = useSelector(
    (state: reducerProps) => state.balance.expenseList,
  );
  return (
    <div className="m-1 grow overflow-y-scroll rounded-md border-solid border-red-700 bg-white">
      {ExpenseList.map((el) => (
        <ExpenseDiv title={el.title} price={el.price} id={el.id} />
      ))}
    </div>
  );
}

function ExpenseDiv({ title, price, id }: expenseDivProps) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteExpense(id));
  }
  return (
    <div className="flex h-[100px] w-full items-center justify-between border-b-2 border-red-700 border-opacity-75 bg-red-50 px-5">
      <h1 className="m-0 p-0 align-middle font-mono text-2xl leading-3">
        {title}
      </h1>
      <div className="flex items-center gap-2">
        <h1 className="m-0 p-0 align-middle font-sans text-2xl leading-3 text-red-600">
          {price}$
        </h1>
        <button
          onClick={handleDelete}
          className="w-8 items-center justify-center rounded-full bg-red-800 pb-1 text-2xl font-semibold text-white"
        >
          x
        </button>
      </div>
    </div>
  );
}
export default ExpenseContainer;
