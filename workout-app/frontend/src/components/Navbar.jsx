import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <NavLink to="/">
          <h1>GyMatrix</h1>
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar