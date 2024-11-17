import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
    return (
        <div className="w-11/12 bg-zinc-100 mx-auto pt-4">
            <header> <Header/> </header>  
            <section className="w-3/4 mx-auto"><LatestNews/></section>  
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;