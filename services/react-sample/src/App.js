import { BrowserRouter, Routes, Route } from 'react-router-dom';

// sentry
import * as Sentry from '@sentry/react';

import Home from './pages/home';
import SampleContext from './pages/sample_context';
import SampleTest from './pages/sample_test';




function App() {
  return (
    <>
      <Sentry.ErrorBoundary
        beforeCapture={scope => {
          scope.setTag("location", "SAMPLE_TEST");
          scope.setTag("anotherTag", "HUGH");
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<div>MAIN</div>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/sample_context' element={<SampleContext />}/>
            <Route path='/sample_test' element={<SampleTest />}/>
          </Routes>
        </BrowserRouter>
      </Sentry.ErrorBoundary>
    </>
  )
}
export default App;