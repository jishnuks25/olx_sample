
import { useState } from 'react';
import About from './Container/About';
import Profile from './Container/Profile';
import {Route, Routes, Link, useNavigate} from 'react-router-dom';
function App() {
  
  const [State, setState] = useState('')
  const history = useNavigate();
 

  return (
    <div className="App">
      
        <button onClick={()=>history('/about')}>About Me</button>
        <button onClick={()=>history('/profile')} >Profile</button>
        <Routes>
        <Route element={<About />} path='/about' />
        <Route element={<Profile />} path='/profile' />
      </Routes>
      
      
  
     
    </div>
  );
}

export default App;
