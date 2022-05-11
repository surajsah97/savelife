import React from 'react'
import { Route,Routes} from 'react-router-dom';
import Login from "./Layout/pages/Login/Login"
import Register from './Layout/pages/register/Register';
const App = () => {
  return (
<>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/Register' element={<Register/>}/>
  </Routes>
    
</>
  )
}

export default App
