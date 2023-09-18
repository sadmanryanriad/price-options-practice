import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { path: '/', id: 'home', name: 'Home' },
        { path: '/about', id: 'about', name: 'About' },
        { path: '/products', id: 'products', name: 'Products' },
        { path: '/contact', id: 'contact', name: 'Contact' },
        { path: '*', id: 'not-found', name: 'Not Found' },
    ];


    return (
        <nav>
            {/* open close button  */}
            <div className="md:hidden text-xl" onClick={() => { setOpen(!open) }}>
                {open ? <AiOutlineMenu ></AiOutlineMenu> : <AiOutlineClose ></AiOutlineClose>}
            </div>
            {/* normal */}
            {/* <ul className={`md:flex gap-5 absolute md:relative md:justify-center ml-6 bg-slate-500 text-white p-3 rounded-xl ${open? 'hidden' : ''}`}>
                {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul> */}

            {/* with transition */}
            <ul className={`md:flex gap-5 absolute md:static md:justify-center ml-6 bg-slate-500 text-white p-3 rounded-xl duration-500 ${open ? '-top-60' : 'top-12'}`}>
                {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>
        </nav>
    );
};

export default NavBar;