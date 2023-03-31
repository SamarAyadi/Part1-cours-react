
import { NavLink, Link } from "react-router-dom"
import { useContext } from "react"
import { ProductContext } from "../Contexts/ProductContext"

function Navbar() {

  const data = useContext(ProductContext)
  console.log(data)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
        <Link className="navbar-brand" to="/">{data ? data.title : "PinguCoder"}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="ddnavbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink  className={(navData) => `nav-link ${navData.isActive ? "active" : ""} ` } to="/">Home
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className={(navData) => `nav-link ${navData.isActive ? "active" : ""} ` } to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className={(navData) => `nav-link ${navData.isActive ? "active" : ""} ` } to="/contact">Contact</NavLink>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar