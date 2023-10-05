import { useTrackedStore } from "state/Store"
import { Header } from "./Header"

export const Layout = (props: any) => {
    const theme = useTrackedStore().preferences.theme()
    return (
        <div data-theme={theme}>
            <div className="container mx-auto py-5 max-w-4xl px-0 md:px-5 h-full w-full">
                <Header title={props.title} />
                {/* <motion.div initial="exit" animate="enter" exit="exit" variants={animation}> */}
                {props.children}
                {/* </motion.div> */}
            </div>
        </div>
        /* <Footer /> */
    )
}
