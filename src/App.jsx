import './App.css'
import LIneChart from './assets/components/LineChart/LIneChart'
// import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import NavBar from './assets/components/Navbar/NavBar'
import PriceOptions from './assets/components/PriceOptions/PriceOptions'
import ReactSpinner from './assets/components/ReactSpinner/ReactSpinner'

function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <div className='p-5'>
      <NavBar ></NavBar>
      </div>
      <PriceOptions></PriceOptions>
      <div className=''>
      <LIneChart></LIneChart>
      </div>
      <ReactSpinner></ReactSpinner>

    </>
  )
}

export default App
