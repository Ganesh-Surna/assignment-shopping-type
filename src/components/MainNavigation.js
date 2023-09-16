import { NavLink, useRouteLoaderData } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation(){
    const token= useRouteLoaderData("root");

    return <header className={classes.header}>
        <h1>React Shopping</h1>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink to="/" className={({isActive})=>isActive? classes.active : ""} end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className={({isActive})=>isActive? classes.active : ""}>
                        Menu
                    </NavLink>
                </li>
                {!token && <li>
                    <NavLink to="/auth?mode=login" className={({isActive})=>isActive? classes.active : ""}>
                        Register
                    </NavLink>
                </li>}
                {token && <li className={classes.user}>
                    <div>SG</div>
                    {/* <ul>
                        <li>
                            <button>Logout</button>
                        </li>
                    </ul> */}
                </li>}
            </ul>
        </nav>
    </header>
}