import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageOneComponent from './components/pages/PageOneComponent';
import PageTwoComponent from './components/pages/PageTwoComponent';
import PageThreeComponent from './components/pages/PageThreeComponent';
import HeaderComponent from './components/header/HeaderComponent';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <>
              <main className='mainApp'>
                <Switch>
                  <Route path="/" exact component={PageOneComponent}/>
                  <div>
                    <HeaderComponent />
                    <Route path="/page-two" component={PageTwoComponent}/>    
                    <Route path="/page-three" component={PageThreeComponent}/>  
                  </div>        
                </Switch>
              </main>
            </>
        </BrowserRouter>
    </div>
  );
}

export default App;
