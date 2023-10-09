import { useTrackedStore } from "state/Store"
import { HeaderComponent } from "./HeaderComponent"
import { FooterComponent } from "./FooterComponent"

import autoAnimate from "@formkit/auto-animate"
import { useEffect, useRef } from "react"

export const Layout = (props: any) => {
    const theme = useTrackedStore().preferences.theme()
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])
    return (
        <div data-theme={theme}>
            <div className="container flex flex-col justify-center mx-auto max-w-4xl px-0 md:px-5 min-h-screen">
                <HeaderComponent title={props.title} />
                {/* <motion.div initial="exit" animate="enter" exit="exit" variants={animation}> */}
                <main ref={parent} className="flex flex-1">
                    <div className="flex-1">{props.children}</div>
                </main>
                {/* </motion.div> */}
                <FooterComponent />
            </div>
        </div>
        /* <Footer /> */
    )
}
