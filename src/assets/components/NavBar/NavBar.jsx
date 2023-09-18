import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    
    const [open,setOpen] = useState(false);

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
            <div onClick={()=>{setOpen(!open)}}>
                {open? 'open' : 'close'}
            <AiOutlineMenu className="text-xl"></AiOutlineMenu>
            </div>
            <ul className="md:flex gap-5">
                {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>
        </nav>
    );
};

export default NavBar;