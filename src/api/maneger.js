import axios from 'axios';

export const manegerLogin = async (maneger) => {

    try {
        return await axios.post('https://meetings-test.herokuapp.com/ ', maneger);
    }
    catch (error) {
        console.log('error in add user');
    }

}