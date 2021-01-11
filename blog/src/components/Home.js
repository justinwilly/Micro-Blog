import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {

    //a useState array of blogs
const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'justin', id: 3 }
]);


const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id != id)
    setBlogs(newBlogs);
}

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> 
        </div>
    );
}

export default Home;


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