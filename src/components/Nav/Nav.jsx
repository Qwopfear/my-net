import s from './Nav.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import BestFriends from './BestFriends/BestFriends'


const Nav = (props) => {
   
    
    let currentBestFriends = 
        props.state.BestFriends.map(el => (  <BestFriends name={el.name} id={el.id}/>) )

    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink to="/Profile" activeClassName={s.selected}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/Dialogs" activeClassName={s.selected}>Dialogs</NavLink>
                </li>
                <li>
                    <NavLink to="/News" activeClassName={s.selected}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/Settings" activeClassName={s.selected}>Settings</NavLink>
                </li>
            </ul>

            <h2> Best Friends</h2>
            <div className={s.BestFriends}>
            
            {currentBestFriends}
            </div>
           
        </nav>
    )
}

export default Nav;