import { SnackbarProvider } from "notistack"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useTheme } from "react-daisyui"
import { store } from "state/Store"
import { ErrorPage } from "navigation/ErrorPage"
import { Root } from "navigation/Root"
import { Home } from "navigation/Home"
import { SurveysPage } from "navigation/SurveysPage"
import { BaseSurveyPage } from "navigation/BaseSurveyPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "surveys",
                element: <SurveysPage />,
            },
            {
                path: "surveys/udi6",
                element: <BaseSurveyPage name="UDI6" />,
            },
            {
                path: "surveys/fiql",
                element: <BaseSurveyPage name="FIQL" />,
            },
            {
                path: "surveys/popdi6",
                element: <BaseSurveyPage name="POPDI6" />,
            },
            {
                path: "surveys/crad8",
                element: <BaseSurveyPage name="CRAD8" />,
            },
            {
                path: "surveys/pfdi20",
                element: <BaseSurveyPage name="PFDI20" />,
            },
            {
                path: "surveys/iiq7",
                element: <BaseSurveyPage name="IIQ7" />,
            },
            {
                path: "surveys/vfis",
                element: <BaseSurveyPage name="VFIS" />,
            },
            {
                path: "surveys/ccfis",
                element: <BaseSurveyPage name="CCFIS" />,
            },
            {
                path: "surveys/pfiq7",
                element: <BaseSurveyPage name="PFIQ7" />,
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
