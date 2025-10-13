import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SiteLayout = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Header scrollToSection={scrollToSection} />
            <Outlet />
            <Footer />
        </>
    );
}

export default SiteLayout;