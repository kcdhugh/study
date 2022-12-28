import { 
  LineChart,
  Line,
  Tooltip,
  Legend,
  YAxis,
  XAxis,
  CartesianGrid,
  BarChart,
  Bar,
  ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 1200,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 5510,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 3390,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 1500,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 7181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 3300,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2800,
  },
];
 
function LineSample() {
  return (
    <LineChart 
      width={500}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <ReferenceLine y={5000} stroke="red" strokeWidth={10} />
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }}/>
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
    </LineChart>
  )
}

function BarSample() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#2474EE" radius={10}/>
      <Bar dataKey="uv" fill="#EBEEF0" radius={10}/>
      <Bar dataKey="amt" fill="#ccc" radius={10} />
    </BarChart>
  )
}

// https://codepen.io/dustryder/pen/qBNMgLJ
function BarSample2() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barGap='-50'
    >
      <Bar dataKey="uv" fill="#EBEEF0" radius={10} fillOpacity={0.7}/>
      <Bar dataKey="pv" fill="#2474EE" radius={10}/>
    </BarChart>
  )
}

function RechartsSample() {
  return (
    <>
      <h1>RECHARTS</h1>
      <h1>LINE CHARTS</h1>
      <LineSample />
      <br />
      <h1>BAR CHARTS SAMPLE 1</h1>
      <BarSample />
      <h1>BAR CHARTS SAMPLE 2</h1>
      <BarSample2 />
    </>
  )
}

export default RechartsSample;