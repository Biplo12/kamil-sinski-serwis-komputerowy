import React from 'react';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const LineChartCard: React.FC = (): JSX.Element => {
  const data = [
    {
      name: 'Jan',
      Orders: 4000,
      Users: 2400,
      amt: 2400,
      Visits: 2400,
      Likes: 4200,
    },
    {
      name: 'Feb',
      Orders: 3000,
      Users: 1398,
      amt: 2210,
      Visits: 2210,
      Likes: 3110,
    },
    {
      name: 'Mar',
      Orders: 2000,
      Users: 9800,
      amt: 2290,
      Visits: 2290,
      Likes: 2920,
    },
    {
      name: 'Apr',
      Orders: 2780,
      Users: 3908,
      amt: 2000,
      Visits: 2000,
      Likes: 2220,
    },
    {
      name: 'May',
      Orders: 1890,
      Users: 4800,
      amt: 2181,
      Visits: 2181,
      Likes: 2181,
    },
    {
      name: 'Jun',
      Orders: 2390,
      Users: 3800,
      amt: 2500,
      Visits: 2500,
      Likes: 2500,
    },
    {
      name: 'Jul',
      Orders: 3490,
      Users: 4300,
      Visits: 2100,
      Likes: 2100,
    },
    {
      name: 'Sep',
      Orders: 1730,
      Users: 5100,
      Visits: 3200,
      Likes: 3200,
    },
    {
      name: 'Oct',
      Orders: 2120,
      Users: 4700,
      Visits: 2500,
      Likes: 2500,
    },
    {
      name: 'Nov',
      Orders: 3000,
      Users: 4990,
      Visits: 1800,
      Likes: 1800,
    },
    {
      name: 'Dec',
      Orders: 3490,
      Users: 4300,
      Visits: 1100,
      Likes: 1100,
    },
  ];

  return (
    <>
      <ResponsiveContainer width='100%' height={275}>
        <LineChart
          width={500}
          height={275}
          data={data}
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
          />
          <Line
            type='monotone'
            dataKey='Orders'
            stroke='#EF4444'
            activeDot={{ r: 8 }}
          />
          <Line
            type='monotone'
            dataKey='Visits'
            stroke='#4ade80'
            activeDot={{ r: 8 }}
          />
          <Line
            type='monotone'
            dataKey='Likes'
            stroke='#E841B8'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export default LineChartCard;
