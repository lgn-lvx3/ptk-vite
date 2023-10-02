import { useRouteError } from "react-router-dom"
import { Layout } from "./Layout"

export const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <Layout title="Error">
            <div className="container mx-auto flex flex-1 justify-center prose flex-col">
                <h1>Oops!</h1>
                <p>Page not found!</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </Layout>
    )
}
