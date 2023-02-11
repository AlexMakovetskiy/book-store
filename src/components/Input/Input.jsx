import React from 'react';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Input.scss';

export function Input (props) {
    let inputType = props.type;
    if (inputType === undefined)
        inputType = "text";
    return (
        <div className="edittext-conteiner">
            <input type={inputType} className="edittext-conteiner__writeline" placeholder={props.placeholder}/>
        </div>
    );
}