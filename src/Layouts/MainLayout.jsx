import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <Navbar></Navbar>

          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
