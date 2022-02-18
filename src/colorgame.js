import "./index.css";

import {useState} from 'react';

 
 

export function AddColor(){

  const[color,setColor] = useState("pink");

  const styles = {background: color};

 

  const[colorList,setColorList] = useState(["purple","orange","teal"]);

 

  return(

    <div>

      <input

      value = {color}

      style= {styles}

      onChange = {(event) => setColor(event.target.value)}

      placeholder= "Enter a color"

      />

      <button onClick = {() => setColorList([...colorList,color])}>

        Add Color

      </button>

      {colorList.map((clr)=>(

          <ColorBox color={clr}/>

      ))}

    </div>

 

  );

 

}

 

function ColorBox({color}){

  const styles={

    height: "25px",

    width : "250px",

    background: color,

    marginTop : "10px",

 

  };

  return <div style = {styles}></div>;

}