import { Link } from "react-router-dom";

const HomeNewsList = ({news}) => {

    //const news = props.news

    return ( 
        <div className="news-list">
            {news.map((data) => (
                <div className="blog-preview" key={data.id}>
                    <Link to= {`/news/${data.id}`}>
                    <h2>{data.title}</h2>
                    <h4>{data.shortcontent}</h4>
                    <p style= {{float: "right"}}>- {data.author} </p>
                    {/* <button onClick={() => props.handleDelete(data.id)}>Delete Button</button> */}
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default HomeNewsList;