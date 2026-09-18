import React from "react";
import Table from "../../components/common/Table/Table";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import { products, productsTableHeadRow } from "../../data/products";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import RemoveProductIcon from "../../features/LastProductTable/Components/RemoveProductIcon";
import ChangeVisibilityIcon from "../../features/LastProductTable/Components/ChangeVisibilityIcon";
import EditProductIcon from "../../features/LastProductTable/Components/EditProductIcon";
import clsx from "clsx";
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
      <Table header={{ title: "لیست محصولات", Buttons: Buttons }}>
        <TableHead>
          {productsTableHeadRow.map((row) => {
            return <TableHeadCell key={row}>{row}</TableHeadCell>;
          })}
        </TableHead>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.id.slice(0, 10)}...</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>
                  <p
                    className={clsx(
                      product.isPublished ? "success-badge" : "danger-badge",
                      "badge",
                    )}
                  >
                    {product.isPublished ? "عمومی" : "خصوصی"}
                  </p>
                </TableCell>
                <TableCell>
                  <span>{product.price.toLocaleString("fa-IR")} تومان</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <RemoveProductIcon />
                    <ChangeVisibilityIcon />
                    <EditProductIcon />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default LastProductTable;
