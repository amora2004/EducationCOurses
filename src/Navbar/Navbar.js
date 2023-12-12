
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assist/logo.PNG';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function NavBar() {
    
    const [activeClass, setActiveClass] = useState(localStorage.getItem('m'));

    const handleItemClick = (i) => {
        setActiveClass(i)
        localStorage.setItem('m', i)
    }
    console.log(activeClass)
    return (
        <Navbar expand="lg" className="bg-body-tertiary nav d-flex " fixed='top'>
            <Container fluid>
                <Navbar.Brand><Link to="#" className='logo'><img src={logo} alt='logo' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="list me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Link to='/' onClick={() => handleItemClick(0)}
                            className={activeClass == 0 ? "activ li" : " no li"}
                        >
                            الصفحة الرئيسية
                        </Link>
                        <Link to='/About' onClick={() => handleItemClick(1)}
                            className={activeClass == 1 ? "activ li" : " no li"}
                        >
                            حول
                        </Link>

                        <Link to="/Team"
                            onClick={() => handleItemClick(2)}
                            className={activeClass == 2 ? "activ li" : " no li"}
                        >
                            كادرنا
                        </Link>

                    </Nav>
                    <Link to='/Logein'
                        onClick={() => handleItemClick(4)} className={activeClass == 4 ? "activ li sign" : "no li sign"}
                    >تسجيل الدخول</Link>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar
