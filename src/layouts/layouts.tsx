import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Copyright from "./copyright";
import Navbar from "./navbar";
import ModalSearch from "./modalSearch";
// import Spinner from "./spinner";

function Layout() {
  return (
    <div>
      {/* <Spinner/> */}
      <Navbar />
      <ModalSearch/>

      <main><Outlet /></main>

      <Footer />
      <Copyright />
    </div>
  );
}

export default Layout;
