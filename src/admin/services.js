import axios from 'axios';

export default async function Services() {
    try{
    return await axios.get('https://meetings-test.herokuapp.com/user/ ')
}
    catch (error) {
        console.log('error in add user');
    }
  }


    


