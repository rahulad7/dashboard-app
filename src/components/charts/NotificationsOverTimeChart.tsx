'use client';

import { NotificationsOverTimePoint } from '@/src/types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface NotificationsOverTimeChartProps {
  data: NotificationsOverTimePoint[];
}

export default function NotificationsOverTimeChart({ data }: NotificationsOverTimeChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          dataKey="label" 
          tick={{ fontSize: 10 }}
          angle={-45}
          textAnchor="end"
          height={80}
          interval="preserveStartEnd"
        />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '12px'
          }}
        />
        <Bar dataKey="count" fill="#14B8A6" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

