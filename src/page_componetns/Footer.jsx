import React from 'react'
import { Link} from 'react-router-dom'


const Footer = () => {
  return (
     <footer>
      <ul className="footer_zategory">
        <p>Thanks for comming!</p>
        <li><Link to= "authors" >More about me</Link></li>
        <p>gmail:</p>

      </ul>
     </footer>

  )
}

export default Footer