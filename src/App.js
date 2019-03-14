import React, { Component } from 'react';
import './App.css';

class DecisionMakerApp extends Component{
  
  state={
      options:[]
  };

handleDeleteOptions=()=>{
this.setState(()=>{
  return{
      options :[]
  }
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
  const rootTitle ='Random Decision Maker';
  const subTtile = "Can't decide? Let the app decide for you!";

  
  return(
  <div>
  <Header title = {rootTitle} subTtile={subTtile}/>
  <Action 
      hasOptions={this.state.options.length>0}
      handlePick ={this.handlePick}    
      />
  <Options 
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}    
      />
  <AddOption
      handleAddOption={this.handleAddOption}
  />
  </div>)
}
}

class Header extends Component{
render(){
  console.log(this.props);
  return(<div>
      <h1>{this.props.title}</h1>
      <h3>{this.props.subTtile}</h3>
  </div>)
}
} 
//setup the form with text input and submit 
//wire up onsubmit.fetch the value type 
//handleAddoption -
class Action extends Component{
buttonClick(){
  alert("clicked button ");
}

render(){
  return(
      <div>
      <button onClick ={this.props.handlePick}
              disabled={!this.props.hasOptions}>What should I do?</button>
      
      </div>
  )
}
}

class Options extends Component{
render(){
  return(
      <div>
          
          <h2>Options component here</h2>
          
          <button onClick ={this.props.handleDeleteOptions}>Remove All</button>
          <p>show length of option : {this.props.options.length}</p>

          <p>Show element of option : 
          {this.props.options.map((option)=>{ 
              return <Option key={option} optionText={option} />
          
          })}</p>
          
          <Option/>
      </div>
  );
}
}

//option 
class Option extends Component{
render(props){
  return(
      <div>
        
         
         {this.props.optionText} 
      </div>
  )
}
}
class AddOption extends Component{

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
      {this.props.error1}
      <form onSubmit={this.handleAddOption}>
          <input type ="text" name="option" />

          <button>Add option</button>

      </form>
  </div>);
}
}
export default DecisionMakerApp;