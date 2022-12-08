import { BrowserRouter, Routes, Route } from 'react-router-dom';

// sentry
// import * as Sentry from '@sentry/react';

import Home from './pages/home';
import SampleContext from './pages/sample_context';
import SampleTest from './pages/sample_test';
import SampleReactQuery from './pages/sample_react_query';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>MAIN</div>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/sample_context' element={<SampleContext />}/>
          <Route path='/sample_test' element={<SampleTest />}/>
          <Route path='/sample_react_query' element={<SampleReactQuery />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;