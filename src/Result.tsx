import { useSelector } from "react-redux";
import { getTotalExpense, getTotalIncome } from "./balanceSlice";

function Result() {
  const totalIncome = useSelector(getTotalIncome);
  const totalExpense = useSelector(getTotalExpense);
  const result = totalIncome - totalExpense;
  return (
    <div className="flex h-20 w-full grow items-center justify-center bg-indigo-700">
      <h1 className="text-center text-2xl text-white">
        {result >= 0 ? `You have ` : `You need `}
        <span className={result >= 0 ? "text-green-500" : "text-red-500"}>
          {result}$
        </span>
        !
      </h1>
    </div>
  );
}

export default Result;
