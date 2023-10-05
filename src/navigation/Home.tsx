import { Link } from "react-router-dom"
import { Hero, Button } from "react-daisyui"
import { i18n, translate } from "utils/i18n"
import { useStore, useTrackedStore } from "state/Store"
import { useEffect, useState } from "react"

import logo from "/src/assets/calculator-logo.png"

export const Home = () => {
    const language = useTrackedStore().preferences.language()

    const [title, setTitle] = useState(translate("hero.title"))
    const [subtitle, setSubtitle] = useState(translate("hero.subtitle"))
    const [action, setAction] = useState(translate("hero.action"))

    useEffect(() => {
        setTitle(translate("hero.title"))
        setSubtitle(translate("hero.subtitle"))
        setAction(translate("hero.action"))
    }, [language])

    return (
        <div className="flex flex-1 h-full">
            <Hero>
                <Hero.Content className="lg:flex-row-reverse">
                    <img
                        src={logo}
                        alt="logo"
                        className="hidden max-w-sm rounded-lg shadow-2xl md:block"
                    />
                    <div className="px-5">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{subtitle}</p>
                        <Link to="/surveys">
                            <Button color="primary">{action}</Button>
                        </Link>
                    </div>
                </Hero.Content>
            </Hero>
        </div>
    )
}
