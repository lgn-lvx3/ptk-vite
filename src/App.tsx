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
    const { theme, setTheme } = useTheme(store.app.theme())

    // set the theme to dark mode
    return (
        <SnackbarProvider
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            classes={{ containerRoot: "pb-16" }}
            maxSnack={5}
            autoHideDuration={1500}
        >
            <RouterProvider router={router} />
            {/* <BaseSurvey survey={useTrackedStore().app.survey()} /> */}
            {/* <div className="max-w-screen-xl mx-auto">
                        <main className="flex flex-row sm:mt-6 md:mt-10 lg:mt-20 xl:mt-40 md:justify-center sm:mb-6 md:mb-12 lg:mb-24 xl:mb-48 px-4">
                            <div className="sm:text-center md:text-left lg:text-left justify-center">
                                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                    Pelvic Toolkit
                                    <br />
                                    <span className="text-indigo-600">
                                        Calculators
                                    </span>
                                </h2>
                                <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:pr-24">
                                    Accurate outcome measures for calculating
                                    Pelvic analysis for patients.
                                </p>
                                <div className="my-5">
                                    <Link href="/udi6">
                                    <a className="text-2xl font-extrabold text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                                        {"UDI6"} →
                                    </a>
                                </Link>
                                </div>
                            </div>
                            <div className="hidden lg:flex: xl:flex lg:inset-y-0 lg:right-0 lg:w-1/2 justify-center items-center">
                                <img
                                    className="h-full w-full object-fit"
                                    src="/assets/calculator.svg"
                                    alt=""
                                />
                            </div>
                        </main>
                    </div> */}
        </SnackbarProvider>
    )
}

export default App
