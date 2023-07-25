import { NavLink } from "react-router-dom";
import { BiSolidUser, BiSolidCategoryAlt } from "react-icons/bi";
import { TbMapPinSearch } from "react-icons/tb";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { RiFolderUserFill } from "react-icons/ri";

function NavBar() {
  return (
    <header className="bottom-0 fixed w-full py-6">
      <nav>
        <ul className="flex justify-evenly">
          <NavLink to="/">
            <li>
              <TbMapPinSearch />
            </li>
          </NavLink>
          <li>
            <BiSolidCategoryAlt />
          </li>
          <li>
            <RiFolderUserFill />
          </li>
          <li>
            <HiChatBubbleOvalLeftEllipsis />
          </li>
          <li>
            <BiSolidUser />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
