import { GenereTitle } from "../GenereTitle"
import { SwipperClientAll } from "../ClientComponent/SwipperClientAll"

export const AllCategotyList = async ({ title, data }) => {
    return (
        <div className="container space-y-8 py-16">
            <GenereTitle title={title} />
            <SwipperClientAll data={data} />
        </div>
    )
}