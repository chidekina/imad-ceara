import { Link } from 'react-router-dom';
import Button from '../Button';

const NavMenu = ({ list, onclick }) => {
    return (
        <nav className="hidden md:flex items-center space-x-8">
            {
                list.map((item, index) => (
                    item.isRoute ? (
                        <Button 
                            key={index}
                            as={Link}
                            to={`/${item.section}`}
                            variant="secondary"
                            size="md"
                            rounded
                        >
                            {item.name}
                        </Button>
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