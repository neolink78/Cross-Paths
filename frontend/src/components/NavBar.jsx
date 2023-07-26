import { NavLink } from "react-router-dom";
import { BiSolidUser, BiSolidCategoryAlt } from "react-icons/bi";
import { TbMapPinSearch } from "react-icons/tb";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { RiFolderUserFill } from "react-icons/ri";

function NavBar() {
  return (
    <header className="bottom-0 fixed w-full h-[10vh] pb-6 bg-white z-20">
      <nav className="h-full flex items-center">
        <ul className="flex justify-evenly w-full">
          <NavLink to="/search">
            <li>
              <TbMapPinSearch />
            </li>
          </NavLink>
          <NavLink to="/category">
            <li>
              <BiSolidCategoryAlt />
            </li>
          </NavLink>
          <NavLink to="/favorites">
            <li>
              <RiFolderUserFill />
            </li>
          </NavLink>
          <NavLink to="/chat">
            <li>
              <HiChatBubbleOvalLeftEllipsis />
            </li>
          </NavLink>
          <NavLink to="/user">
            <li>
              <BiSolidUser />
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
