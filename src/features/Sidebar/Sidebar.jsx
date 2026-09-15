import React from "react";
import SidebarHeader from "./components/SidebarHeader";
import menus from "../../data/menus";
import Menus from "./components/Menus";

function Sidebar() {
  return (
    <aside className="w-68 p-6  z-10 bg-white h-screen sticky top-0 border-l primary-border-color">
      <SidebarHeader />
      <Menus menus={menus} />
    </aside>
  );
}

export default Sidebar;
