export const Card = ({ image, title, description }) => {
    return (
        <div className="bg-white p-4 rounded-md space-y-4 w-[300px] h-full">
            <img src={image} className="rounded-md" alt="" />
            <div className="space-y-2">
                <h2 className="text-2xl text-slate-800 font-semibold">{title}</h2>
                <p className="text-slate-600 line-clamp-2">{description}</p>
            </div>
        </div>
    )
}