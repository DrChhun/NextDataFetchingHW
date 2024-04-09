import { GenereTitle } from "../GenereTitle"
import { SwipperClient } from "../ClientComponent/SwipperClient"

export const CategotyList = async ({ title, data }) => {
    return (
        <div className="container space-y-8 py-16">
            <GenereTitle title={title} />
            <SwipperClient data={data} />
        </div>
    )
}