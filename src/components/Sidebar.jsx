import { Outlet } from "react-router-dom";
import styles from "../components/Sidebar.module.css";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
