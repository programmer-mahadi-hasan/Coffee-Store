import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container mx-auto py-4">
            <nav className='flex justify-between items-center'>
                <Link className='btn' to={"/"}>Home</Link>
                <Link className='btn' to={"/addCoffee"}>Add Coffee</Link>
                <Link className='btn' to={"/signIn"}>Sign In</Link>
                <Link className='btn' to={"/signUp"}>Sign Up</Link>
                <Link className='btn' to={"/users"}>Users</Link>
            </nav>
        </div>
    );
};

export default Header;