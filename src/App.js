import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import UserForm from "./Components/Form/UserForm"
import Info from "./Components/Info/Info"
import Trybutton from "./Components/Trybutton/TryButton"
import { Container, Row, Col } from 'react-bootstrap';



function App() {

  return (
    <div className="App pb-5">
      <Container fluid breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        <Row className='info-row'>
          <Col  md={12} lg={6}>
            <div className="info-component-container mb-3">
              <Info breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} />
            </div>
          </Col>
          <Col md={12} lg={6}>
        <div className="button-component-container mb-4">
          <Trybutton breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} />
        </div>
        <div className="form-component-container">
          <UserForm />
        </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
