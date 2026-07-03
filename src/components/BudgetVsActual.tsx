"use client";

import CountUp from "react-countup";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";

const chartData = [
  { month: "Jan", budget: 1200, actual: 700 },
  { month: "Feb", budget: 1200, actual: 1000 },
  { month: "Mar", budget: 1200, actual: 1400 },
  { month: "Apr", budget: 1200, actual: 970 },
  { month: "May", budget: 1200, actual: 480 },
  { month: "Jun", budget: 1200, actual: 650 },
];

export default function BudgetVsActual() {
  const budgetTotal = chartData.reduce(
    (sum, item) => sum + item.budget,
    0
  );

  const actualTotal = chartData.reduce(
    (sum, item) => sum + item.actual,
    0
  );

  const saved = budgetTotal - actualTotal;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Helps You Stay Within Budget
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Compare your planned budget with your actual expenses and instantly see how much you've saved.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-10">
          {/* Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                barGap={8}
                barCategoryGap="25%"
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  opacity={0.2}
                />
                <XAxis dataKey="month" />
                <Tooltip />
                <Legend />

                <Bar
                  dataKey="budget"
                  name="Budget"
                  fill="#2e31e6"
                  radius={[8, 8, 0, 0]}
                  animationDuration={700}
                />

                <Bar
                  dataKey="actual"
                  name="Actual"
                  fill="#7e87b6"
                  radius={[8, 8, 0, 0]}
                  animationDuration={700}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="rounded-2xl border bg-indigo-50 p-6">
              <p className="text-sm text-gray-500">
                Planned Budget
              </p>
              <p className="mt-2 text-3xl font-bold text-indigo-600">
                <CountUp
                  end={budgetTotal}
                  duration={1}
                  prefix="₹"
                />
              </p>
            </div>

            <div className="rounded-2xl border bg-red-50 p-6">
              <p className="text-sm text-gray-500">
                Actual Spending
              </p>
              <p className="mt-2 text-3xl font-bold text-red-500">
                <CountUp
                  end={actualTotal}
                  duration={1}
                  prefix="₹"
                />
              </p>
            </div>

            <div className="rounded-2xl border bg-green-50 p-6">
              <p className="text-sm text-gray-500">
                Money Saved
              </p>
              <p className="mt-2 text-3xl font-bold text-green-600">
                <CountUp
                  end={saved}
                  duration={1}
                  prefix="₹"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}