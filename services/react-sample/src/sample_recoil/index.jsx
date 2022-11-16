import React from 'react';
import { RecoilRoot } from 'recoil';
import App from './App';

function SampleRecoil() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default SampleRecoil;