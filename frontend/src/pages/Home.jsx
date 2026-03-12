import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeNavbar from "../components/HomeNavbar";
import TrustedCompanies from "../components/TrustedCompanies";

export default function Home() {

    return (
        <>
            <HomeNavbar />
            <Hero />
            <TrustedCompanies />
            <Features />
            <Footer />
        </>
    )
}