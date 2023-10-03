import { createStore } from "@udecode/zustood"

export type SupportedLanguage = "en" | "es"

interface State {
    theme: "light" | "dark"
    language: SupportedLanguage
}

const initialState: State = {
    theme: "light",
    language: "en",
}

export const PreferencesStore = createStore("Preferences")(
    { ...initialState },
    {
        devtools: { enabled: true },
        immer: { enabledAutoFreeze: true },
        persist: {
            enabled: true,
        },
    },
)
