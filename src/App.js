import './App.css';
import PersonalCard from './componentes/PersonalCard';

function App() {
  return (
    <div className="App">
      <div>
        <PersonalCard lastName='Doe' firstName='Jane' age= {45} hairColor= 'Hair Color: Black'/>
        <PersonalCard lastName='Smith' firstName='John' age= 'Age: 88' hairColor= 'Hair Color: Brown'/>
        <PersonalCard lastName='Fillmore' firstName='Millard' age= 'Age: 50' hairColor= 'Hair Color: Brown'/>
        <PersonalCard lastName='Smith' firstName='Maria' age= 'Age: 62' hairColor= 'Hair Color: Brown'/>
      </div>
    </div>
  );
}



export default App;
