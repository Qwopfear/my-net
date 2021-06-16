import s from './BestFiends.module.css'


const BestFriends = (props) => {
    return (    
        <div>

            <ul className={s.BestFriends}>
                <li>
                    <img src="https://i.pinimg.com/originals/70/8a/8c/708a8cb8209ac0579f68f84be928a243.jpg" alt="Friend" />

                    <div> <span>{props.name}</span></div>
                </li>
            </ul>
        </div>

    )
}

export default BestFriends;