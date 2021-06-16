import s from './Hot.module.css'


let Hot = (props) => {


    return (
        <div className={s.content} >
            <h1>
                {props.headingText}
            </h1>
            <p>
                {props.mainText}
            </p>
        </div>
    )
}



export default Hot;