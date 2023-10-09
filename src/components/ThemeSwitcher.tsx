import { FC, useEffect } from "react"
import { Button, Toggle, useTheme } from "react-daisyui"
import { actions, useTrackedStore } from "state/Store"

export const ThemeSwitcher: FC = () => {
    const userTheme = useTrackedStore().preferences.theme()
    const { theme, setTheme } = useTheme(userTheme)

    useEffect(() => {
        setTheme(userTheme)
    }, [userTheme])

    return (
        <>
            <Button
                onClick={() => {
                    const theme = userTheme === "dark" ? "light" : "dark"

                    actions.preferences.theme(theme)
                }}
                color="ghost"
            >
                <span className="text-xl">
                    {userTheme === "light" ? "☀️" : "🌙"}
                </span>
            </Button>
        </>
    )
}

export default ThemeSwitcher
