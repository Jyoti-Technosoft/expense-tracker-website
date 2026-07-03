"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Food", value: 35 },
  { name: "Shopping", value: 25 },
  { name: "Bills", value: 20 },
  { name: "Travel", value: 12 },
  { name: "Others", value: 8 },
];

const COLORS = [
  "#4F46E5",
  "#6366F1",
  "#818CF8",
  "#A5B4FC",
  "#C7D2FE",
];

export default function CategorizeSpending() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Categorize Your Spending
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Automatically organize every expense into meaningful categories so
            you always know where your money goes.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Donut Chart */}
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={4}
                    stroke="none"
                  >
                    {data.map((_, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              {data.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-gray-100 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: COLORS[index],
                      }}
                    />

                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>
                  </div>

                  <span className="font-semibold text-indigo-600">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}