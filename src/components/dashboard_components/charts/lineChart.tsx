import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', spending: 45000 },
  { day: 'Tue', spending: 62000 },
  { day: 'Wed', spending: 38000 },
  { day: 'Thu', spending: 75000 },
  { day: 'Fri', spending: 95000 },
  { day: 'Sat', spending: 120000 },
  { day: 'Sun', spending: 85000 },
];

export default function LineChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="day" />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <Tooltip 
            formatter={(value) => [`$${value.toLocaleString()}`, 'Spending']}
            labelFormatter={(label) => `Day: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="spending" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
