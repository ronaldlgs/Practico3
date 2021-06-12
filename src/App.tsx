import React from 'react';
import './App.css';

import { 
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom'
import Menu from './components/Menu'
import Home from './constainers/home/Home'
import Lista from './constainers/lista/Lista'
import FormLista from './components/FormLista'
import Item from './constainers/item/Item'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      
     <Provider store={store}>
     <Router>
     <Menu />
       <Route path='/' exact>
       <br  /><br  /><br  />
         < Home/>
       </Route>
       <Route path='/ListaCompra'>
       <br  /><br  /><br  /><br  />
        < FormLista/>
        < Lista/>
       </Route>
       <Route path='/Item/:ItemID'>
       <br  /><br  /><br  /><br  />
        
        < Item/>
       </Route>
     </Router>
     </Provider>
    </div>
  );
}

export default App;
