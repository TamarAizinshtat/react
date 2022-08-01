import axios from 'axios';

export const get = async (id) => {

    try {
        return await axios.get('https://meetings-test.herokuapp.com/user/ '+ id);
    }
    catch (error) {
        console.log('error in get user', error);
    }

}

export const post = async (user) => {

    try {
        return await axios.post('https://meetings-test.herokuapp.com/user/ ', user);
    }
    catch (error) {
        console.log('error in add user');
    }
}
export const userLogin = async (user) => {

    try {
        return await axios.post('https://meetings-test.herokuapp.com/user/signin ', user);
    }
    catch (error) {
        console.log('error in add user');
    }

}

export const put = async (user) => {

    try {
        return await axios.put('https://meetings-test.herokuapp.com/user/', user);
    }
    catch (error) {
        console.log('error in put user: ', error);
    }

}