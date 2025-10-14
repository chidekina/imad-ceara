import { Link } from 'react-router-dom';

const NavMenu = ({ list, onclick }) => {
    return (
        <nav className="hidden md:flex items-center space-x-8">
            {
                list.map((item, index) => (
                    item.isRoute ? (
                        <Link 
                            key={index}
                            to={`/${item.section}`} 
                            className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition rounded-lg font-semibold"
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <button 
                            key={index}
                            onClick={() => onclick(item.section)} 
                            className="text-gray-800 hover:text-institutional transition font-family-body cursor-pointer font-semibold"
                        >
                            {item.name}
                        </button>
                    )
                ))
            }
        </nav>
    );
}

export default NavMenu;