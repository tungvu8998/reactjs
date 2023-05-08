import React, { useState } from 'react';

function Comment() {
    const [comment, setComment] = useState('');
    const [sex, setSex] = useState('Male');
    const [address, setAddress] = useState('HCM');
    const submitHandle = (event) => {
        event.preventDefault();
        alert(`${comment}-${sex}-${address}`)
    }

    const selectChangeValue = (event) => {
        setAddress(event.target.value);
    }
    
    const textChangeValue = (event) => {
        setComment(event.target.value);
    }

    const radioChangeValue = (event) => {
        setSex(event.target.value);
    }
    return (
        <>
            <form onSubmit={submitHandle}>
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='comment' value={comment} onChange={textChangeValue}></textarea><br />
                <input type="radio" id="male" name="sex" value="Male" checked={sex === "Male"} onChange={radioChangeValue}/>
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="sex" value="Female" checked={sex === "Female"} onChange={radioChangeValue}/>
                <label htmlFor="female">Female</label>
                <select name="address" id="address" value={address} onChange={selectChangeValue}>
                    <option value="HaNoi">HaNoi</option>
                    <option value="HCM">HCM</option>
                    <option value="VungTau">VungTau</option>
                    <option value="CanTho">CanTho</option>
                </select><br />
                <input type='submit' value="Send" />
            </form>
        </>
    )
};

export default Comment;