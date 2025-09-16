import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', income: 2500000, expenses: 1800000 },
  { month: 'Feb', income: 2500000, expenses: 2200000 },
  { month: 'Mar', income: 2500000, expenses: 1950000 },
  { month: 'Apr', income: 2500000, expenses: 2100000 },
  { month: 'May', income: 2500000, expenses: 2400000 },
  { month: 'Jun', income: 2500000, expenses: 2050000 },
  { month: 'Jul', income: 2500000, expenses: 1900000 },
];

export default function AreaChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
          <Tooltip 
            formatter={(value, name) => [
              `$${value.toLocaleString()}`, 
              name === 'income' ? 'Income' : 'Expenses'
            ]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Area 
            type="monotone" 
            dataKey="income" 
            stroke="#22c55e" 
            fill="#22c55e" 
            fillOpacity={0.3}
            name="Income"
          />
          <Area 
            type="monotone" 
            dataKey="expenses" 
            stroke="#ef4444" 
            fill="#ef4444" 
            fillOpacity={0.3}
            name="Expenses"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
