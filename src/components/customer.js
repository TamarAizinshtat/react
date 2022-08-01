import React, { useState, useEffect } from 'react';
import { getServices } from '../api/services'
import { useNavigate } from 'react-router-dom';

import { axios } from 'axios';


export default function Customer() {
    let navigate = useNavigate();
    const [services, setServices] = useState([]);
    useEffect(() => {
        // const data =  getServices();

        // setServices(data);
        // console.log(data);
        getServices().then(async (data) => {
            console.log(data)
            let tempList = await data.map((item) => {
                // key=item.serviceName
                let b = {
                    serviceName: item.serviceName,
                    numOfMeetings: item.numOfMeetings,
                    durationOfMeeting: item.durationOfMeeting,
                    cost: item.cost,
                    openingHours: item.openingHours,
                    address: {
                        number: item.address.number,
                        street: item.address.street,
                        city: item.address.city
                    }
                }
                return b;
            })
            setServices(tempList)


            
        })
    }, []);
    useEffect(() => {
        debugger
    }, [services]);
    function handleclick(service) {
        sessionStorage.setItem("service", JSON.stringify(service));
        navigate('/scheduleMeeting', { state: { service: service } });
    }
    return (
        <div>
            <h1>welcome dear customer🤍🧡💛💚💙💜🤎</h1>
            <h2>this is our services , chose one of them and create a meeting</h2>
            <div  >
            {Array.from(services).map((el) => (
                <span id={el.serviceName}>
                    <label>{el.serviceName}</label><br />
                    <button onClick={(() => handleclick(el))}>create meeting</button><br /><br />
                    <br />
                </span>

            ))}
            </div>
        </div>
    )
}