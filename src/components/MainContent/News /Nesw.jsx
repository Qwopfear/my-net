import NewsBlock from "./NewsBlock/NewsBlock";
import NewsHeading from "./NewsHeading/NewsHeading";
import NewsNav from "./NewsNav/NewsNav";


const News = (props) =>{
  
    return(
        <div>
            <NewsHeading />
            <NewsNav />
            <NewsBlock NewsData={props.NewsData}/>
        </div>
       
            
      
    )
}

export default News;