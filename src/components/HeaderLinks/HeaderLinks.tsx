"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const headerLinks = [
  { text: "Projects", href: "/projects", id: "#projects" },
  { text: "About me", href: "/about", id: "#about-me" },
  { text: "Contact", href: "/contact", id: "#contact" },
];

const HeaderLinks = () => {
  return (
    <div className="space-x-10 hidden sm:block">
      {headerLinks.map((header, index) => (
        <Link className="text-sm text-gray-500" key={index} href={header.href}>
          {header.text}
        </Link>
      ))}
    </div>
  );
};

export default HeaderLinks;
