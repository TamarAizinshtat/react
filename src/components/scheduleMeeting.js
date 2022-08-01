import axios from 'axios';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
// import { useLocation } from 'react-router-dom';
export default function ScheduleMeeting( ) {



    function handleSubmit(){

    }
    // const location = useLocation();
    // const from = location.state;
    // console.log( .business.id)
const service= JSON.parse(sessionStorage.getItem('service'));
    return(
        <div>
            <h3>detaleils about {service.serviceName} service:</h3>
                         <h6>serviceName:       </h6>  <label>{ service.serviceName           }</label>
                         <h6>numOfMeetings:     </h6>  <label>{ service.numOfMeetings         }        </label>
                         <h6>durationOfMeeting: </h6>  <label>{ service.durationOfMeeting     }     </label>
                         <h6>cost:              </h6>  <label>{ service.cost                  }    </label>
                         <h6>openingHours:      </h6>  <label>{ service.openingHours          }   </label>
                         <h6>address                   </h6>  <label>{ service.address.number},
                                                              { service.address.street},
                                                              { service.address.city    }              </label>
                                                              
     
     <br/><br/>                                                     
        <input type='date'></input>
        <br/><br/>
        <input type='time'></input> 
        <br/><br/>
        <Button variant="contained" onClick={handleSubmit}>submit</Button>                 
        </div>
    )
}

export async function getMeeting() {
    try {     
        const {data}= await axios.get('https://meetings-test.herokuapp.com/meeting?business_id=703bcd08-717b-47b9-b86c-29710095399e')
        return data;
    }
    catch (error) {
        console.log('error in get meeting');
    }
}
export const get = async (id) => {

    try {
        return await axios.get('https://meetings-test.herokuapp.com/meeting/ '+ id);
    }
    catch (error) {
        console.log('error in get meeting', error);
    }

}
export const post = async (meeting) => {

    try {
        return await axios.post('https://meetings-test.herokuapp.com/meeting/ ', meeting);
    }
    catch (error) {
        console.log('error in add meeting');
    }
}
export const put = async (meeting) => {

    try {
        return await axios.put('https://meetings-test.herokuapp.com/meeting/ ', meeting);
    }
    catch (error) {
        console.log('error in put meeting: ', error);
    }

}

export const deleteService = async (service) => {

    try {
        return await axios.delete('https://meetings-test.herokuapp.com/service/ ', service);
    }
    catch (error) {
        console.log('error in put service: ', error);
    }

}
