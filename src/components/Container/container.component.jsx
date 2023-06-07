import React from "react";
import './container.css';
import { useEffect, useState } from "react";
import Row from "../Row/row.component";
import colors from "../../Data/data";

const Form = (props) => {

    const [currentAnswer, setAnswer] = useState([]);

    useEffect(() => {
        if (currentAnswer.length === 4) {
            props.SubmitAnswer(currentAnswer);
            setAnswer([]); // no answer submited(clear)
        }

    }, [currentAnswer]);


    const handelColor = (color) => {

        setAnswer([...currentAnswer, color]);

    }

    const clearAnswer = () => {

        setAnswer([]);

    }


    return (
        <div className="Answers">
            <hr />
            <div className="RowForSubmit">
                <Row value={currentAnswer} />
                <span className="clear" onClick={clearAnswer}>X</span>
            </div>
            <div className="colorRow">

                {
                    colors.map(color =>
                        <span
                            className="squarColorBorder"
                            key={color}
                            style={{ backgroundColor: color }}
                            onClick={() => handelColor(color)}
                        >
                        </span>)}
            </div>
        </div>
    )
}



export default Form