import Link from "next/link";
import { HeaderLinks } from "../HeaderLinks";

const Header = () => {
  return (
    <header className="flex justify-between px-10 md:px-20 py-4">
      <span className="font-bold text-2xl">Sergio Ramirez</span>
      <HeaderLinks />
    </header>
  );
};

export default Header;
