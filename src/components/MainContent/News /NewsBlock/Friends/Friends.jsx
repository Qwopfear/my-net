

let Friends = (props) => {
    return(
        <div>
            <div>
                <h2> {props.FriendsNews.headingText}</h2>
            </div>
            <div>
                <p> {props.FriendsNews.mainText}</p>
            </div>
        </div>
    )
}

export default Friends;