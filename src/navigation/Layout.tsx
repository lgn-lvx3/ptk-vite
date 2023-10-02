import { Header } from "./Header"

export const Layout = (props: any) => {
    return (
        <div className="container mx-auto py-5 max-w-4xl px-0 md:px-5 bg-base-100">
            <Header title={props.title} />
            {/* <motion.div initial="exit" animate="enter" exit="exit" variants={animation}> */}
            {props.children}
            {/* </motion.div> */}
        </div>
        /* <Footer /> */
    )
}
