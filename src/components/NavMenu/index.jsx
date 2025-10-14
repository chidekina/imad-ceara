const NavMenu = ({ list, onclick }) => {
    return (
        <nav className="hidden md:flex items-center space-x-8">
            {
                list.map(item => (
                    <button onClick={() => onclick(item.section)} className="text-gray-800 hover:text-institutional transition font-family-body cursor-pointer font-semibold">{item.name}</button>
                ))}
        </nav>
    );
}

export default NavMenu;