import { Link } from "react-router-dom";
const Header = () => {
    const menuitem = <>
      <li><Link to='/home'>Home</Link></li> 
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/skill'>Skill</Link></li>
      <li><Link to='/project'>Project</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-blue-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitem}
                    </ul>
                </div>
                <a className="normal-case font-bold text-4xl text-white pl-20 pe-12">Shimon-Portfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="font-bold text-xl text-white menu menu-horizontal pr-8">
                    {menuitem}
                </ul>
            </div>
        </div>
    );
};

export default Header;