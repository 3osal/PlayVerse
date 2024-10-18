"use client";
import React from "react";
import { SIDEBAR_DATA } from "./SideBarData";
import Link from "next/link";
import { useState } from "react";
import { FaCaretUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <nav className="bg-Background fixed left-5 top-[100px] rounded-full flex flex-col items-center justify-center">
      <span
        className="mx-auto p-2  text-[25px] text-Primary_Color cursor-pointer "
        onClick={handleToggle}
      >
        {!open ? <FaSortDown /> : <FaCaretUp />}
      </span>
      <div
        className={
          !open
            ? "hidden transition-all"
            : "h-full flex flex-col gap-5 p-5 overflow-hidden transition-all "
        }
      >
        {SIDEBAR_DATA.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className={`text-[20px] hover:text-Primary_Color ${
              pathName === item.path && "text-Primary_Color"
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
