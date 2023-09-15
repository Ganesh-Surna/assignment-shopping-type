import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation(){
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
            </ul>
        </nav>
    </header>
}