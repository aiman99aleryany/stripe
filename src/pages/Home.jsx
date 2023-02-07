import React from 'react';
import NavBar from 'components/navBar/NavBar';
import Hero from 'components/Hero/Hero';
import Unified from 'components/unified/Unified';
import Terminal from 'components/terminal/Terminal';
import Approach from 'components/approach/Approach';
import Scale from 'components/scale/Scale';
import More from 'components/more/More';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                    <Hero />
                    <Unified />
                    <Terminal />
                    <Approach />
                    <Scale />
                    <More />
            </main>
            <footer>
                    <Footer />
            </footer>
        </>
    );
}

export default Home;
