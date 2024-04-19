
import { NavLink } from 'react-router-dom';


export default function NavHeader() {
  return (
    <nav>
        <ul>
             <li>
          {/* <a href="/">Home</a> */}
          <NavLink to="/">Home</NavLink>
        </li>
            
        </ul>
    </nav>
  )
}