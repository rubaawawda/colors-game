import React from "react";
import './row.css';

const ArrayColors = new Array(4).fill('gray');
const Row = (props) => {
    return (
        <div className='row'>
            {
                ArrayColors.map((color, index) => (
                    <span
                        className="cell"
                        key={"color" + index}
                        style={{ backgroundColor: !props.hidden && props.value[index] || color }} />
                ))
            }

            <div >
                {
                    props.calculations && (
                        <h5 >
                            CC: {props.calculations.cc}
                            <br />
                            CR: {props.calculations.cr}
                        </h5>
                    )}
            </div>
        </div>
    )
}
export default Row;
