import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

type PieDatum = { name: string; value: number; color?: string }

const DEFAULT_DATA: PieDatum[] = [
  { name: 'Food & Dining', value: 650000, color: '#ef4444' },
  { name: 'Transportation', value: 420000, color: '#3b82f6' },
  { name: 'Shopping', value: 380000, color: '#8b5cf6' },
  { name: 'Entertainment', value: 250000, color: '#f59e0b' },
  { name: 'Bills & Utilities', value: 200000, color: '#10b981' },
  { name: 'Healthcare', value: 150000, color: '#f97316' },
  { name: 'Other', value: 100000, color: '#6b7280' },
]

interface Props {
  data?: PieDatum[]
}

export default function PieChart({ data }: Props) {
  const provided = Array.isArray(data) ? data.filter(d => typeof d.value === 'number') : []
  const sum = provided.reduce((acc, d) => acc + (d.value || 0), 0)
  const base = sum > 0 ? provided : DEFAULT_DATA
  const chartData = base.slice(0, 3)

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || DEFAULT_DATA[index % DEFAULT_DATA.length].color!} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value, name) => [`$${Number(value).toLocaleString()}`, String(name)]}
          />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
