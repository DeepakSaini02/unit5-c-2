import logo from './logo.svg';
import './App.css';
import { Form  } from './components/Form';
import {Show} from './components/Show'
import {Details} from './components/Details'
function App() {
  return (
    <div className="App">
      <div id='first'>
      <Form />
      <Show />

      </div>
   <Details />
    </div>
  );
}

export default App;
