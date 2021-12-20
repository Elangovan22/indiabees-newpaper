import LogoImage from './images/logo-indiaBees.png'

const NavBar = () => {
    
    return (
        <nav className="navbar">
            <div className="navbartitle">
                <img src={LogoImage} className='header-logo' alt="logo" />
                <h1 className='padding-10'> IndiaBees News Paper</h1>
            </div>
            <div className="navbarsections">
                <a href="/contact-us">Contact</a>
                <a href="/create">Add News</a>
                <a href="/">Home</a>
               
            </div>
        </nav>
    );
}

export default NavBar;