import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap/Button';
import Form from "./Components/Form/Form"
import Info from "./Components/Info/Info"
import Trybutton from "./Components/Trybutton/TryButton"
import { Container } from 'react-bootstrap';

function App() {
  
  return (
    <div className="App">
      <div className="info-component-container">
        <Info   breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}/>
      </div>
      <div className="button-component-container">
        <Trybutton />
      </div>
      <div className="form-component-container">
        <Form />
      </div>
    </div>
  );
}

export default App;
