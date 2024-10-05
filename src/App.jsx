import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection'

function App() {
  const [genInfoData, setGenInfoData] = useState({name: '', email: '', num: '', location: ''})
  const [educExpData, setEducExpData] = useState([]) //FOR GLOBAL USE
  const [workExpData, setWorkExpData] = useState([]) //FOR GLOBAL USE

  return(
    <div className='container'>
      <InputSection 
        genInfoData = {genInfoData}
        setGenInfoData = {setGenInfoData}
        educExpData = {educExpData}
        setEducExpData = {setEducExpData}
        workExpData = {workExpData}
        setWorkExpData = {setWorkExpData}
      />
      <OutputSection 
        genInfoData = {genInfoData}
        educExpData = {educExpData}
        workExpData = {workExpData}
      />
      {console.log(genInfoData)}
    </div>
  )

  // const [count, setCount] = useState(0)
  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
