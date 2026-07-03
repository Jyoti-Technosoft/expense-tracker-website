"use client";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

const chartData = [
  { category: "Food", value: 85 },
  { category: "Shopping", value: 70 },
  { category: "Bills", value: 95 },
  { category: "Travel", value: 55 },
  { category: "Health", value: 65 },
  { category: "Entertainment", value: 80 },
];

export default function SpendingCategoriesRadar() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Understand Your Spending Habits
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Analyze how your expenses are distributed across different
            categories and discover opportunities to save more.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Radar Chart */}
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={chartData}>
                  <PolarGrid stroke="#E5E7EB" />

                  <PolarAngleAxis
                    dataKey="category"
                    tick={{ fill: "#374151", fontSize: 14 }}
                  />

                  <PolarRadiusAxis
                    domain={[0, 100]}
                    tick={false}
                    axisLine={false}
                  />

                  <Tooltip />

                  <Radar
                    dataKey="value"
                    stroke="#4F46E5"
                    fill="#4F46E5"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Right Side */}
            <div className="space-y-5">

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                <h3 className="font-semibold text-indigo-700">
                  Highest Spending
                </h3>
                <p className="text-2xl font-bold mt-2">Bills</p>
                <p className="text-gray-600 mt-1">
                  Essential monthly payments make up the largest share.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                <h3 className="font-semibold text-green-700">
                  Balanced Categories
                </h3>
                <p className="text-gray-600 mt-2">
                  Food, Entertainment, and Health expenses remain well distributed throughout the month.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                <h3 className="font-semibold text-orange-700">
                  Spending Insight
                </h3>
                <p className="text-gray-600 mt-2">
                  Instantly visualize which categories need attention to improve your budgeting habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}