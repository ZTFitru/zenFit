import './Navbar.css'
import { IoMdFitness } from "react-icons/io";

const Navbar = ()=> {

    return (
        <header className='navbar'>
            <IoMdFitness className='logo'/>
            <ul className="navbar-menu">
                <li>Services</li>
                <li>About Us</li>
            </ul>
            <div className="navbar-right">
                <button>Sign In</button>
            </div>
        </header>
    )
}

export default Navbar;