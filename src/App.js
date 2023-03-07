//import logo from './logo.svg';
import './App.css';
//import ButtonComponent from './button'
//import HeadingComponent from './components/heading';
import { Fragment } from 'react';
import Button from './component/Button';
import Heading from './component/Heading';

function InputMobile() {

  return (
  <Fragment>
    <input placeholder='mobile'></input><br></br>
  <input placeholder='password'></input><br></br>
  </Fragment>
  );
}


function App() {
  return (
    <form>
      <fieldset>
      <div className='App'>
        <Heading message ="Register here ..."/>
        <InputMobile />
        <Button key = "Submit"/>      
    </div>
      </fieldset>
    </form>
  )
}



export default App;
