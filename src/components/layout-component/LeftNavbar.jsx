import { useEffect, useState } from "react";

const LeftNavbar = () => {
const [categiries, setCategiries] = useState([]);
useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=>setCategiries(data.data.news_category))
},[])

    return (
        <div>
            <h2 className="font-semibold">All News</h2>
            <div className="flex flex-col gap-2">
            {
                categiries.map((categiry,indx)=><button className="btn" key={indx}>{categiry.category_name}</button>)
            }
            </div>
        </div>
    );
};

export default LeftNavbar;