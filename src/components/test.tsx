import { render, screen } from "@testing-library/react"

import App from "../App"

describe("<App />", () => {
    it("should render the App", () => {
        const { container } = render(<App />)

        expect(
            screen.getByRole("heading", {
                name: "Pelvic Toolkit Calculators",
                level: 1,
            }),
        ).toBeInTheDocument()

        expect(
            screen.getByText(
                /Accurate outcome measures for calculating Pelvic analysis for patients./i,
            ),
        ).toBeInTheDocument()

        expect(container.firstChild).toBeInTheDocument()
    })
})
