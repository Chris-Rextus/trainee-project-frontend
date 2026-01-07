// src/components/tasks/task-card/ContextMenu.tsx

import DropdownItem from "../dropdown/DropdownItem";
import { BsPencilFill, BsPlusSquareDotted } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

interface ContextMenuProps {
  onRename?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
}

const ContextMenu = ({
  onRename,
  onDuplicate,
  onDelete,
}: ContextMenuProps) => {
  return (
    <div
      className="
        absolute bottom-2 right-2
        w-[109px]
        rounded
        border border-[#4E4E4E]
        bg-[#252628]
        py-2
        z-50
      "
    >
      <DropdownItem
        label="Renomear"
        icon={<BsPencilFill size={16} />}
        onClick={onRename}
      />
      <DropdownItem
        label="Duplicar"
        icon={<BsPlusSquareDotted size={16} />}
        onClick={onDuplicate}
      />
      <DropdownItem
        label="Excluir"
        icon={<AiFillDelete size={14} />}
        variant="danger"
        onClick={onDelete}
      />
    </div>
  );
};

export default ContextMenu;
