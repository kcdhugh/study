import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// sentry
// import * as Sentry from '@sentry/react';

import Home from './pages/home';
import SampleContext from './pages/sample_context';
import SampleTest from './pages/sample_test';
import SampleReactQuery from './pages/sample_react_query';
import SampleSuspense from './pages/sample_suspense';

const TEST_PAGE_LINK = [
  {
    path: '/',
    targetElement: (<div>MAIN</div>)
  },
  {
    path: '/home',
    targetElement: <Home />
  },
  {
    path: '/sample_test',
    targetElement: <SampleTest />
  },
  {
    path: '/sample_context',
    targetElement: <SampleContext />
  },
  {
    path: '/sample_react_query',
    targetElement: <SampleReactQuery />
  },
  {
    path: '/sample_suspense',
    targetElement: <SampleSuspense />
  }
]

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          {
            TEST_PAGE_LINK.map((value) => (
                <li key={value.path}>
                  <Link to={value.path}>{`===> ${value.path}`}</Link>
                </li>
              )
            )
          }
        </ul>
        <div>
          <br /><br />
        </div>
        <Routes>
          {
            TEST_PAGE_LINK.map((value) => (
                <Route key={`react-route-${value.path}`} path={value.path} element={value.targetElement} />
              )
            )
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;