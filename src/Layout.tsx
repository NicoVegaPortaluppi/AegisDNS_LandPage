import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#131f3a] flex flex-col">
      <div className="sticky top-0 z-50 bg-[#0f172a]">
        <NavBar />
      </div>

      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
