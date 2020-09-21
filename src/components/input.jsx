import React from 'react';
const Input = ({ type, label, name, value, onChange, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type}
                className="form-control"
                id={name}
                placeholder={`enter your ${label}`}
                name={name}
                value={value}
                onChange={onChange}></input>

            {error && <div className="text-danger">{error}</div>}

        </div>
    );
}

export default Input;
