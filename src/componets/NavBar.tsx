import { Link } from "react-router";
export function NavBar() {
  return (
    <nav className="flex gap-x-8 p-6 justify-center">
      <Link to="/">
        <button className="text-4xl font-bold text-blue-400"> Home</button>
      </Link>

      <Link to="/down">
        <button className="text-4xl font-bold text-blue-400">Downloads </button>
      </Link>
    </nav>
  );
}
