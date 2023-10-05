import { Outlet } from "react-router-dom"
import { Layout } from "./Layout"
import { useTrackedStore } from "state/Store"

export const Root = () => {
    return (
        <Layout title="Pelvic Toolkit">
            <Outlet />
        </Layout>
    )
}
