import React from "react";
import './header.css'

const Hedear = (props) => {
    return (
        <div>
            <div className='header'>
                <h2>Colors Game</h2>
                <h2>step:{props.answers.length}</h2>
            </div>
            <hr />
        </div>


    )
}
export default Hedear