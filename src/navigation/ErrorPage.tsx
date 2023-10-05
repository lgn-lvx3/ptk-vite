import { useRouteError } from "react-router-dom"
import { Layout } from "./Layout"

import bgImage from "/src/assets/404.png"
import { Card } from "react-daisyui"
import { useTrackedStore } from "state/Store"

export const ErrorPage = () => {
    const error = useRouteError() as unknown as {
        data: string
        statusText: string
        message: string
    }

    return (
        <Layout title="Error">
            <div className="h-full">
                <Card imageFull className="my-auto">
                    <Card.Image src={bgImage} alt="Shoes" />
                    <Card.Body>
                        <Card.Title>Oops! Something went wrong.</Card.Title>
                        <p>
                            <i>{error.statusText || error.message}</i>
                        </p>
                        <p>
                            <i>{error.data}</i>
                        </p>
                    </Card.Body>
                </Card>
            </div>
        </Layout>
    )
}
