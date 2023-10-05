import { Outlet } from "react-router-dom"
import { Layout } from "./Layout"

export const Root = () => {
    return (
        <Layout title="Pelvic Toolkit">
            <Outlet />
        </Layout>
    )
}
