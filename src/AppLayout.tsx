import Expense from "./Expense";
import Income from "./Income";
import MainContainer from "./MainContainer";
import Result from "./Result";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-indigo-50 pt-3">
      <h1 className="text-center text-5xl font-bold text-green-900">
        EXPENSE <span className="text-red-900">TRACKER</span>
      </h1>
      <MainContainer>
        <Income />
        <Expense />
      </MainContainer>
      <Result />
    </div>
  );
}

export default AppLayout;
