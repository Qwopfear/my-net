import Friends from "./Friends/Friends";
import Hot from "./Hot/Hot";
import Politics from "./Politics/Politics";
import Publick from "./Publick/Publick";
import Sport from "./Sport/Sport";
import s from './NewBlock.module.css'
import { Route } from 'react-router-dom'

let NewsBlock = (props) => {
    
    let HotNewsMap = 
        props.NewsData.HotNews.map( el => (<Hot headingText={el.headingText} mainText={el.mainText} /> ) )
        

    
    return (
        <div className={s.NewsBlock}>
            <Route path='/News/Hot' render={() => (HotNewsMap) }  />
            <Route path='/News/Friends' render={() =>
                <Friends FriendsNews={props.NewsData.FrendsNews}/>} />
           <Route path='/News/Publick' render={() =>
                <Publick PublickNews={props.NewsData.PublisNews}/>} />
            <Route path='/News/Sport' render={() =>
                <Sport  SportNews={props.NewsData.SportNews}/>} />
             <Route path='/News/Politics' render={() =>
                <Politics PoliticsNews={props.NewsData.PoliticsNews}/>} />
            
        </div>


    )
}


export default NewsBlock;