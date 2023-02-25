import React from 'react'

function Input(props) {
    const {name, label} = props;
    return (
        <div className="space-y-2">
            <label htmlFor="name">Product Name</label>
            <input className="addProductInput" id="lws-inputName" type="text" required />
        </div>
    )
}

export default Input