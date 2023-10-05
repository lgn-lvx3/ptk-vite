import { Outlet } from "react-router-dom"
import { Layout } from "./Layout"
import { Hero, Button } from "react-daisyui"

export const Root = () => {
    return (
        <Layout title="Pelvic Toolkit">
            <Outlet />
        </Layout>
    )
}
