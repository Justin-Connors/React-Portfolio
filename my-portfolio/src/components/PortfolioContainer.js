import React, {useState} from 'react';
import NavBar from './NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currPage, setCurrPage] = useState('About');

    const renderPage = () => {
        if(currPage === 'About') {
            return <About />;
        }
        if(currPage === 'Contact') {
            return <Contact />;
        }
        if(currPage === 'Resume') {
            return <Resume />;
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