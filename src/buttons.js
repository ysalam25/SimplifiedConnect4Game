import React from "react";
import './buttons.css';


function Button(props) {
    return(
        <button disabled={props.disable} className={props.value} onClick = {
        props.onClick
        }>
            {props.value}
        </button>
    );
}
export default Button;