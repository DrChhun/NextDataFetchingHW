export const Navbar = () => {
    return (
        <div className="flex justify-between container py-4">
            <img src="/legend-cinema-logo.png" alt="logo" />
            <div>
                <ul className="flex gap-8">
                    <li className="text-sm flex items-center duration-300 hover:bg-white hover:text-black text-white rounded-md px-4">
                        <a href="">Home</a>
                    </li>
                    <li className="text-sm flex items-center duration-300 hover:bg-white hover:text-black text-white rounded-md px-4">
                        <a href="">Popular</a>
                    </li>
                    <li className="text-sm flex items-center duration-300 hover:bg-white hover:text-black text-white rounded-md px-4">
                        <a href="">Romance</a>
                    </li>
                    <li className="text-sm flex items-center duration-300 hover:bg-white hover:text-black text-white rounded-md px-4">
                        <a href="">Anime</a>
                    </li>
                    <input className="px-4 py-2 rounded-md text-sm" type="text" placeholder="Type to search..." />
                </ul>
            </div>
        </div >
    )
}