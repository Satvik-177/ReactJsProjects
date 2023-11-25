import './App.css';
import{useState} from 'react'

function App() {

const [color,SetColor] = useState('olive')

  return (

    <div 
    className="container"
    style={{backgroundColor:color}}
    >
    
    <div className='ButtonContainer'>
      <div className="buttons">
        <button 
        onClick={()=> SetColor('red')}
        className='button'
        style={{backgroundColor:'red'}}
        >Red</button>

        <button 
        onClick={()=> SetColor('orange')}
        className='button'
        style={{backgroundColor:'orange'}}
        >Orange</button>

        <button 
        onClick={()=> SetColor('green')}
        className='button'
        style={{backgroundColor:'green'}}
        >Green</button>
      </div>
     </div>
    </div>
  );
}

export default App;
