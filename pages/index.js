import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/hero';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import About from '../components/about/about';
import PolicySection from '../components/PolicySection/PolicySection';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import ScrollingText from '../components/scrollingText/scrollingText';
import Footer from '../components/footer/Footer';


const HomePage = () => {

    return (
        <Fragment>
            <div>
                <Header />
                <main className="page_content">
                    <Hero />
                    {/* <FeaturesSection /> */}
                    {/* <ScrollingText/> */}
                    <About />
                    <PolicySection />
                    <ServiceSection />
                    <Footer/>
                </main>
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;