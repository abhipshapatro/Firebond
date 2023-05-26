import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


const Operation = ({ opr, setOpr, arg, updateOpr }) => {

    const [upperOpr, setUpperOpr] = useState({ type: "argument", value: "false" });
    const [lowerOpr, setLowerOpr] = useState({ type: "argument", value: "false" });

    const changeType = (e) => {
        let newOpr;
        switch (e.target.value) {
            case "constant":
                newOpr = { type: "constant", value: opr.value };
                break;
            case "argument":
                newOpr = { type: "argument", value: arg[0]?.input };
                break;
            case "and":
                newOpr = { type: "and", upper: upperOpr, lower: lowerOpr };
                break;
            case "or":
                newOpr = { type: "or", upper: upperOpr, lower: lowerOpr };
                break;
            default:
                newOpr = opr;
                break;
        }
        setOpr(newOpr);
    }


    const changeValue = (e) => {

        if (opr.type === "constant" || opr.type === "argument") {
            let newOpr = { ...opr };
            newOpr.value = e.target.value;

            setOpr(newOpr);
        }
    }

    useEffect(() => {
        if (updateOpr) {
            updateOpr(opr);
        }
    }, [opr]);

    return (
        <div>
            <div>
                {/* operation value */}
                <select
                    value={opr.type}
                    onChange={changeType}
                >
                    <option value="select" disabled >Select</option>
                    <option value="constant">Constant</option>
                    <option value="argument">Argument</option>
                    <option value="and">AND</option>
                    <option value="or">OR</option>
                </select>


                {/* when opr type is constant */}
                {opr.type === "constant" && (
                    <select
                        defaultValue={opr.value}
                        onChange={(e) => changeValue(e)}
                    >
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                )}


                {/* when opr type is argument */}
                {opr.type === "argument" && (
                    <select
                        defaultValue={arg[0] ? arg[0].input : ""}
                        onChange={(e) => changeValue(e)}
                    >
                        {arg.map((argument) => (

                            <option
                                value={argument.input}
                                key={argument.input}
                            >
                                {argument.input}
                            </option>
                        )
                        )}
                    </select>
                )}


                {/* when opr type is AND or OR */}
                {(opr.type === "and" || opr.type === "or") && (
                    <div>
                        <Operation opr={upperOpr} setOpr={setUpperOpr} updateOpr={(newOpr) => setOpr({ ...opr, upper: newOpr })} arg={arg} />
                        <Operation opr={lowerOpr} setOpr={setLowerOpr} updateOpr={(newOpr) => setOpr({ ...opr, lower: newOpr })} arg={arg} />
                    </div>
                )}


            </div>
        </div>
    )
}

export default Operation







