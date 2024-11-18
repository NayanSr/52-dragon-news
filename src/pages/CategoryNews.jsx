import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const {data}= useLoaderData();
    // console.log(data);
    return (
        <div>
            Category News: {data.length}
        </div>
    );
};

export default CategoryNews;