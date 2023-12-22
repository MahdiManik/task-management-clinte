import { Outlet } from "react-router-dom";
import User from "../DashboardPages/User";
import logo from "../assets/icon/logo-mobile.svg";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-9 min-h-[100vh] font-cinzel">
      <div className="col-span-2 bg-violet-200 p-8">
        <div className="flex-1 items-center justify-end md:justify-start lg:justify-start xl:justify-start gap-1 px-4 mx-2 font-cinzel">
          <img className="w-14 h-14 p-3" src={logo} alt="" />
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#635fc7]">Grow Up</h3>
          </div>
        </div>
        <User />
      </div>
      <div className="col-span-7 p-12">
		
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
