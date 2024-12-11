import React from "react";

function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Deals", href: "/deals" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between p-4">
      <div>
        <a className="text-2xl text-pink-500 cursor-pointer font-bold" href="">
          ShopSwift
        </a>
      </div>
      <div className="flex justify-around w-1/3 text-lg ">
        {navLinks.map((link, index) => (
          <a className="hover:text-pink-500" key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div>
        <a
          href="/signup"
          className="bg-pink-500 py-2 px-4 rounded-lg text-white"
        >
          Register
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
