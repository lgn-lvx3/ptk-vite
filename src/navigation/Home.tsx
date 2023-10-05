import { Link } from "react-router-dom"
import { Hero, Button } from "react-daisyui"
import { translate } from "utils/i18n"

export const Home = () => {
    return (
        <div className="flex flex-1 h-full">
            <Hero>
                <Hero.Content className="lg:flex-row-reverse">
                    <img
                        src="/src/assets/calculator-logo.png"
                        alt="logo"
                        className="hidden max-w-sm rounded-lg shadow-2xl md:block"
                    />
                    <div className="px-5">
                        <h1 className="text-5xl font-bold">
                            {translate("hero.title")}
                        </h1>
                        <p className="py-6">{translate("hero.subtitle")}</p>
                        <Link to="/surveys">
                            <Button color="primary">
                                {translate("hero.action")}
                            </Button>
                        </Link>
                    </div>
                </Hero.Content>
            </Hero>
        </div>
    )
}
