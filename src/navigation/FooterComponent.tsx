import { Button, Footer, Modal } from "react-daisyui"
import { Link } from "react-router-dom"

import { CalculatorIcon } from "@heroicons/react/24/outline"
import { marked } from "marked"
import { FC, useState, useRef, useCallback, useEffect } from "react"

export const FooterComponent = () => {
    const [changelog, setChangelog] = useState<string>("")

    const ref = useRef<HTMLDialogElement>(null)
    const handleShow = useCallback(() => {
        ref.current?.showModal()
    }, [ref])

    const handleHide = useCallback(() => {
        ref.current?.close()
    }, [ref])

    useEffect(() => {
        fetch("/CHANGELOG.md")
            .then((response) => response.text())
            .then((text) => setChangelog(text))
            .catch((error) => {
                console.error(error)
            })
    })
    return (
        <Footer className="grid grid-cols-2 sm:grid-cols-4 p-5 bg-neutral text-neutral-content mt-10 rounded-t-lg">
            <>
                <Modal ref={ref} className="prose">
                    <Modal.Header className="font-bold">Changelog</Modal.Header>
                    <Modal.Body
                        // rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                        dangerouslySetInnerHTML={{ __html: marked(changelog) }}
                    />
                    <Modal.Actions className="sticky">
                        <Button onClick={handleHide}>Close</Button>
                    </Modal.Actions>
                </Modal>
            </>
            <div className="">
                {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <CalculatorIcon width={50} height={50} />
                <p className="">
                    pelvictoolkit.com
                    <br />
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
                {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                <span
                    className="text-sm text-gray-400 underline"
                    onClick={handleShow}
                >
                    v{APP_VERSION}
                </span>
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
