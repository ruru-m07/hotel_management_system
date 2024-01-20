import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <section className="flex  h-full w-[90%] my-5 m-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
