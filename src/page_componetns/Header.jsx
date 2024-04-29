import './Header.css'
import { Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function HeaderMain({id}){
    return(
        <>
        <nav>
            <div className="container nav_container">
                <Link to="/" className='nav_logo'>
                    {/* <img src={} alt=''></img> */}
                </Link>
                <ul className="nav_menu">
                    <li><Link to="/profile"> Pato Cuak</Link></li>
                    <li><Link to="/create"> Create</Link></li>
                    <li><Link to="/authors"> Authors</Link></li>
                    <li><Link to="/logout"> logout</Link></li>

                </ul>
                <button className="nav__tog-btn">
                    <AiOutlineClose/>
                </button>

            </div>

        </nav>
        </>
    )
}

export default HeaderMain