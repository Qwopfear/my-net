
import s from './ProfileInfo.module.css'



const ProfileInfo = (props) => {
    
    return (
        <div>
           
            <div className={s.userInfo}>
                <div>
                    <img className={s.Avatar} src="https://i.pinimg.com/originals/70/8a/8c/708a8cb8209ac0579f68f84be928a243.jpg" alt="Avatar" srcset="" />
                </div>
                <div>
                    <h1>{props.name}</h1>
                    <h2>Status</h2>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;