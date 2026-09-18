import React from "react";
import Modal from "./Modal";
import { HiOutlineTrash } from "react-icons/hi";
function RemoveProductIcon() {
  const Trigger = () => {
    return (
      <button className="cursor-pointer text-xl text-red-500">
        <HiOutlineTrash className="text-xl" />
      </button>
    );
  };

  return <Modal title="حذف محصول" Trigger={Trigger} />;
}

export default RemoveProductIcon;
