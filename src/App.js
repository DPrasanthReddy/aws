// To create form 
import React from 'react'; 
import ReactDOM from 'react-dom'; 
 
const Form=()=> 
{ 
 return ( 
 <div> 
 <input type = "text" placeholder = "Enter Name.." /> 
 <br /> 
 <br /> 
 <input type = "text" placeholder = "Enter Pas.." /> 
 <br /> 
 <br /> 
 <button type = "submit">submit</button> 
 </div> 
 ); 
} 
 
ReactDOM.render( 
 <Form />, 
 document.getElementById("root") 
);
export default Form;
