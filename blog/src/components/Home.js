import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {

    //a useState array of blogs
//original data of blogs    
// const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'justin', id: 3 }
// ]);

//new data for blogs
    const [blogs, setBlogs] = useState(null);

const [name, setName] = useState("justin")

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
}

//doesn't need to be stored as a const, just pass a function as an argument
// it runs on every render and can be used to fetch data
//[] this empty array makes it so it only runs on the first render
// useEffect(() => {
//     console.log('useEffect ran')
//     console.log(blogs)
// }, []); 

    useEffect(() => {
        //GET request
        fetch('http://localhost:8000/blogs')
        .then(response => {
            return response.json()
        })
        .then ((data) => {
            
        })
    })

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName("tanner")}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;



// put into seperate terminal to fill with api endpoints
// ****** npx json-server --watch data/db.json --port 8000 **********//

//********************//
    // const [name, setName] = useState('Justin');

    // const [age, setAge] = useState(29);

    // // E is an event object 
    // const handleClick = (e) => {
    //     setName('Jessica')
    //     setAge(25)
    //     console.log("whats up, i was clicked", e)
    // }

    // // const handleClickAgain = (name, e) => {
    // //     console.log("hello " + name, e.target)
    // // }


    //         <p>{ name } is { age} </p>
    //         {/* onClick function */}
    //         <button onClick={handleClick}> Click me </button>
            
    //         {/* arrow function for onClick */}
    //         <button onClick={(e) => handleClickAgain('justin', e)}> Click me now</button>


//********************//
    {/* filter method fires a callback function for each item in the array above */}
    // <BlogList blogs={blogs.filter((blog) => blog.author === "justin" )} title="Justin's Blogs"/> 