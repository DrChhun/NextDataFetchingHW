import { Card } from "../Card/Card"
import { GenereTitle } from "../GenereTitle";
import Link from 'next/link'

export const ALlMoviesList = async (props) => {
    return (
        <div className="container space-y-8 py-16">
            <GenereTitle title={"All Movies"} />
            <div className="flex overflow-x-scroll gap-8">
                {props.data.map(x => (
                    <div key={x.movie_id}>
                        <Link href={`/movie-details/${x.movie_id}`}>
                            <Card title={x.movie_title} image={x.image} description={x.description} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}