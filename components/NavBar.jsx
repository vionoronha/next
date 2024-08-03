import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">ViO</div>
        <div className="space-x-4">
          <Link href="/">
            <button className="text-white hover:text-gray-300">Home</button>
          </Link>
          <Link href="/contact">
            <button className="text-white hover:text-gray-300">Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
