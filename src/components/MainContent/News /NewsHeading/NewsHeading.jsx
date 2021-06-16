import s from './NewsHeading.module.css'

let NewsHeading = () => {
    
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
  
    return (
        <div className={s.NewsHeading}>
            <h1> News </h1>
            <h2 className={s.NewsTime}>  	UTC+3  <br/> {`${hours > 9 ?  hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}`} </h2>

        </div>
        
    )
}


export default NewsHeading;