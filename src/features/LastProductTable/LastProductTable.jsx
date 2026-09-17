import React from "react";
import Table from "../../components/common/Table/Table";
function LastProductTable() {
  const Buttons = () => {
    return <Link>صفحه محصولات</Link>;
  };
  return (
    <div>
      <Table header={{ title: "لیست محصولات", Buttons: Buttons }}></Table>
    </div>
  );
}

export default LastProductTable;
