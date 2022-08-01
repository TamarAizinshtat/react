import axios from 'axios';
import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom';
export default function ScheduleMeeting( ) {

    return(
        <div>
        <input type='date'></input>
        <input type='time'></input>                  
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
