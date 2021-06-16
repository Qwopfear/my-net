import { NavLink } from 'react-router-dom'
import s from './Includutiots.module.css'

const Includutiots = (props) => {
    return (
        <div className={s.bum}>
           
           <NavLink to={'/Dialogs/'+ props.id} className={s.Link} activeClassName={s.ActiveLink}> <span>{props.name} </span> </NavLink>
           
        </div>
    )
}


export default Includutiots;