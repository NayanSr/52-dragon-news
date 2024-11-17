import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="w-11/12 bg-zinc-100 mx-auto pt-4 font-poppins">
            <header> <Header/> </header>  
            <section className="w-3/4 mx-auto"><LatestNews/></section>  
            <nav className="w-11/12 mx-auto p-2"><Navbar/></nav>
            <main className="w-11/12 mx-auto grid md:grid-cols-12">
                <aside className="col-span-3">Left Side</aside>
                <section className="col-span-6">Main Content</section>
                <aside className="col-span-3">Right Side</aside>
            </main>
        </div>
    );
};

export default HomeLayout;