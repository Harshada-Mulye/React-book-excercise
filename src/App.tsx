import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Books from './component/Book'
import Spoiler from './component/Spoiler';
function App() {
	const [type, setType] = useState("You have spoiled")
	//const [name, setName] = useState("Harshada")
	
  return (
	 
    <div className="App">
      <header className="App-header">
       <Books/>
	   <Spoiler type={type} name="harshada" />
      </header>
    </div>
  );
}

export default App;
