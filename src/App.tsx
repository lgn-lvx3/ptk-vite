import { SnackbarProvider } from "notistack"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { useTheme } from "react-daisyui"
import { store } from "state/Store"
import { ErrorPage } from "navigation/ErrorPage"
import { UDI6Page } from "navigation/UDI6Page"
import { Root } from "navigation/Root"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "surveys/udi6",
                element: <UDI6Page />,
            },
        ],
    },
])

function App() {
    useTheme(store.preferences.theme())
    // set the theme to dark mode
    return (
        <SnackbarProvider
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            classes={{ containerRoot: "pb-16" }}
            maxSnack={5}
            autoHideDuration={1500}
        >
            <RouterProvider router={router} />
        </SnackbarProvider>
    )
}

export default App
