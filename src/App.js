import React, { Component } from 'react';

import AddOption from './components/AddOption';
import Options from './components/Options';
import Action from './components/Action';
import Header from './components/Header';
import './App.css';

class App extends Component{
  
    state={
        options: []
    };
  
  
  componentDidMount(){
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    
    this.setState(()=>{
      return {options:options}
    }) 
  console.log("processing componentDidMount"); 
  
  }
  componentDidUpdate(preProps, preState){
    if(preState.options.length !==this.state.options.length){
  const json=JSON.stringify(this.state.options);
  console.log("processing componentDidUpdate"); 
  localStorage.setItem('options',json)
      console.log(localStorage.getItem('options'));
    }
  }
  
  handleDeleteOptions=()=>{
  this.setState(() => ({options :[]}));
    
  }
  handleDeleteOption=(optionFromUser)=>{
    //console.log('hdo',option);
    this.setState((preState)=>{
      return {options: preState.options.filter((option)=>{
          return option !== optionFromUser;
  
      })}
    })
  }
  //handlePick 
  //randomly pick an option and alert it.
  
  handlePick=()=>{
  const randomOption= Math.floor(Math.random()* this.state.options.length);
  const option =this.state.options[randomOption]
  alert(option);
  // this.setState((preState)=>{
  //     return{
  //       options: preState.option
  //     }
  // })
  }
  
  handleAddOption=(option)=>{
  console.log(option);
  console.log(this.state);
  
  //validating
  if(!option){
    alert('Enter valid value to add item') ;
  }else if(this.state.options.indexOf(option) > -1){
      alert('This option already exists');
  }else{
  //this.state is corresponding to preState
  this.setState((preState)=>{
   
    console.log(preState);
     return {
  options: preState.options.concat([option])
   }
  })
  }
  
  }
  render(){
    //const rootTitle ='Random Decision Maker';
    const subTitle = "Can't decide? Let the app decide for you!";
  
    
    return(
    <div>
    <Header subTitle={subTitle}/>
    <Action 
        hasOptions={this.state.options.length>0}
        handlePick ={this.handlePick}    
        />
    <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}    
        handleDeleteOption={this.handleDeleteOption}
  
        />
    <AddOption
        handleAddOption={this.handleAddOption}
    />
    </div>)
  }
  }
  
  App.defaultProps={
    options:[]
  };
  
  export default App;

//setup the form with text input and submit 
//wire up onsubmit.fetch the value type 
//handleAddoption -



