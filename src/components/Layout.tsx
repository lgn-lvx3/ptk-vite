import { store } from "state/Store"
import { Header } from "./Header"
import { Theme, useTheme } from "react-daisyui"

export const Layout = (props: any) => {
    const { theme, setTheme } = useTheme(store.app.theme())
    return (
        <Theme dataTheme={theme}>
            <div className="container w-full mx-auto py-5">
                <Header title={props.title} />
                {/* <motion.div initial="exit" animate="enter" exit="exit" variants={animation}> */}
                {props.children}
                {/* </motion.div> */}
            </div>
            {/* <Footer /> */}
        </Theme>
    )
}
