import { Link, Outlet, useLocation } from 'react-router-dom';

export const Page1 = () => {
    const isHomePage = useLocation().pathname === "/Page1";
    return(
        <>
        { isHomePage ? <h1>Page1ページです</h1> : <Outlet />}
         <div>
            <br />
            <Link to='detaila'>DetailA</Link>
            <br />
            <Link to='detailb'>DetailB</Link>
        </div>

          
        </>
    );
};