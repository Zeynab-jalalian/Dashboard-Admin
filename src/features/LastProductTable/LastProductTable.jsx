import React from "react";
import Table from "../../components/common/Table/Table";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
function LastProductTable() {
  const Buttons = () => {
    return (
      <Link
        to={"/products"}
        className="underline hover:text-blue-400 text-blue-500 flex-center gap-1"
      >
        <span>صفحه محصولات</span>
        <MdOpenInNew />
      </Link>
    );
  };
  return (
    <div>
      <Table header={{ title: "لیست محصولات", Buttons: Buttons }}></Table>
    </div>
  );
}

export default LastProductTable;
