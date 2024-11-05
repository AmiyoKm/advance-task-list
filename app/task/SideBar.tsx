import React from "react";
import { useStore } from "./useStore";
import { FaPlus } from "react-icons/fa";

const SideBar = () => {
  const { lists, workspaces, openListModal, openWorkspaceModal } = useStore();
  return (
    <div className="w-60 bg-[#F9F9F9] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
            <h3 className="text-lg font-semibold items-center">Lists</h3>
            <ul>
            {lists.map((list, index) => (
              <li
                key={index}
                className="p-2 hover:bg-[#ccc] rounded-lg
                 cursor-pointer flex items-center"
              >
                <span className="mr-2">{list.emoji}</span>
                {list.name}
              </li>
            ))}
          </ul>
            <button className="mt-4 flex items-center border border-gray-300 rounded-md px-4 py-2" onClick={openListModal} ><FaPlus className="mr-2" /> New List</button>
        </div>
        <div className="p-4">
        <h3 className="text-lg font-semibold items-center">Workspaces</h3>
        <ul>
            {workspaces.map((workspace, index) => (
              <li
                key={index}
                className="p-2 hover:bg-[#ccc] rounded-lg 
                cursor-pointer flex items-center"
              >
                <span className="mr-2">{workspace.emoji}</span>
                {workspace.name}
              </li>
            ))}
          </ul>
        <button className="flex justify-center items-center mt-2"> < FaPlus className="mr-2" /> New Workspace</button>

        </div>
      </div>
    </div>
  );
};

export default SideBar;
