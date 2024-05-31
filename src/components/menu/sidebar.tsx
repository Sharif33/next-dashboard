"use client";

import Link from "next/link";
import { SIDEBAR_MENU } from "./constant";

const Sidebar = () => {
  return (
    <aside className="h-screen w-1/12 font-medium text-base flex flex-col gap-1 bg-white">
      {SIDEBAR_MENU.map((menu) => (
        <Link
          key={menu.id}
          href={menu.path}
          className="hover:bg-gray-50 w-full p-2"
        >
          {menu.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
