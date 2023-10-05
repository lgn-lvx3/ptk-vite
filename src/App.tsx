import { SnackbarProvider } from "notistack"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { useTheme } from "react-daisyui"
import { store } from "state/Store"
import { ErrorPage } from "navigation/ErrorPage"
import { UDI6Page } from "navigation/UDI6Page"
import { Root } from "navigation/Root"
import { FIQLPage } from "navigation/FIQLPage"
import { POPDI6Page } from "navigation/POPDI6Page"
import { CRAD8Page } from "navigation/CRAD8Page"
import { PFDI20Page } from "navigation/PFDI20Page"
import { IIQ7Page } from "navigation/IIQ7Page"
import { VFISPage } from "navigation/VFISPage"
import { CCFISPage } from "navigation/CCFISPage"
import { PFIQ7Page } from "navigation/PFIQ7Page"
import { Home } from "navigation/Home"
import { Surveys } from "navigation/Surveys"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "surveys",
                element: <Surveys />,
            },
            {
                path: "surveys/udi6",
                element: <UDI6Page />,
            },
            {
                path: "surveys/fiql",
                element: <FIQLPage />,
            },
            {
                path: "surveys/popdi6",
                element: <POPDI6Page />,
            },
            {
                path: "surveys/crad8",
                element: <CRAD8Page />,
            },
            {
                path: "surveys/pfdi20",
                element: <PFDI20Page />,
            },
            {
                path: "surveys/iiq7",
                element: <IIQ7Page />,
            },
            {
                path: "surveys/vfis",
                element: <VFISPage />,
            },
            {
                path: "surveys/ccfis",
                element: <CCFISPage />,
            },
            {
                path: "surveys/pfiq7",
                element: <PFIQ7Page />,
            },
        ],
    },
])

function App() {
    useTheme(store.preferences.theme())
    const theme = useTheme()
    // set the theme to dark mode
    return (
        <SnackbarProvider
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            classes={{ containerRoot: "pb-16" }}
            maxSnack={5}
            autoHideDuration={1500}
        >
            <RouterProvider router={router} data-theme={theme} />
        </SnackbarProvider>
    )
}

export default App
