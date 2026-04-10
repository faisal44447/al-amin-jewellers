import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AlAminJewellersLogo from '../../../assets/AlAminJewellersLogo.png';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const user_name = user?.displayName;
    const user_photo = user?.photoURL;

    const handleLogOut = () => {
        logOut()
            .then(() => {

                console.log("Logged out successfully");
            })
            .catch((error) => console.log("Log out error:", error));
    };

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/staff-records">Staff Records</Link></li>
        <li><Link to="/add-staff">Add Staff</Link></li>
    </>

    return (
        <div className="navbar bg-opacity-30 mb-5 text-yellow-500 glass shadow-lg">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl px-0 ml-2">
                    <img src={AlAminJewellersLogo} alt="Al Amin Logo" className="w-44 -mt-[35px]" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 text-lg font-medium">
                    {navOptions}
                </ul>
            </div>

            <div className="navbar-end gap-x-3">
                {
                    user ? (
                        <>
                            {/* টুলটিপ এখন সরাসরি মেইন ডিভ-এ আছে */}
                            <div className="tooltip tooltip-left" data-tip={user?.displayName || "User"}>
                                <div className="avatar">
                                    <div className="w-10 h-10 rounded-full ring ring-[#D1A054] ring-offset-base-100 ring-offset-2">
                                        <img
                                            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                                            alt="User"
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button onClick={handleLogOut} className="btn btn-ghost hover:bg-base-300 text-yellow-500 font-bold">
                                Log Out
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-ghost hover:bg-base-300 text-yellow-500 font-bold">
                                Log In
                            </button>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default NavBar;