import { useState } from 'react'
import NavItem from './NavItem'

const data = [
    {id: 1, link: "#", title: "Home"},
    {id: 2, link: "#about", title: "About"},
    {id: 3, link: "#services", title: "Services"},
    {id: 4, link: "#contact", title: "Contact"}
]

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#")

    return (
        <nav>
            <a href="index.html"><h3>Logo</h3></a>
            <ul className='nav__menu'>
                {
                    data.map(item => <NavItem key={item.id} item={item} className={`${activeNav === item.link && 'active'}`} onClickNav={() => setActiveNav(item.link)}/>)
                }
            </ul>
        </nav>
    )
}

export default Navbar