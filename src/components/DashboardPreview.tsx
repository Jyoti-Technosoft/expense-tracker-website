"use client";

import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const weeklyData = [
    { day: "Mon", value: 120 },
    { day: "Tue", value: 220 },
    { day: "Wed", value: 90 },
    { day: "Thu", value: 300 },
    { day: "Fri", value: 180 },
    { day: "Sat", value: 260 },
    { day: "Sun", value: 140 },
];

const breakdownData = [
    { name: "Food & Dining", value: 420 },
    { name: "Transport", value: 260 },
    { name: "Shopping", value: 180 },
    { name: "Bills", value: 340 },
    { name: "Others", value: 120 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981"];

export default function DashboardPreview() {
    return (
        <div className="w-full bg-white border border-gray-100 shadow-2xl rounded-3xl overflow-hidden">

            {/* TOP BAR */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b bg-gray-50">

                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                </div>

                <div className="text-[10px] sm:text-xs text-gray-500 bg-white px-2 sm:px-3 py-1 rounded-full border">
                    ExpenseFlow • Dashboard
                </div>

                <div className="text-[10px] sm:text-xs text-gray-400 hidden sm:block">
                    Updated just now
                </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 space-y-6">

                {/* KPI CARDS (RESPONSIVE FIX) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    <div className="p-4 rounded-2xl border bg-white hover:shadow-md transition">
                        <p className="text-xs text-gray-500">Monthly Spend</p>
                        <p className="text-lg font-semibold">₹1,240</p>
                        <p className="text-xs text-red-500">↑ 8.2%</p>
                    </div>

                    <div className="p-4 rounded-2xl border bg-white hover:shadow-md transition">
                        <p className="text-xs text-gray-500">Daily Avg</p>
                        <p className="text-lg font-semibold">₹177</p>
                        <p className="text-xs text-green-600">Stable</p>
                    </div>

                    <div className="p-4 rounded-2xl border bg-white hover:shadow-md transition">
                        <p className="text-xs text-gray-500">Top Category</p>
                        <p className="text-lg font-semibold">Food</p>
                        <p className="text-xs text-indigo-600">₹420</p>
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                    <div className="w-full">
                        <p className="text-sm font-semibold mb-3">
                            Spending Breakdown
                        </p>

                        <div className="h-64 bg-gray-50 border rounded-xl flex items-center justify-center p-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={breakdownData}
                                        dataKey="value"
                                        innerRadius={0}
                                        outerRadius={90}
                                        paddingAngle={0}
                                    >
                                        {breakdownData.map((_, i) => (
                                            <Cell key={i} fill={COLORS[i]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        {/* LEGEND */}
                        <div className="mt-4 space-y-3">
                            {breakdownData.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between text-sm"
                                >
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="w-2.5 h-2.5 rounded-full"
                                            style={{ backgroundColor: COLORS[i] }}
                                        />
                                        <span className="text-gray-600">
                                            {item.name}
                                        </span>
                                    </div>
                                    <span className="font-medium">
                                        ₹{item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BAR CHART */}
                    <div className="w-full">
                        <p className="text-sm font-semibold mb-3">
                            Weekly Expense Trend
                        </p>

                        <div className="h-64 bg-gray-50 border rounded-xl p-3">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={weeklyData}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        opacity={0.9}
                                    />
                                    <XAxis dataKey="day" />
                                    <Tooltip />
                                    <Bar
                                        dataKey="value"
                                        fill="#3a3c91"
                                        radius={[6, 6, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}