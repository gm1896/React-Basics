import { useState } from 'react';

const Home = () => {
    const [name,setName] = useState('Gaurav');
    const [age,setAge] = useState(24);
    const handleClick = () => {
        setName('Flash');
        setAge(25);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
     );
}
 
export default Home;