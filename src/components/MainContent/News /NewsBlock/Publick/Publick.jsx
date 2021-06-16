

let Publick = (props) => {
    return(
        <div>
            <div>
                <h2> {props.PublickNews.headingText} </h2>
            </div>
            <div>
                <p> {props.PublickNews.mainText} </p>
            </div>
        </div>
    )
}

export default Publick;