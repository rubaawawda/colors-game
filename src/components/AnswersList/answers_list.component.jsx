import React from "react";
import './answer_list.css';
import Row from "../Row/row.component";

const List = (props) => {
    return (
        <div className="list">
            {
                props.answers.map((e, index) =>
                    <Row key={"ruba" + index}
                        value={e.answer}
                        calculations={e.calculations} />)
            }
        </div>
    )
}

export default List