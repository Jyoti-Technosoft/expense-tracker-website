"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const chartData = [
  { month: "Jan", expense: 2500 },
  { month: "Feb", expense: 1500 },
  { month: "Mar", expense: 9800 },
  { month: "Apr", expense: 3900 },
  { month: "May", expense: 4900 },
  { month: "Jun", expense: 3800 },
  { month: "Jul", expense: 4300 },
  { month: "Aug", expense: 5000 },
];

export default function MonthlySpendingTrends() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Monthly Spending Trends
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Visualize your spending patterns over time to identify peaks,
            reduce unnecessary expenses, and make smarter financial decisions.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-6 md:p-10">

          <div className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{
                  top : 20,
                  right : 20,
                  left : 0,
                  bottom : 0
                }}
              >
                <CartesianGrid
                  strokeDasharray="10 10"
                  stroke="#E5E7EB"
                />

                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#6B7280", fontSize: 14 }}
                />

                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#6B7280", fontSize: 14 }}
                />

                <Tooltip
                  cursor={{
                    stroke: "#4F46E5",
                    strokeWidth: 1,
                    strokeDasharray: "4 4",
                  }}
                  contentStyle={{
                    borderRadius : "12px",
                    border: "1px solid #E5E7EB",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="#4F46E5"
                  strokeWidth={4}
                  dot={{
                    fill: "#4F46E5",
                    strokeWidth: 3,
                    stroke: "#fff",
                    r: 6,
                  }}
                  activeDot={{
                    r: 8,
                    fill: "#4338CA",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </section>
  );
}