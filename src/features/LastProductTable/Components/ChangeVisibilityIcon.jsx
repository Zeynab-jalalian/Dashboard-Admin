import React from "react";
import Modal from "./Modal";
import { HiEye } from "react-icons/hi";
import clsx from "clsx";
import { products } from "../../../data/products";
function ChangeVisibilityIcon({ handler, product }) {
  const Trigger = () => {
    return (
      <button className="cursor-pointer text-xl text-sky-500">
        <HiEye className="text-xl" />
      </button>
    );
  };
  return (
    <Modal
      title="تغییر وضعیت انتشار"
      Trigger={Trigger}
      onSubmit={() => handler(product.id)}
    >
      <div className="flex items-center justify-center">
        <p>
          آیا از{" "}
          <span
            className={clsx(
              product.isPublished ? "text-blue-500" : "text-green-500",
            )}
          >
            <strong>{product.isPublished ? "خصوصی" : "عمومی"}</strong>
          </span>{" "}
          <span> کردن این محصول اطمینان دارید؟</span>
        </p>
      </div>
    </Modal>
  );
}

export default ChangeVisibilityIcon;
