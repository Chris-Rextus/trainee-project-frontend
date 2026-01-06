// src/components/tasks/other/Navbar.tsx

import { BsBellFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import logo from "@/assets/common/logo.png";

interface NavbarProps {
  userName: string;
  hasNotification?: boolean;
}

const Navbar = ({
  userName,
  hasNotification = false,
}: NavbarProps) => {
  return (
    <header
      className="
        flex items-center justify-between
        w-full

        h-[75px] md:h-[84px]
        px-10 md:px-20
        py-3

        border-b border-[#4E4E4E]
        bg-gradient-to-r
        from-[rgba(91,91,91,0.3)]
        to-[rgba(76,68,68,0.3)]
        backdrop-blur-[80px]
      "
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Peugeot Tasks"
          className="
            w-[38px] h-[42px]
            md:w-[54.67px] md:h-[60px]
          "
        />
        <span className="text-base font-semibold text-white">
          Peugeot Tasks
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative">
          <BsBellFill className="w-[21px] h-[25px] text-white" />

          {hasNotification && (
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-700" />
          )}
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2">
          <MdAccountCircle
            className="
              w-[26.66px] h-[26.66px]
              md:w-[28px] md:h-[28px]
              text-white
            "
          />
          <span className="text-base font-semibold text-white">
            {userName}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
