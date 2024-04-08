import { Card } from "../Card/Card"
import { GenereTitle } from "../GenereTitle";

export const ALlMoviesList = async (props) => {
    console.log("list", props);
    return (
        <div className="px-32 space-y-8 py-16">
            <GenereTitle title={"All Movies"} />
            <div className="grid grid-cols-4 gap-4">
                {props.data.map((x, index) => (
                    <div key={index}>
                        <Card title={x.movie_title} image={x.image} description={x.description} />
                    </div>
                ))}
            </div>
        </div>
    )
}