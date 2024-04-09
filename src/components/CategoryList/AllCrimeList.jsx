import { GenereTitle } from "../GenereTitle"
import { SwipperClient } from "../ClientComponent/SwipperClient"

export const AllCrimeList = async (props) => {
    return (
        <div className="container space-y-8 py-16">
            <GenereTitle title={"Hollywood Movies"} />
            <SwipperClient data={props} />
        </div>
    )
}