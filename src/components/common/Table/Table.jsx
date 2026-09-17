import React from "react";
import TableHeader from "./elements/TableHeader";

const Table = ({
  header = { title: "لیست آیتم ها", Buttons: undefined },
  children,
}) => {
  return (
    <div className="mt-10 border primary-border-color min-w-full bg-white rounded-xl overflow-hidden">
      <TableHeader header={header} />
      <div>{children}</div>
    </div>
  );
};

export default Table;
