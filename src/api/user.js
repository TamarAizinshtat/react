import axios from 'axios';

export const login = async (user) => {

    try {
        return await axios.post('https://meetings-test.herokuapp.com/user/signin ', user);
    }
    catch (error) {
        console.log('error in add user');
    }

}