import { useUserContext } from "@/context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {

  return (
    <>
      {/* {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/hotel_room_login_signup.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )} */}
      <>
        <section className="flex flex-1 justify-center items-center flex-col py-10">
          <Outlet />
        </section>

        <img
          src="/hotel_room_login_signup.jpg"
          alt="logo"
          className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
        />
      </>
    </>
  );
}
