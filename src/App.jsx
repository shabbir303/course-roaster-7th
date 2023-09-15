
import { useState } from 'react';
import './App.css'
import Details from './component/Details/Details'
import Header from './component/Header/Header'
import Fullcourse from './component/full-course/Fullcourse'

function App() {
  const [details, SetDetails] = useState([]);
  const[remainningCredit, setReamainningCredit]=

  const handleDetail = detail=>{
    // console.log(detail)
    const newDetail = [...details, detail]
    SetDetails(newDetail);
  }
  return (
    <>
      <Header></Header>
     <div className='md:flex'>
     <Fullcourse handleDetail={handleDetail}></Fullcourse>
      <Details details={details}></Details>
     </div>
    </>
  )
}

export default App
