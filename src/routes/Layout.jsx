import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="layout">
            <nav>
                Tech Talks
                <ul>
                    <li className="home-link" key="home-button">
                        <Link style={{ color: "white" }} to="/">
                            Home
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Layout;