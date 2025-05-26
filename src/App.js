
import { useState } from 'react';
import About from './Container/About';
import Profile from './Container/Profile';

function App() {
  let component
  const [State, setState] = useState()
  if(State==='about'){
    component= <About />
  }
  if(State==='profile'){
    component=<Profile />
  }

  return (
    <div className="App">
      <button onClick={()=>setState('about')}>About</button>
      <button onClick={()=>setState('profile')} >Profile</button>
      {component}
  
     
    </div>
  );
}

export default App;
