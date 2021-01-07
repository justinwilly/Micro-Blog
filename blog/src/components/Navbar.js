const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> The Micro Blog </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                }}>New Blog</a>
                {/* in line style (in javascript) */}
            </div>
        </nav>
    );
}


export default Navbar;