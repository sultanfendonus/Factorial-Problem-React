import React,{useState} from 'react'

const App = ()=>{
  const [factorialValue, setFactorialValue] = useState(0);
  const [inputNumber, setInputNumber] = useState(null)

  const calculateFactorial = (number)=>{
    if (number === 0 || number === '0'){
        return 1;
    }
    if(number > 170){
      return 'Infinity'
    }
    return number * calculateFactorial(number-1);
  }

  const onFormSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit = {(e)=>onFormSubmit(e)}>
        <input
         type="number"
         placeholder="Enter a number..."
         value={inputNumber} 
         onChange={e => setInputNumber(e.target.value)}
         />
        <br />
        <button onClick={()=>setFactorialValue((inputNumber===null || inputNumber === '') ? 'Input Something': calculateFactorial(inputNumber))}>Calculate Factorial</button>
      </form>
      <h2>Factorial: {factorialValue}</h2>
    </div>
  );
}

export default App;