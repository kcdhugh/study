import { useState } from 'react';
import RechartsSample from './RechartsSample';
import NivoSample from './NivoSample';

const CHART_SAMPLE = {
  RECHARTS: RechartsSample,
  NIVO: NivoSample,
}



function SampleChart() {
  const [chartLibraryType, setChartLibraryType] = useState('RECHARTS');
  const ChartComponent = CHART_SAMPLE[chartLibraryType];

  return (
    <>
      <h1>SAMPLE CHART</h1>
      <div>
        <button
          style={{
            background: "gray",
            width: "200px"
          }}
          onClick={() => {
            setChartLibraryType(prev => prev === 'RECHARTS' ? 'NIVO' : 'RECHARTS')
          }}
        >current: {chartLibraryType}</button>
      </div>
      <div>
        <ChartComponent />
      </div>
    </>
  );
}

export default SampleChart;