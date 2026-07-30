import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="max-w-5xl mx-auto py-5 text-slate-400 ">
      <nav className="uppercase flex flex-wrap justify-around gap-4 tracking-wide">
        <NavLink className="hover:text-white" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-white" to="about">
          About
        </NavLink>
        <NavLink className="hover:text-white" to="technology">
          Technology
        </NavLink>
        <NavLink className="hover:text-white" to="links">
          Links
        </NavLink>
        <NavLink className="hover:text-white" to="stats">
          Stats
        </NavLink>
      </nav>
    </header>
  );
}
