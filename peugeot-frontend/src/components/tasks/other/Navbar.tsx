// src/components/tasks/other/Navbar.tsx

import { BsBellFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { FiLogOut } from "react-icons/fi"; 
import Logo from "../../common/Logo";

interface NavbarProps {
  userName: string;
  hasNotification?: boolean;
  onLogout?: () => void; 
}

const Navbar = ({
  userName,
  hasNotification = false,
  onLogout,
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
      <div className="flex items-center gap-3 md:gap-4">
        <Logo 
          heightPx={55} 
          className="
            w-auto
            md:h-[75px] md:w-auto
          " 
        />
        <div className="flex flex-col">
          <span className="text-lg font-bold text-white leading-tight"> 
            Peugeot
          </span>
          <span className="text-lg font-semibold text-white leading-tight"> 
            Tasks
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-5">
        <button className="relative">
          <BsBellFill className="w-[24px] h-[28px] text-white" />

          {hasNotification && (
            <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-red-700" />
          )}
        </button>

        {onLogout && (
          <button 
            onClick={onLogout}
            className="
              flex items-center gap-2
              px-3 py-1.5
              bg-red-600 hover:bg-red-700
              text-white text-sm font-medium
              rounded-md
              transition-colors
            "
            title="Logout"
          >
            <FiLogOut className="w-4 h-4" />
            <span className="hidden md:inline">Logout</span>
          </button>
        )}

        <button className="flex items-center gap-3">
          <MdAccountCircle
            className="
              w-[30px] h-[30px]
              md:w-[32px] md:h-[32px]
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