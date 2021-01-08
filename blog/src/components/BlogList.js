//slc => tab
const BlogList = (props) => {

    const blogs = props.blogs;
    const title = props.title;
    console.log(props,blogs)

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
                </div>   
            ))}
        </div>
    );
}

export default BlogList;