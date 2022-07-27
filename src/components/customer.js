import React, { useState } from 'react'
import { get } from '../api/services'
export default function Customer() {
    const [sevices, setServices] = useState('');
    function componentonmount() {
        setServices(get());
    };

    return (
        <div>
            <h1>welcome dear customer❤🧡💛💚💙💜🤎</h1>
            <h2>this is our services , chose one of them and create a meeting</h2>
            {
                sevices.forEach(element => {
                    return (
                        <div>
                            <label>{element.name}</label><br />
                            <button>create meeting</button><br /><br />
                        </div>
                    )
                })
            }
        </div>
    )
}