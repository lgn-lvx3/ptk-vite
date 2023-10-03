import { I18n, TranslateOptions } from "i18n-js"
import { TxKeyPath } from "./i18n"
import { store } from "state/Store"
import en from "./en"
import es from "./es"

export const i18n = new I18n()

// set up i18n
// default locale
i18n.defaultLocale = "en"
i18n.enableFallback = true
i18n.translations = { en, es }
i18n.locale = store.preferences.language()

export function translate(key: TxKeyPath, options?: TranslateOptions) {
    return i18n.t(key, options)
}
