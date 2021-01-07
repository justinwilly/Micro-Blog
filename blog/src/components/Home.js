import { useState } from 'react'

const Home = () => {

    //a useState array of blogs
const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
]);


    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                </div>   
            ))}
        </div>
    );
}

export default Home;


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