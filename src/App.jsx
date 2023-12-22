import { Outlet } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <div className="min-h-[calc(100vh-258px)]">
          <Outlet></Outlet>
        </div>
      </MainLayout>
    </>
  );
}

export default App;
