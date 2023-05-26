import React from 'react';
const Argument = ({ arg, setArg }) => {

    // change the argument
    const changeArgument = (e, index) => {
        let newArgument = [...arg];
        newArgument[index].input = e.target.value;
        setArg(newArgument);
    }

    // change value of the argument
    const changeArgumentValue = (e, index) => {
        let newArgument = [...arg];
        newArgument[index].value = e.target.value;
        setArg(newArgument);
    }

    // delete particular argument
    const deleteArgument = (e, index) => {
        setArg(arg.filter((argument, i) => i !== index));
    }

    // add another argument
    const addArgument = () => {
        let newArgument = [...arg];
        newArgument.push({ input: "", value: "false" });
        setArg(newArgument);
    }

    return (
        <div>
            {arg.map((argument, index) => {
                return (
                    <div key={`${index + 2}`}>

                        
                        <input
                            type="text"
                            value={argument.input}
                            placeholder="Enter argument"
                            onChange={(e) => changeArgument(e, index)}
                        />

                        
                        <select
                            name="argument value"
                            value={argument.value}
                            onChange={(e) => changeArgumentValue(e, index)}
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>

                        
                        <button onClick={(e) => deleteArgument(e, index)}>X</button>
                    </div>
                )

            })}

            {/* add arg btn */}
            <button onClick={addArgument}>Add Arg</button>
        </div>
    )
}

export default Argument;



