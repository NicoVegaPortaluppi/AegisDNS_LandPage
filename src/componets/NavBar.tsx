import { Link } from "react-router";
import { Buttons } from "./Buttons";

export function NavBar() {
  return (
    <nav className="flex gap-x-8 p-6  border-blue-500">
      <Link to="/">
        <Buttons>Home</Buttons>
      </Link>

      <Link to="/down">
        <Buttons> Downloads </Buttons>
      </Link>

      <a
        href="https://github.com/Zeviant/Capstone"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Buttons>Github</Buttons>
      </a>
    </nav>
  );
}
