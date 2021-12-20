import HomeNewsList from "./HomeNewsList";
import Loader from "./Loader";
import useServiceCall from "./useServiceCall";

const Home = () => {


    const {data, isLoading, error} = useServiceCall('http://localhost:8000/news');

    return (
        <div className="home">
            {
                error && <div> {error} </div>
            }
            {
                isLoading && <Loader/>
            }
            {  
                data && <HomeNewsList news={data} />
            }
        </div>
    );
}

export default Home;