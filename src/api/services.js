import {axios} from 'axios';

export async function getServices() {
    try {
       
        const services= await axios.get('https://meetings-test.herokuapp.com/service?business_id=96ea4a06-cfad-4dfc-9be6-afae1c54ede8')
        return services;
    }
    catch (error) {
        console.log('error in get services', error);
    }
}

// export async function getServices(){
//     return await fetch('https://meetings-test.herokuapp.com/service?business_id=96ea4a06-cfad-4dfc-9be6-afae1c54ede8')
//        .then(response => {
//            if (response.ok && response.status == 204)
//                alert(" קטגוריות אין");
//            else
//                if (response.ok)
//                    return response.json();
//                else
//                    throw new Error(response.status);
//        })
//        .then(data => {
//            if (data != null) {
//                return data;
//            }
//        })
//        .catch(err => console.log(err))

// }
