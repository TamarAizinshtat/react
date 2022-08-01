import {axios} from 'axios';

export default function Services() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>you are on the Services!!!!!!!!!!!!</h2>
      </main>
    );
  }
  export async function get() {
    try {
        return await axios.get('https://meetings-test.herokuapp.com/service/')
    }
    catch (error) {
        console.log('error in add user');
    }
}
export const post = async (service) => {

    try {
        return await axios.post('https://meetings-test.herokuapp.com/service/ ', service);
    }
    catch (error) {
        console.log('error in add user');
    }
}
export const put = async (service) => {

    try {
        return await axios.put('https://meetings-test.herokuapp.com/service/ ', service);
    }
    catch (error) {
        console.log('error in put service: ', error);
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
