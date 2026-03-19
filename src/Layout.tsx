import { NavBar } from "./componets/NavBar";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <div className="h-screen bg-gray-900 flex-col justify-center">
        <div className=" bg-gray-900 ">
          <NavBar />
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
