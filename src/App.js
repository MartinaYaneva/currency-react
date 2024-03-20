import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';
import { useState } from 'react';

function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIndntifier, newValue){
  setUserInput((prevUserInput) => {
      return{
          ...prevUserInput,
          [inputIndntifier]: +newValue
      }
  })
};

  return (
    <>
   <Header/>
   <UserInput userInput={userInput} onChange={handleChange}/>
   {/* use it as a value */}
   {inputIsValid ? <Results userInput={userInput}/>
   : <p className='center'>Please enter valid data!</p>
  }
   </>
  );
}

export default App;
