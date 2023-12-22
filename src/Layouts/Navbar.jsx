import useAuth from "../Hooks/UseAuth/UseAuth";
import logo from "../assets/icon/logo-mobile.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="bg-orange-400 fixed bg-opacity-20 z-10 w-full ">
      <div className=" navbar  text-[#7e7bc9] mx-auto">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 items-center justify-end md:justify-start lg:justify-start xl:justify-start gap-1 px-4 mx-2 font-cinzel">
          <img className="w-14 h-14 p-3" src={logo} alt="" />
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#635fc7]">Grow Up</h3>
          </div>
        </div>
        <div className="flex-none hidden lg:block">
          <div className="flex justify-center items-center gap-7 px-8 font-inter font-semibold">
            {/* Navbar menu content here */}
            <NavLink className="hover:text-[#635fc7]" to={"/"}>
              Home
            </NavLink>
            <NavLink className="hover:text-[#635fc7]" to={"/menu"}>
              Our Menu
            </NavLink>
            <NavLink className="hover:text-[#635fc7]" to={"/order/salad"}>
              Our Shop
            </NavLink>

            {user ? (
              <button onClick={handleLogout} className="hover:text-[#635fc7]">
                SIGN OUT
              </button>
            ) : (
              <NavLink className="hover:text-[#635fc7]" to={"/login"}>
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
