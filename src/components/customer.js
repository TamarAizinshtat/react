import React, { useState, useEffect } from 'react';
import { getServices } from '../api/services'


import { axios } from 'axios';


export default async function Customer() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // const servicesFromServer =  getServices();

        // setServices(servicesFromServer.data);
        // console.log(servicesFromServer.data);
        async function getServices() {
            debugger;
            try {
                debugger
                const res = await axios.get(`https://meetings-test.herokuapp.com/service?business_id=96ea4a06-cfad-4dfc-9be6-afae1c54ede8`)
                debugger
                let tempList = await res.data.map((item) => {
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
            } catch (err) {
                console.log(err)
            }
        }
        getServices();
    }, []);
    function handleclick() {

    }



    return (
        <div>
            <h1>welcome dear customer🤍🧡💛💚💙💜🤎</h1>
            <h2>this is our services , chose one of them and create a meeting</h2>
            {/* {
                 Array.from(services).forEach(element => {
                    return (
                        <div>
                            <label>{element.name}</label><br />
                            <button>create meeting</button><br /><br />
                        </div>
                    )
                })
            } */}
            {Array.from(services).map((el) => (<div>
                <label>{el.serviceName}</label><br />
                <button onClick={handleclick}>create meeting</button><br /><br />
            </div>))}
        </div>
    )
}