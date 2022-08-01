import axios from 'axios';

export const get = async (id) => {

    try {
        return await axios.get('https://meetings-test.herokuapp.com/business/ '+ id);
    }
    catch (error) {
        console.log('error in get business user', error);
    }

}
export const getAll = async () => {

    try {
        return await axios.get('https://meetings-test.herokuapp.com/business/ ');
    }
    catch (error) {
        console.log('error in get business', error);
    }

}
export const post = async (business) => {

    try {
        return await axios.post('https://meetings-test.herokuapp.com/business/ ', business);
    }
    catch (error) {
        console.log('error in add business: ', error);
    }

}
export const put = async (business) => {

    try {
        return await axios.put('https://meetings-test.herokuapp.com/business/', business);
    }
    catch (error) {
        console.log('error in put business: ', error);
    }

}