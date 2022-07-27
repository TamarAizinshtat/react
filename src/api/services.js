import axios from 'axios';

export async function get() {
    try {
        return await axios.get('https://meetings-test.herokuapp.com/service/')
    }
    catch (error) {
        console.log('error in add user');
    }
}
