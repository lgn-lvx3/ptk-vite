import { Outlet } from "react-router-dom"
import { Layout } from "./Layout"
import { Theme, useTheme } from "react-daisyui"
import { store } from "state/Store"

export const Root = () => {
    const { theme, setTheme } = useTheme(store.app.theme())
    return (
        <Theme dataTheme={theme} className="bg-base-100">
            <Layout title="Pelvic Toolkit">
                <h1>Root</h1>
                <Outlet />
            </Layout>
        </Theme>
    )
}
