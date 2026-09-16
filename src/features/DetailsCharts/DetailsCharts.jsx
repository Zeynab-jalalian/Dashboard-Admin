import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { generateData } from "../../utils/home";

function DetailsCharts() {
  const data = generateData({
    productsLength: 90,
    usersLength: 200,
    ticketsLength: 195,
    adminsLength: 4,
  });
  return (
    <div className="p-5 space-y-5 bg-white border rounded-xl primary-border-color mt-6">
      <p className="text-lg">آمار کلی داشبورد</p>
      <div className="w-full h-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} width="150" height="40">
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DetailsCharts;
