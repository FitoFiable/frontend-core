import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', expenses: 1800000, income: 2500000 },
  { month: 'Feb', expenses: 2200000, income: 2500000 },
  { month: 'Mar', expenses: 1950000, income: 2500000 },
  { month: 'Apr', expenses: 2100000, income: 2500000 },
  { month: 'May', expenses: 2400000, income: 2500000 },
  { month: 'Jun', expenses: 2050000, income: 2500000 },
];

export default function DummyBarChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
          <Tooltip 
            formatter={(value, name) => [
              `$${value.toLocaleString()}`, 
              name === 'expenses' ? 'Expenses' : 'Income'
            ]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
          <Bar dataKey="income" fill="#22c55e" name="Income" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
