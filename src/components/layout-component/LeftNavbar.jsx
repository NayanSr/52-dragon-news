import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
                categiries.map((category,indx)=>
                <NavLink to={`category/${category.category_id}`} className="btn" key={indx}>{category.category_name}</NavLink>
            )
            }
            </div>
        </div>
    );
};

export default LeftNavbar;