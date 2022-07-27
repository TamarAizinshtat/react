export default function Services() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>you are on the Services!!!!!!!!!!!!</h2>
      </main>
    );
  }
  export default async function get() {
    try {
        return await axios.get('https://meetings-test.herokuapp.com/service/')
    }
    catch (error) {
        console.log('error in add user');
    }
}
