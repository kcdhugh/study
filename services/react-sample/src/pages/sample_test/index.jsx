import { useState } from 'react';

function Layout({ text }) {
  const printText = text ? `${text} 셈플이 있습니다` : 'NOT TEXT';
  const getPrintText = () => { return text ? `${text} 셈플이 있습니다` : 'NOT TEXT';}
  const sampleText = getPrintText();
  const sampleText2 = text;
  return (
    <>
      <h1>SAMPLE_1 {printText}</h1>
      <h1>SAMPLE_2 {getPrintText()}</h1>
      <h1>SAMPLE_3 {sampleText}</h1>
      <h1>SAMPLE_4 {sampleText2}</h1>
    </>
  )
}

function SampleTest() {
  const [textData, setTextData] = useState('');

  const onChangeText = (e) => {
    setTextData(e.target.value);
  }

  return (
    <div>
      <Layout text={textData}/>
      <input type="text" onChange={onChangeText} value={textData}/>
    </div>
  )
}

export default SampleTest;