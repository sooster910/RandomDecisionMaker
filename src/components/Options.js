import React from 'react';
import Option from './Option';
const Options =(props)=>{
    return(
        <div>
            
            <h2>Options component here</h2>
            
            <button onClick ={props.handleDeleteOptions}>Remove All</button>
            {props.options.length===0 && (<p>Please add an option to get started! </p>)}
  
            <p>A list of options : </p>
            {props.options.map((option)=>( 
                 
                 <Option 
                    key={option}
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
  
                    />
                 
            ))
            }
            
            
        </div>
    );
  }
  export default Options;