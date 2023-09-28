import { Theme } from "react-daisyui"

export const Layout = (props: any) => {
    return (
        <Theme>
            <div
                className="flex flex-col min-h-screen justify-between"
                // style={{
                //     backgroundImage: "url('/assets/floating-cogs.svg')",
                //     backgroundSize: "contain",
                //     backgroundPosition: "center center",
                //     backgroundRepeat: "repeat",
                // }}
            >
                {/* <Header title={props.title} /> */}
                <div className="my-auto">
                    {/* <motion.div initial="exit" animate="enter" exit="exit" variants={animation}> */}
                    <div className="max-w-screen-xl mx-auto my-10">
                        {props.children}
                    </div>
                    {/* </motion.div> */}
                </div>
                {/* <Footer /> */}
            </div>
        </Theme>
    )
}
