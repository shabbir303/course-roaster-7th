/* eslint-disable no-unused-vars */

import { useState } from 'react';
import './App.css'
import Details from './component/Details/Details'
import Header from './component/Header/Header'
import Fullcourse from './component/full-course/Fullcourse'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [details, SetDetails] = useState([]);
  const [remainningCredit, setReamainningCredit] = useState(20)
  const [addCredit, setAddCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  

  const handleDetail = detail=>{
    // console.log(detail)
    const newDetail = [...details, detail]
    SetDetails(newDetail);
  }
  const handleTotal = price =>{
    const newTotal = totalPrice + price;
    setTotalPrice(newTotal);
  }
  
  const handletime = time =>{
    const remainningTime = remainningCredit - time;
    const newAddCredit = addCredit + time;
    setAddCredit(newAddCredit);
    setReamainningCredit(remainningTime);

    if(newAddCredit<=20){
      setAddCredit(newAddCredit)
    }else if(newAddCredit > 20){
      toast("Your credit score exceed")
      setAddCredit(20);
      setReamainningCredit(0);
    }
  }
  return (
    <>
      <Header></Header>
     <div className='md:flex'>
     <Fullcourse handleDetail={handleDetail} handletime={handletime} handleTotal={handleTotal} ></Fullcourse>
      <Details details={details} remainningCredit= {remainningCredit} addCredit={addCredit} totalPrice={totalPrice}></Details>
     </div>
     <ToastContainer/>
    </>
  )
}

export default App
