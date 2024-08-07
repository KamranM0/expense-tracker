import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "./balanceSlice";
type formProps = {
  type: "income" | "expense";
};
function AddForm({ type }: formProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  function resetFields() {
    setTitle("");
    setPrice("");
  }
  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!title || !price) {
      window.alert("Please fill the fields.");
      return;
    }
    type === "income"
      ? dispatch(addIncome({ title, price, id: Date.now() }))
      : dispatch(addExpense({ title, price, id: Date.now() }));

    resetFields();
  }
  return (
    <div
      className={`flex w-full items-center justify-center rounded-b-md ${
        type === "income" ? "bg-green-200" : "bg-red-200"
      } border-t-2 ${type === "income" ? "border-green-800" : "border-red-800"} py-2`}
    >
      <form className="flex w-[95%] items-center justify-between gap-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-[35px] w-[200px] rounded-sm bg-white p-2 font-mono text-lg leading-[35px] ring-1 ring-slate-300"
          placeholder="Title"
        ></input>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="h-[35px] w-[80px] rounded-sm bg-white p-2 font-mono text-lg leading-none ring-1 ring-slate-300"
          placeholder="Price"
        ></input>
        <button
          onClick={(e) => handleSubmit(e)}
          className={`flex h-[40px] grow items-center justify-center rounded-md text-center font-mono text-xl font-bold leading-none text-white ${type === "income" ? "bg-green-700" : "bg-red-700"}`}
        >
          <p className="">Add</p>
        </button>
      </form>
    </div>
  );
}

export default AddForm;
