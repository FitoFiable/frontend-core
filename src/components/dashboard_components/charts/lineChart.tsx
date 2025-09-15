import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', messages: 120, calls: 80 },
  { name: 'Week 2', messages: 200, calls: 150 },
  { name: 'Week 3', messages: 180, calls: 120 },
  { name: 'Week 4', messages: 250, calls: 200 },
  { name: 'Week 5', messages: 300, calls: 180 },
  { name: 'Week 6', messages: 280, calls: 220 },
];

export default function LineChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="messages" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="calls" stroke="#82ca9d" strokeWidth={2} />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
