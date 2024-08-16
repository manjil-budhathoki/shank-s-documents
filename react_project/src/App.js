import logo from './logo.svg';
import './App.css';
import Info1 from './Info1';
import Detail1 from './Detail1';
import { age, name } from './name';


function App() {
 
  return (
    <div >
      {/* <Info1></Info1> */}
      <Detail1 name={name} age={age}></Detail1>

    </div>
  );
}


export default App;
