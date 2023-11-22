import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <div className="navbar">
            <h1>Welcome!</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add">Add Photos</Link>

            </div>
        </div>
    );
}
 
export default Navbar;