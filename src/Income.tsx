import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import IncomeContainer from "./IncomeContainer";
import { clearIncome, getTotalIncome } from "./balanceSlice";

function Income() {
  const dispatch = useDispatch();
  const totalIncome = useSelector(getTotalIncome);
  console.log(totalIncome);
  function handleClick() {
    dispatch(clearIncome());
  }
  return (
    <div className="flex h-full w-[48%] flex-col rounded-md bg-green-50 shadow-xl ring-[1.3px] ring-green-900">
      <div className="relative flex w-full items-center">
        <h1 className="grow rounded-t-md border-b-2 border-green-900 bg-white py-2 text-center text-3xl font-bold leading-none">
          Income
        </h1>
        <button
          onClick={handleClick}
          className="absolute right-0 mr-3 w-20 rounded-lg bg-green-100 text-lg ring-1 ring-green-800"
        >
          clear
        </button>
      </div>
      <IncomeContainer></IncomeContainer>
      <AddForm type={"income"} />
    </div>
  );
}

export default Income;
