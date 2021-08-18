import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import GlobalStyle from './styles/global';
import Footer from './components/Footer';
import Header from './components/Header';


//import CadastroModelos from './components/Modelo';
//import Alertas from './components/Alerts';
import AdicionarItem from './components/AddItem';
import CadastroFabricante from './components/Fabricante';

function App() {
  return (
    <>
      
      <Header />
      <BrowserRouter>
      <Switch>
        <Route path="/adicionaritem" exact component={AdicionarItem}/>
        <Route path="/fabricante" exact component={CadastroFabricante}/>
      </Switch>
      </BrowserRouter>
      <Footer />
      <GlobalStyle />
    </>
    
  );
}

export default App;
