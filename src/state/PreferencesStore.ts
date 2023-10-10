import { createStore } from "@udecode/zustood"

export type SupportedLanguage = {
    code: string
    name: string
}

interface State {
    theme: string
    supportedLanguages: SupportedLanguage[]
    language: string
}

const initialState: State = {
    theme: "light",
    supportedLanguages: [
        {
            code: "en",
            name: "English",
        },
        {
            code: "es",
            name: "Español",
        },
    ],
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
