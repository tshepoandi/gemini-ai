import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">Home</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Share</a></li>
      <li>
        <details>
          <summary>
            My Songs
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar