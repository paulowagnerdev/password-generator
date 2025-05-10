import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

  const [password, setPassword] = useState('&9M5i+2%1rD&b');
  const [inputValue, setInputValue] = useState(12);
  const [slicerValue, setSlicerValue] = useState(12);
  const [checkboxUppercaseValue, setcheckboxUppercaseValue] = useState(true);
  const [checkboxLowercaseValue, setcheckboxLowercaseValue] = useState(true);
  const [checkboxNumberValue, setcheckboxNumberValue] = useState(true);
  const [checkboxSimbolValue, setcheckboxSimbolValue] = useState(true);
  let newPassword = '';
 

  const functionNumberOfCaracteresGenerator = (number) => {

   const lettersUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const lettersLowercase = 'abcdefghijklmnopqrstuvwxyz';
   const simbol = '!_-+#%)(*&&¨%';
   const numbers = '0123456789';
   let characteres = '';
   let checkboxArray = [checkboxUppercaseValue,checkboxLowercaseValue,checkboxNumberValue,checkboxSimbolValue];

 
    if(checkboxArray[0] == true){
      characteres += lettersUppercase;
    }
    
    if(checkboxArray[1] == true){
      characteres += lettersLowercase;
    }
    
    if(checkboxArray[3] == true){
      characteres += simbol;
    }
    
    if(checkboxArray[2] == true){
      characteres += numbers;
    }
   
    if(characteres != ''){
      
    for(let i=0;i<=number;i++){

      let lenght = Math.floor(Math.random() * characteres.length);
      newPassword += characteres[lenght];
    }

    functionShowNumberOfCharacteres(newPassword);

    }
   
  }


  const functionShowNumberOfCharacteres = (password) => {
    if(password != 'undefined'){
      setPassword(`${password}`);
    }
  }
 
  const handleCheckboxUppercaseChange = (e) => {
    setcheckboxUppercaseValue(e.target.checked);
  }

  const handleCheckboxLowercaseChange = (e) => {
    setcheckboxLowercaseValue(e.target.checked);
  }

  const handleCheckboxNumberChange = (e) => {
    setcheckboxNumberValue(e.target.checked);
  }

  const handleCheckboxSimbolChange = (e) => {
    setcheckboxSimbolValue(e.target.checked);
  }

  const handleChangeSlicer = (e) => {

    const newSlicerValue = e.target.value;

    setSlicerValue(newSlicerValue);
    
    setInputValue(newSlicerValue);


    functionNumberOfCaracteresGenerator(newSlicerValue);

  }

  const handleChangeInput = (e) => {

    const newInputValue = e.target.value;

    if(newInputValue<0){
      setInputValue(0);

      setSlicerValue(0);

      functionNumberOfCaracteresGenerator(0);
    }else if(newInputValue>50){
      setInputValue(50);

      setSlicerValue(50);

      functionNumberOfCaracteresGenerator(50);
    }else{
      setInputValue(newInputValue);

      setSlicerValue(newInputValue);

      functionNumberOfCaracteresGenerator(newInputValue);
    }

  
  }
  

  return (

    <>
    <div id="container">

   

      <div id="show-password-div">

        <div id="password-div">
          <h2 id='password'>{password}</h2>
        </div>

        <div id="buttons-password-div">
          <FontAwesomeIcon icon={faCopy} onClick={() => navigator.clipboard.writeText(password)} id='copy-btn' />
          <FontAwesomeIcon icon={faArrowRotateRight} onClick={() => functionNumberOfCaracteresGenerator(inputValue)} id='newpassword-btn'/>
        </div>

        <div id="color-password-container"></div>

      </div>

      

      <div id="make-password-div">
        <h2>Personalize sua senha</h2>
        <div id="div-line">
        <span id='line'></span>
        </div>
        
       <div id='div-input-and-checkbox'>
            <div id='div-input-slicer-left'>
                
                <label id='title-insert-number'>Número de caracteres da senha</label>
                <div id='input-and-slicer-div'>
                  

                <input type="number" id='input-number' value={inputValue} onChange={handleChangeInput} min={0} max={50}/>


                <input
                    type="range"
                    min="0"
                    max="50"
                    value={slicerValue}
                    onChange={handleChangeSlicer}
                    id='input-slicer'
                   
                    />
                </div>

            </div>

            <div id='div-checkbox-right'>

              <div className="checkbox-class">
                <input type="checkbox" name="uppercase" id="uppercase-check-box" checked={checkboxUppercaseValue} onChange={handleCheckboxUppercaseChange}/>
                <label id="uppercase">Letra Maiúscula</label>
              </div>

              <div className="checkbox-class">
                <input type="checkbox" name="lowcase" id="lowcase-check-box" checked={checkboxLowercaseValue} onChange={handleCheckboxLowercaseChange} />
                <label>Letra Minúscula</label>
              </div>

              <div className="checkbox-class">
                <input type="checkbox" name="checkbox-number" id="checkbox-number-check-box" checked={checkboxNumberValue} onChange={handleCheckboxNumberChange} />
                <label>Números</label>
              </div>

              <div className="checkbox-class">
                <input type="checkbox" name="checkbox-simbol" id="checkbox-simbol-check-box" checked={checkboxSimbolValue} onChange={handleCheckboxSimbolChange} />
                <label>Simbolos</label>
              </div>
            
            </div>
       </div>
     
      </div>

    </div>
      
    </>
  )
}

export default App
