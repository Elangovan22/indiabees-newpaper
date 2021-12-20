import { useParams } from "react-router-dom";
import Loader from "./Loader";
import useServiceCall from "./useServiceCall";

const DetailedItem = () => {

    const { id } = useParams();
    const {data, isLoading, error} = useServiceCall('http://localhost:8000/news/'+ id);

    return (
        <div className="home">
            {
                error && <div> {error} </div>
            }
            {
                isLoading && <Loader/>
            }
            {  
                data && (
                    <article>
                        <div className="detailed-page">
                            <h4 style={{width: "80%"}}>{data.title}</h4>
                            <h4 style={{width: "20%"}}>- {data.author} </h4>
                        </div>
                        
                        <h4>{data.content}</h4>
                       
                    </article>
                )
            }
        </div>
    );
}

export default DetailedItem;