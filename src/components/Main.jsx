import React from 'react'
import { useState } from 'react';
import Argument from './Argument';
import Operation from './Operation';

const Main = () => {

    const [arg, setArg] = useState([]);
    const [opr, setOpr] = useState({type: "select", value: ""});

    const logic = (operation) => {
        switch(operation.type){
            case "constant":
                return operation.value === "true";          
            case "argument":
                const result = arg.filter((argument) => operation.value === argument.input);
                return result[0] ? result[0].value === "true" : false ;
            case "and":
                return logic(operation.upper) && logic(operation.lower); 
            case "or":
                return logic(operation.upper) || logic(operation.lower); 
            default:
                return "undefined";
        }
        
    }


  return (
    <div>
        <Argument arg={arg} setArg={setArg} /> <br />
        <Operation opr={opr} setOpr={setOpr} arg={arg} /> <br />
        <h3>Result: {logic(opr).toString()}</h3>
    </div>
  )
}

export default Main



