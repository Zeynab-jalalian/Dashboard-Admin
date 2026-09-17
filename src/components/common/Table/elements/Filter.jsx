import React from "react";
import { HiFilter } from "react-icons/hi";

function Filter() {
  return (
    <button className="flex-center gap-1 border primary-border-color">
      <HiFilter className="text-lg" />
      <span className="text-sm">فیلتر</span>
    </button>
  );
}

export default Filter;
