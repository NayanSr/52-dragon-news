import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="w-11/12 bg-zinc-100 mx-auto pt-4 font-poppins">
            <header> <Header/> </header>  
            <section className="w-3/4 mx-auto"><LatestNews/></section>  
            <nav className="w-11/12 mx-auto p-2"><Navbar/></nav>
            <main className="w-11/12 mx-auto grid gap-4 md:grid-cols-12">
                <aside className="col-span-3"><LeftNavbar/></aside>
                <section className="col-span-6">Main Content</section>
                <aside className="col-span-3"><RightNavbar/></aside>
            </main>
        </div>
    );
};

export default HomeLayout;