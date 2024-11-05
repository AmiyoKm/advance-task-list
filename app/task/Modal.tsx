import React from "react";
import { useStore } from "./useStore";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const {
    lists,
    workspaces,
    openListModal,
    openWorkspaceModal,
    setModalEmoji,
    setModalName,
    setModalType,
    closeWorkspaceModal,
    closeListModal,
    modalType,
    modalName,
    modalEmoji,
    handleSaveModal,
    isListModalOpen,
    isWorkspaceModalOpen,
  } = useStore();

  const handleClose = () => {
    if (modalType === "List") {
      closeListModal();
    } else if (modalType === "Workspace") {
      closeWorkspaceModal();
    }
  };

  const handleSave = () => {
    handleSaveModal();
  };

  if (!isListModalOpen && !isWorkspaceModalOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-xl font-semibold">{`Create New: ${modalType}`}</h2>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <FaTimes />
          </button>
        </div>
        <input
          className="border border-gray-300 rounded-md px-4 py-2"
          placeholder={`Enter ${modalType} Name `}
          type="text"
          value={modalName}
          onChange={(e) => setModalName(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-md px-4 py-2"
          type="text"
          placeholder="Enter Emoji (optional)"
          value={modalEmoji}
          onChange={(e) => setModalEmoji(e.target.value)}
        />
        <button
          onClick={handleSave}
          className="bg-black text-white flex items-center border border-gray-300 rounded-md px-4 py-2 mt-4"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
