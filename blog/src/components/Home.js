import { useState } from 'react'

const Home = () => {

    const [name, setName] = useState('Justin');

    const [age, setAge] = useState(29);

    // E is an event object 
    const handleClick = (e) => {
        setName('Jessica')
        setAge(25)
        console.log("whats up, i was clicked", e)
    }

    // const handleClickAgain = (name, e) => {
    //     console.log("hello " + name, e.target)
    // }


    return (
        <div className="home">
            <h1>Home</h1>
            <p>{ name } is { age} </p>
            {/* onClick function */}
            <button onClick={handleClick}> Click me </button>
            
            


            {/* arrow function for onClick */}
            {/* <button onClick={(e) => handleClickAgain('justin', e)}> Click me now</button> */}
        </div>
    );
}

export default Home;