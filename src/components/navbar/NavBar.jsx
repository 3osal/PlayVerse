"use client"
import Link from "next/link";
import { NAVBAR_DATA } from "./NavBarData";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <header className="relative h-[70px] bg-Background flex justify-center items-center z-40">
      <div className="container flex justify-between items-center">
        {/* LOGO */}
        <div>
          <Link href="/" className="text-[30px] capitalize font-bold">
            play
            <span className="text-Primary_Color inline-block capitalize">
              verse
            </span>
          </Link>
        </div>

        {/* NAV LINKS */}
        <div>
          <span onClick = {handleToggle} className = " bloc cursor-pointer text-[20px] md:hidden">
        {!open ? <HiOutlineMenuAlt3 /> : <HiOutlineMenuAlt4 />}
          </span>
          {/* LARGE */}
          <div className="hidden md:flex gap-[15px]">
            {NAVBAR_DATA.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                className="text-[15px] capitalize w-max text-Text_Colors hover:text-Primary_Color"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* MOBILE */}
          <div className={!open ? 'hidden' : 'flex flex-col gap-[15px] absolute right-3 top-[80px] p-4 rounded-[7px] z-40 bg-Background md:hidden'}>
            {NAVBAR_DATA.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                className="text-[15px] capitalize w-max text-Text_Colors hover:text-Primary_Color"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
