import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ toggleDarkMode, darkmode }) => {
    const links = [
        {
            name: "Experience",
            link: "/",
        },
        {
            name: "Projects",
            link: "/",
        },
        {
            name: "About",
            link: "/",
        },
        {
            name: "Contact",
            link: "/",
        },
        {
            name: "Resume",
            link: "/",
        },
    ];

    return (
        <nav
            className={`${
                darkmode ? "hi" : "bye"
            } mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex`}
        >
            <ul className='p-2 flex'>
                {links.map((link) => {
                    return (
                        <li key={link.name} className='pr-2 pl-2 whiteLetter'>
                            {link.name}
                        </li>
                    );
                })}
            </ul>
            <button onClick={toggleDarkMode}>
                {darkmode ? (
                    <FaMoon className='icon moon' />
                ) : (
                    <IoMdSunny className='icon sun' />
                )}
            </button>
        </nav>
    );
};

export default Navbar;
