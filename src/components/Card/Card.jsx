export const Card = ({ image, title, description }) => {
    return (
        <div className="rounded-md space-y-4 h-[250px]">
            <div className="relative h-full w-full group overflow-hidden rounded-md">
                <img src={image == "" || image == undefined || image == null ? `/firstimage.jpg` : image} className="h-full w-full group-hover:scale-105 duration-1000 rounded-md object-cover absolute" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                <div className="absolute z-10 p-4 bottom-0">
                    <p className="text-xl font-semibold capitalize text-white line-clamp-1">{title}</p>
                    <p className="line-clamp-1 text-white">{description}</p>
                </div>
            </div>
        </div>
    )
}