import { Outlet } from "react-router-dom"
import { Layout } from "./Layout"
import { Theme, useTheme } from "react-daisyui"
import { store } from "state/Store"
import { useEffect } from "react"

export const Root = () => {
    const { theme, setTheme } = useTheme(store.preferences.theme())

    useEffect(() => {}, [])
    return (
        <Theme dataTheme={theme} className="bg-base-100">
            <Layout title="Pelvic Toolkit">
                <Outlet />
            </Layout>
        </Theme>
    )
}
