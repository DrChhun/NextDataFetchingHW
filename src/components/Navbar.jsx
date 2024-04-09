import Link from "next/link"
export const Navbar = () => {
    const navData = [
        {
            name: "Home",
            link: "#"
        },
        {
            name: "Popular",
            link: "#"
        },
        {
            name: "Romance",
            link: "#"
        },
        {
            name: "Anime",
            link: "#"
        },
    ]
    return (
        <div className="flex justify-between absolute w-full top-0 py-4 px-32 z-10 ">
            <Link href={`/`}>
                <img src="/legend-cinema-logo.png" alt="logo" />
            </Link>
            <div>
                <ul className="flex gap-8">
                    {navData.map((x, index) => (
                        <li key={index} className="text-sm flex items-center duration-300 hover:bg-white hover:text-black text-white rounded-md px-4">
                            <a href="">{x.name}</a>
                        </li>
                    ))}
                    <input className="px-4 py-2 rounded-md text-sm" type="text" placeholder="Type to search..." />
                </ul>
            </div>
        </div >
    )
}