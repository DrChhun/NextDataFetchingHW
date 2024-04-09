import { GenereTitle } from "../GenereTitle"
import { SwipperClient } from "../ClientComponent/SwipperClient"

export const AllActionList = async (props) => {
    return (
        <div className="container space-y-8 py-16">
            <GenereTitle title={"Action Movies"} />
            <SwipperClient data={props} />
        </div>
    )
}