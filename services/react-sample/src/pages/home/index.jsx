import { useState, useEffect } from 'react';
import axios from 'axios';

import CalendarComponent from '../../components/CalendarComponent';

function Home() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setTestData(res?.data ?? []);
      });
  }, []);

  if (!testData.length) {
    return <div>LOADING</div>
  }

  return (
    <div>
      <CalendarComponent />
      <ul>
        {
          testData.map((dataValue) => (
            <li key={`${dataValue.id}-${dataValue.name}`}>
              <div>=====================</div>
              <div>{dataValue.id}</div>
              <div>{dataValue.name}</div>
              <div>{dataValue.email}</div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Home;