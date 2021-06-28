import React from "react";
import "./inputGroup.css";
import me from "/me.png";
import propTypes from 'prop-types'

const InputGroup = ({data, onSubmit , sliderChange}) => {

  // console.log(data);

  return (
    <div id="InputBox">
      <h1 style={{textAlign:"center"}}>Input Group</h1>
      <div>
        <form className="grid-container" onSubmit={onSubmit} action="#">
        {
          data.inputs.map(item=>(
          <div key={item.name} className="grid-item">
            <CalculateInputPlan item={item} sliderChange={sliderChange} />
          </div>
          ))
        }
        </form>
      </div>
    </div>
  );
};



const CalculateInputPlan=({item , sliderChange})=>{

    if(item.type==="input"){
      if(item.name==="range"){
        return(
          <input 
            type={item.name}
            onChange={sliderChange}
            min={0}
            max={255}
            defaultValue={255}
          />
        )
      }
      if(item.name==="image"){
        return(
          <input
            onClick={(e)=>e.preventDefault()}
            type={item.name} 
            alt="this is image of me"
            src={me}
            style={{width:"80px" , height:"80px"}}
          />
        )
      }
      if(item.name === "radio") {
        return(
        item.values.map(a=>(
          <div style={{display:"inline"}} key={a}>
            <label>{a}</label>
            <input
              name={item.name}
              type={item.name}
              defaultValue={item.value ? item.value : ""}
              placeholder={item.placeholder && item.placeholder}
            />
          </div>
        )
        ))
      }
      if(item.name === "checkbox"){
        return(
        item.values.map(a=>
          <div key={a} style={{display:"inline"}}>
          <label>{a}</label>
          <input
              name={item.name}
              type={item.name}
              defaultValue={item.value ? item.value : ""}
              placeholder={item.placeholder && item.placeholder}
            />
            </div> 
        )
        )
      }
     
      return(
        <input
          name={item.name}
          type={item.name}
          defaultValue={item.value ? item.value : ""}
          placeholder={item.placeholder && item.placeholder}
        />
      )
    }
    if(item.type==="select"){
      return(
        <select>
          {item.options.map(city=>(
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      )
    }
    if(item.type==="textarea"){
      return(
        <textarea>
          
        </textarea>
      )
    }
}
    
export default InputGroup;



InputGroup.propTypes = {
  data : propTypes.object,
  onSubmit:propTypes.func,
  sliderChange:propTypes.func
}