import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/UseAuth/UseAuth";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="pt-24 flex flex-col justify-start items-center gap-4 p-4 w-80 min-h-full bg-base-200">
      <NavLink className="btn btn-secondary w-full" to={"/"}>
        Home
      </NavLink>
      <NavLink className="btn btn-secondary w-full" to={"/menu"}>
        Our Menu
      </NavLink>
      <NavLink className="btn btn-secondary w-full" to={"/order"}>
        Order Foods
      </NavLink>
      {user ? (
        <button onClick={handleLogout} className="btn btn-secondary">
          Logout
        </button>
      ) : (
        <NavLink className="btn btn-secondary" to={"/login"}>
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Sidebar;
