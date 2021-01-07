const Home = () => {


    // E is an event object 
    const handleClick = (e) => {
        console.log("whats up, i was clicked", e)
    }

    const handleClickAgain = (name, e) => {
        console.log("hello " + name, e.target)
    }


    return (
        <div className="home">
            <h1>Home</h1>

            {/* onClick function */}
            <button onClick={handleClick}> Click me </button>
            {/* arrow function for onClick */}
            <button onClick={(e) => handleClickAgain('justin', e)}> Click me now</button>
        </div>
    );
}

export default Home;