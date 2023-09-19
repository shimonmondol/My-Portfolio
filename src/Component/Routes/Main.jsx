import { Outlet } from 'react-router-dom';
import Home from './../Home';
import ScrollToTop from './../ScrollToTop';
const Main = () => {
    return (
        <div >
            <ScrollToTop/>
            <Home></Home>
            <Outlet></Outlet>          
        </div>
    );
};

export default Main;