import { mapValuesKey } from "@udecode/zustood"
import { AppStore } from "./AppStore"
import { PreferencesStore } from "./PreferencesStore"

// Global store
export const rootStore = {
    app: AppStore,
    preferences: PreferencesStore,
}

// Global hook selectors
export const useStore = () => mapValuesKey("use", rootStore)

// Global tracked hook selectors
export const useTrackedStore = () => mapValuesKey("useTracked", rootStore)

// Global getter selectors
export const store = mapValuesKey("get", rootStore)

// Global actions
export const actions = mapValuesKey("set", rootStore)
