import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-[#999D9E] min-h-screen text-[#fff]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
