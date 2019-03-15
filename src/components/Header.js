import React from 'react';
const Header =(props)=>{

    console.log(props);
    return(<div>
        <h1>{props.title}</h1>
        {props.subTitle &&<h3>{props.subTitle}</h3>}
    </div>)
  }
   Header.defaultProps={
      title : 'Decision Maker'
   }

   export default 'Header';