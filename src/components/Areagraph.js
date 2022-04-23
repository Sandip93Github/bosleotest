import React from 'react';
import { AreaChart } from 'react-chartkick';
import 'chart.js';

const sales = [ 
  {
    month: 'January',
    watchtime: 250,
  },
  {
    month: 'February',
    watchtime: 365,
  },
  {
    month: 'March',
    watchtime: 525,
  },
  {
    month: 'April',
    watchtime: 422,
  },
  {
    month: 'May',
    watchtime: 655,
  },
  {
    month: 'June',
    watchtime: 680,
  },
  {
    month: 'July',
    watchtime: 620,
  },
  {
    month: 'August',
    watchtime: 600,
  },
  {
    month: 'September',
    watchtime: 540,
  },
  {
    month: 'October',
    watchtime: 630,
  },
  {
    month: 'November',
    watchtime: 630,
  },
  {
    month: 'Decembeer',
    watchtime: 630,
  },
];

const watchtime = {
  name: 'watchtime',
  data: {},
};

sales.map((s) => {
  Object.assign(watchtime.data, { [s.month]: s.watchtime });

  return true;
});

const data = [watchtime];

export default function App() {
  return (
    <>
    <div >
      <AreaChart data={data} min={0} max={1000} suffix="K"  download={true}  legend={false}  dataset={{borderWidth: 2}}
       width="1150px" height="400px"/>
    </div> 
    </>
  );
}
