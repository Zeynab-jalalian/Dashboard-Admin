import React from "react";
import Modal from "./Modal";
import { HiEye } from "react-icons/hi";
function ChangeVisibilityIcon() {
  const Trigger = () => {
    return (
      <button className="cursor-pointer text-xl text-sky-500">
        <HiEye className="text-xl" />
      </button>
    );
  };
  return <Modal title="تغییر وضعیت انتشار" Trigger={Trigger}></Modal>;
}

export default ChangeVisibilityIcon;
