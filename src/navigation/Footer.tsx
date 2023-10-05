import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center items-center">
                    {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    {/* <div className="px-5 py-2">
                        <Link to="/">
                            <img
                                src="/src/assets/logo.png"
                                alt="Logo"
                                className="h-20 w-20 object-contain bg-gray-800 rounded-full p-3"
                            />
                        </Link>
                    </div> */}
                    <div className="px-5 py-2">
                        {/* <Link to="/main"></Link> */}
                    </div>
                </nav>
                <div className="mt-8">
                    <p className="text-center text-base leading-6 text-gray-400">
                        &copy; {new Date().getFullYear()} PelvicToolkit.com. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
