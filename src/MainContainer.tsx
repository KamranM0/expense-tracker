import { ReactNode } from "react";

function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-[200px] my-10 flex h-[500px] justify-between">
      {children}
    </div>
  );
}

export default MainContainer;
