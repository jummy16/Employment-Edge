import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './Components/LandingPage/Landing'
import Signup from './Components/Signup/Signup'
import Job from './Components/Job/Job'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Signup/>}path="/"/>
      <Route element={<Landing/>} path='/Landing'/>
      <Route element={<Job/>} path='/Job'/>
    </Routes>
      
    </BrowserRouter>
    


</>
  )
}

export default App
