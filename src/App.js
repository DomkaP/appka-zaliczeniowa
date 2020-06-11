import React, { useState } from 'react';
import './App.css';
import Zamowienie from './components/zamowienie';
import Skomponuj from './components/skomponuj';
import {BrowserRouter as Router, Route

} from 'react-router-dom'
import koszyk from './components/koszyk';

function App() {

  const [ pizza, setPizza ] = useState(null);

  const otrzymajPizze = pizza => {
    setPizza(pizza);
  }

  return (
    <Router>
      <Route path='/' component={koszyk} />
    <div className="App">
      
      <div className="content">
        <Skomponuj otrzymajPizze={otrzymajPizze}/>
        <Zamowienie nowaPizza={pizza}/>
      </div>
      
      
     </div>
    </Router>
  );
}


export default App;
