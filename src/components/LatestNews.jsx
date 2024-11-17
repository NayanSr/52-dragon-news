import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-4 bg-green-200 p-4 rounded-2xl">
           <p className="bg-[#D72050] text-white py-2 px-4 rounded-xl">Latest</p>
           <Marquee pauseOnHover={true} speed={50} className="space-x-[40px]">
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, deleniti.</Link>
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, deleniti.</Link>
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, deleniti.</Link>
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, deleniti.</Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;