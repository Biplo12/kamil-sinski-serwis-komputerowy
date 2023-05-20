import React from 'react';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { useAppSelector } from '@/store/store-hooks';

import { selectStats } from '@/state/statsSlice';

const LineChartCard: React.FC = (): JSX.Element => {
  const stats = useAppSelector(selectStats);
  const chartData = stats?.statistics?.charts;

  return (
    <>
      <ResponsiveContainer width='100%' height={275}>
        <LineChart
          width={500}
          height={275}
          data={chartData ? chartData : []}
          margin={{ top: 5, bottom: 5, left: 10, right: 10 }}
        >
          <XAxis dataKey='name' stroke='#fff' tick={{ fill: '#fff' }} />
          <YAxis stroke='#fff' tick={{ fill: '#fff' }} />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{ backgroundColor: '#1F2937' }}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Line
            type='monotone'
            dataKey='Users'
            stroke='#01A3FF'
            activeDot={{ r: 8 }}
            isAnimationActive={false}
          />
          <Line
            type='monotone'
            dataKey='Orders'
            stroke='#EF4444'
            activeDot={{ r: 8 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export default LineChartCard;
