import { NavLink } from 'react-router-dom';
import s from './NewsNav.module.css'

let NewsNav = () => {
    return (
        <div className={s.NewsNav_Div}>
            <ul className={s.NewsNav_Ul}>
                <li>
                    <NavLink to='/News/Hot' activeClassName={s.ActiveNewsLink}> Hot </NavLink>
                </li>
                <li>
                    <NavLink to='/News/Friends' activeClassName={s.ActiveNewsLink}> Frends </NavLink>
                </li>
                <li>
                    <NavLink to='/News/Publick' activeClassName={s.ActiveNewsLink}> Publis </NavLink>
                </li>
                <li>
                    <NavLink to='/News/Sport' activeClassName={s.ActiveNewsLink}> Sport </NavLink>
                </li>
                <li>
                    <NavLink to='/News/Politics' activeClassName={s.ActiveNewsLink}> Politics </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NewsNav;