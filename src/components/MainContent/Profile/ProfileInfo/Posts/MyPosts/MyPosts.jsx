import s from './MyPosts.module.css'

const MyPosts = (props) => {


    return (
        <div  className={s.MyPosts}>
            <div>
               
            </div>
            <div className={s.MyPostsContent}>
            <img src="https://i.pinimg.com/originals/70/8a/8c/708a8cb8209ac0579f68f84be928a243.jpg" alt="zatychka"/>
                <span>{props.text}</span>
                <div >
                    <span>Like`s {props.likes}</span>
                </div>
            </div>


        </div>
    )
}

export default MyPosts;