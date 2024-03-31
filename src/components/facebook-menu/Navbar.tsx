"use client";
import MenuGrid from "../../assets/menu-icons/menu_grid.svg";
import Messanger from "../../assets/menu-icons/messenger.svg";
import Dropdown from "../../assets/menu-icons/dropdown.svg";
import NavIcon from "./NavIcon";

import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("initialMenu");
  // console.log(selectedMenu);
  return (
    <div className="h-[58px] bg-[#242526] flex items-center justify-end px-5 ">
      <div className="flex items-center gap-5 justify-end relative">
        {/* Menu */}
        <NavIcon icon={MenuGrid} />
        {/* messenger */}
        <NavIcon icon={Messanger} />
        {/* Dropdown */}
        <NavIcon
          onClick={() => {
            setOpenDropdown(!openDropdown);
            setSelectedMenu("initialMenu")
          }}
          icon={Dropdown}
        />
        {/* dropdown menu */}
        <DropdownMenu
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      </div>
    </div>
  );
};

export default Navbar;
