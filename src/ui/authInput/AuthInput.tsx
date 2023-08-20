import { HTMLInputTypeAttribute } from 'react';

import './AuthInput.scss';

interface IAuthInputProps {
    type: HTMLInputTypeAttribute, 
    placeholder: string, 
    name: string, 
    onChange: any,
    error?: string
}

function AuthInput({type, placeholder, name, onChange, error}: IAuthInputProps) {
    let errorLine: string = '';
    if(!error) {
        errorLine = 'error';
    }

    return (
        <div className="auth-input-wrap">
            <div className={!error ? 'auth-input-container' : 'auth-input-container error'}>
                <input 
                    type={type} 
                    placeholder={placeholder}
                    name={name}
                    className="auth-input-container__input-element"
                    onChange={onChange}
                />
            </div>
            <p className={error ? 'error-text-line' : 'error-text-line__hidden'}>{error ? error : errorLine}</p>
        </div>
    );
}

export default AuthInput;
