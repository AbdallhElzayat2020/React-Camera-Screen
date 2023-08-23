import React from 'react';



function Button(props){
    return(
        <div>
            <button className={`btn  ${props.color ? props.color : "btn-primary"}`} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default Button;