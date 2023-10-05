import { useTrackedStore } from "state/Store"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = (props: any) => {
    const theme = useTrackedStore().preferences.theme()
    return (
        <div data-theme={theme}>
            <div className="container flex flex-col justify-center mx-auto max-w-4xl px-0 md:px-5 min-h-screen">
                <Header title={props.title} />
                {/* <motion.div initial="exit" animate="enter" exit="exit" variants={animation}> */}
                <main className="flex flex-1">
                    <div className="flex-1">{props.children}</div>
                </main>
                {/* </motion.div> */}
                <Footer />
            </div>
        </div>
        /* <Footer /> */
    )
}
