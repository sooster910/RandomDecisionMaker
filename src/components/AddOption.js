import React from 'react';
import {Component} from 'react';

export default class AddOption extends Component{

    handleAddOption=(e)=>{
      e.preventDefault();
    
      const option = e.target.elements.option.value.trim();
    
      // if(option){
      //    return this.props.handleAddOption(option);
      // }
       this.props.handleAddOption(option)
        
    }
    render(){
      return(
      <div>
          <h2>Add option component here </h2>
         
          <form onSubmit={this.handleAddOption}>
              <input type ="text" name="option" />
    
              <button>Add option</button>
    
          </form>
      </div>);
    }
    }
