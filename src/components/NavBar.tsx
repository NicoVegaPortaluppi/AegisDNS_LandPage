import { Link } from "react-router";
import { Buttons } from "./Buttons";
import aegisLogo from "../images/AegisDNS_Logo.png";

export function NavBar() {
  return (
    <nav className="pl-20 flex gap-x-8 p-6  border-blue-500 just pr-20">
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

      <div className="flex-grow"></div>

      <div className="flex items-center gap-x-4">
        <h1 className="text-4xl font-bold text-[#3b82f6]">AegisDNS</h1>
        <img
          src={aegisLogo}
          alt="AegisDNS Logo"
          className="w-12 h-auto rounded-lg"
        />
      </div>
    </nav>
  );
}
