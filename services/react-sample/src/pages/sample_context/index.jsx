import React, { createContext, useContext, useMemo, useState } from 'react';

const UserFlag = createContext('TEST');
const UserControlContext = createContext('');

function TestButton() {
  const value = useContext(UserControlContext);
  return (<div>
    <button
      style={{ background: 'pink'}}
      onClick={() => {
        value(prev => {
          if (prev === 'on') {
            return 'off';
          }
          return 'on';
        })
      }}
    >!!!!!!!!!!</button>
  </div>)
}

function SubLayout() {
  return (
    <>
    <UserFlag.Consumer>
      {
        (onOffFlag) => 
          <>
            <p>{`${onOffFlag}`}</p>
            <TestButton />
          </>
      }

    </UserFlag.Consumer>
    <UserControlContext.Consumer>
      {
        (value) => (
          <button
            style={{ background: "white" }}
              onClick={() => {
                value(prev => {
                  if (prev === 'on') {
                    return 'off';
                  }
                  return 'on';
                })
              }}
          >CLICK</button>
        )
      }

    </UserControlContext.Consumer>
    </>
  )
}

function Layout({ children, style }) {
  return (
    <div style={style}>
      <h2>LAYOUT</h2>
      {children}
      <SubLayout></SubLayout>
    </div>
  )
}

function SampleContext() {
  const [flagValue, setFlagValue] = useState('on');
  const UserControlContextValue = useMemo(() => setFlagValue, [setFlagValue]);
  const LayoutComponent = React.memo(
    () => (
      <Layout style={{ background: "black", color: "white"}}>
        <div>CHILD TEST</div>
      </Layout>
    )
  )
  return (
    <UserControlContext.Provider value={UserControlContextValue}>
      <UserFlag.Provider value={flagValue}>
        <div style={{ background: "red" }}>
          <h1>SAMPLE CONTEXT</h1>
          <Layout style={{ background: "green"}}>
            <div>CHILD TEST</div>
          </Layout>

          {/* <LayoutComponent /> */}
          <br />
          <div style={{background: "blue"}}>
            <h1>TEST!!</h1>
            <div>TEST!!!!!!</div>
          </div>

        </div>
      </UserFlag.Provider>
    </UserControlContext.Provider>
  )
}

export default SampleContext;