
import './App.css'
import Details from './component/Details/Details'
import Header from './component/Header/Header'
import Fullcourse from './component/full-course/Fullcourse'

function App() {
  

  return (
    <>
      <Header></Header>
     <div className='md:flex'>
     <Fullcourse></Fullcourse>
      <Details></Details>
     </div>
    </>
  )
}

export default App
