

import { Outlet } from "react-router-dom";
import Footer from './../Footer/Footer';
import Navabr from './../Navbar/Navbar';
export default function Layout() {
  return (
    <>
      <Navabr/>
      <div className="containtger py-5">
        <Outlet> </Outlet>
      </div>
      <Footer />
    </>
  );
}
