import './App.css';
import Jsx from './components/jsx';
import Person from './components/person';
import PersonClass from './components/PersonClass';
//import XO from './components/XO';
import WrapXO from './components/WrapXO';
import WrapGuess from './components/WrapGuess';
import WrapTime from './components/WrapTime';

function App() {
  let name='somebody';

  return (
    <div className="App">
     <h4>Hello to react</h4> 
      <Jsx/>
      <Person name='iris' age={30}/>
      <PersonClass name={name}/>
      <WrapXO/>
      <WrapGuess/>
      <WrapTime/>
      
    </div>
  );
}

export default App;
