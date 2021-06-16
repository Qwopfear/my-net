

let Politics = (props) => {
    return(
        <div>
            <div>
                <h2> {props.PoliticsNews.headingText} </h2>
            </div>
            <div>
                <p>{props.PoliticsNews.mainText}</p>
            </div>
        </div>
    )
}

export default Politics;