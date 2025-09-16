import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

type AreaDatum = { month: string; income: number; expenses: number }

const DEFAULT_DATA: AreaDatum[] = [
  { month: 'Jan', income: 2500000, expenses: 1800000 },
  { month: 'Feb', income: 2500000, expenses: 2200000 },
  { month: 'Mar', income: 2500000, expenses: 1950000 },
  { month: 'Apr', income: 2500000, expenses: 2100000 },
  { month: 'May', income: 2500000, expenses: 2400000 },
  { month: 'Jun', income: 2500000, expenses: 2050000 },
  { month: 'Jul', income: 2500000, expenses: 1900000 },
]

interface Props {
  data?: AreaDatum[]
}

export default function AreaChart({ data }: Props) {
  const base = Array.isArray(data) && data.length > 0 ? data : DEFAULT_DATA
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={base}>
          <defs>
            <linearGradient id="incomeColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="expensesColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
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
          <Legend />
          <Area 
            type="monotone" 
            dataKey="income" 
            stroke="#22c55e" 
            fill="url(#incomeColor)"
            name="Income"
          />
          <Area 
            type="monotone" 
            dataKey="expenses" 
            stroke="#ef4444" 
            fill="url(#expensesColor)"
            name="Expenses"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
