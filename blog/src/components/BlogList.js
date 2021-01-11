//slc => tab
const BlogList = ({ blogs, title, handleDelete}) => {



    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props,blogs)




    // or can be written as => const BlogList = (blogs, title) => {

    return (
        //div.blog-list => tab
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>   
            ))}
        </div>
    );
}

export default BlogList;