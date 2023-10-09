import { Footer } from "react-daisyui"
import { Link } from "react-router-dom"

import { CalculatorIcon } from "@heroicons/react/24/outline"

export const FooterComponent = () => {
    return (
        <Footer className="grid grid-cols-2 sm:grid-cols-4 p-5 bg-neutral text-neutral-content mt-10 rounded-t-lg">
            <div className="">
                {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <CalculatorIcon width={50} height={50} />
                <p className="">
                    pelvictoolkit.com
                    <br />
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>

            <div className="">
                <Footer.Title>Surveys</Footer.Title>
                <Link to="/surveys">Surveys →</Link>
            </div>
            <div>
                <Footer.Title>Company</Footer.Title>
                <a className="link link-hover">About us →</a>
            </div>
            <div>
                <Footer.Title>Legal</Footer.Title>
                <a className="link link-hover">Terms of use →</a>
                <a className="link link-hover">Privacy policy →</a>
                <a className="link link-hover">Cookie policy →</a>
            </div>
        </Footer>
    )
}
