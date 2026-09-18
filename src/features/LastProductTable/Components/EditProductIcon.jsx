import React from "react";
import Modal from "./Modal";
import { BiEdit } from "react-icons/bi";
function EditProductIcon() {
  const Trigger = () => {
    return (
      <button className="cursor-pointer text-xl text-green-500">
        <BiEdit className="text-xl" />
      </button>
    );
  };
  return <Modal title="تغییر جزئیات محصول" Trigger={Trigger}></Modal>;
}

export default EditProductIcon;
