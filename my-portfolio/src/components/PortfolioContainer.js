import React, {useState} from 'react';
import NavBar from './NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function PortfolioContainer() {
    const [currPage, setCurrPage] = useState('Home');

    const renderPage = () => {
        if(currPage === 'Home') {
            return <Home />;
        }
        if(currPage === 'About') {
            return <About />;
        }
        if(currPage === 'Contact') {
            return <Contact />;
        }
        return <Projects />;
    };

    const handlePageChange = (page) => setCurrPage(page);

    return (
        <div> 
            <NavBar currPage={currPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}