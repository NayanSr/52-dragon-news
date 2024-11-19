import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";

const NewsDetails = () => {
    const data = useLoaderData();
    const news= data.data[0];
    // console.log(news);
    const {title,details, image_url}= news;
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-8 mt-4">
        <section className="col-span-9 bg-purple-200 min-h-4 p-4">
            <h2>Dragon News</h2>
            <h2 className="text-xl">{title}</h2>
            <img src={image_url} alt={title} className="p-24" />
            <p className="mb-3">{details}</p>
            <Link className="text-orange-700 bg-slate-400 rounded-xl p-2 text-lg font-semibold" to='/'>Back to Home</Link>
        </section>
        <aside className="col-span-3 bg-pink-100 min-h-4 p-2"> <RightNavbar/></aside>
      </main>
    </div>
  );
};

export default NewsDetails;
