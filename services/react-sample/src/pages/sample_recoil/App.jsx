import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';


/* START SAMPLE ATOM *****************************************************************/
const textState = atom({
  key: 'textState',
  default: '',
});
function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={onChange} /><br />
      Echo: {text}
    </div>
  );
}
function CharacterInput() {
  return (
    <div><TextInput /></div>
  )
}
/* END SAMPLE ATOM *****************************************************************/


/* START SAMPLE SELECTOR *****************************************************************/
const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  }
});

function CharacterCounter() {
  const count = useRecoilValue(charCountState);
  return <div>CHAR COUNT: {count}</div>
}
/* END SAMPLE SELECTOR *****************************************************************/

function App() {
  return (
    <>
      SAMPLE RECOIL
      <CharacterInput />
      <CharacterCounter />
    </>
  );
}

export default App;