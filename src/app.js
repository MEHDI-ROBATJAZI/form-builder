import React from "react";
import inputs from '/inputs.json'
import InputGroup from './components/inputGroup'

export default function App() {

  const [backColor,setBackColor] = React.useState(255)

  const submitForm=(e)=>{
    e.preventDefault()
    alert("form submited")
    console.log(e.target);
  }

  const sliderChange=(e)=>{
    console.log(e.target.value);
    setBackColor(Number(e.target.value))

  }


  return (
    <div 
      className="App" 
      style={{
        background:`rgb(${backColor},${backColor},${backColor})`,
        height:"100vh",
      }}
    >

      <h1 style={{textAlign:"center"}}>Form Resume</h1>

      <InputGroup data={inputs} onSubmit={submitForm} sliderChange={sliderChange}/>
    </div>
  );
}
