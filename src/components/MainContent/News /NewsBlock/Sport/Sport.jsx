

let Sport = (props) => {
    return(
        <div>
            <div>
                <h2> {props.SportNews.headingText} </h2>
            </div>
            <div>
                <p> {props.SportNews.mainText} </p>
            </div>
        </div>
    )
}

export default Sport;