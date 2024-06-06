"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DASSBOARD_SIDEBAR_MENU } from "./constant";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-full font-medium text-base flex flex-col gap-1 bg-white">
      {DASSBOARD_SIDEBAR_MENU.map((menu) => {
        const isActive = pathname.includes(menu.path);
        return (
          <Link
            key={menu.id}
            href={menu.path}
            className={`${
              isActive ? "bg-gray-50" : ""
            } hover:bg-gray-50 w-full p-2`}
          >
            {menu.name}
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
