import { useDispatch, useSelector } from "react-redux";
import { deleteIncome, reducerProps } from "./balanceSlice";

type incomeDivProps = {
  title: string;
  price: number;
  id: number;
};

function IncomeContainer() {
  const incomeList = useSelector(
    (state: reducerProps) => state.balance.incomeList,
  );
  return (
    <div className="m-1 grow overflow-y-scroll rounded-md border-solid border-green-700 bg-white">
      {incomeList.map((el) => (
        <IncomeDiv title={el.title} price={el.price} id={el.id} />
      ))}
    </div>
  );
}

function IncomeDiv({ title, price, id }: incomeDivProps) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteIncome(id));
  }
  return (
    <div className="flex h-[100px] w-full items-center justify-between border-b-2 border-green-700 border-opacity-75 bg-green-50 px-5">
      <h1 className="m-0 p-0 align-middle font-mono text-2xl leading-3">
        {title}
      </h1>
      <div className="flex items-center gap-2">
        <h1 className="m-0 p-0 align-middle font-sans text-2xl leading-3 text-green-600">
          {price}$
        </h1>
        <button
          onClick={handleDelete}
          className="w-8 items-center justify-center rounded-full bg-green-800 pb-1 text-2xl font-semibold text-white"
        >
          x
        </button>
      </div>
    </div>
  );
}
export default IncomeContainer;
