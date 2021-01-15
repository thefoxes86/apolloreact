import {Route} from 'react-router-dom';
import Page from './components/page';
import Lists from './components/lists';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path='/page' component={Page}/>
      <Route path='/lists' component={Lists}/>
    </div>
  );
}

export default App;
