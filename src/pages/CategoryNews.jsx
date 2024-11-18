import { useLoaderData } from "react-router-dom";
import NewsCart from "../components/NewsCart";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  // console.log(data);
  return (
    <div>
      <h2 className="text-lg font-semibold my-4">Dragon News Home</h2>
      <p className="text-gray-400">{news.length} News Found on this Category</p>
      <div>
{
    news.map(singleNews=> <NewsCart key={singleNews._id} news={singleNews}></NewsCart>)
}
      </div>
    </div>
  );
};

export default CategoryNews;
