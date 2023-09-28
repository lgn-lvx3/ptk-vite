import { mapValuesKey } from "@udecode/zustood";
import { AppStore } from "./AppStore";

// Global store
export const rootStore = {
  app: AppStore,
};

// Global hook selectors
export const useStore = () => mapValuesKey("use", rootStore);

// Global tracked hook selectors
export const useTrackedStore = () => mapValuesKey("useTracked", rootStore);

// Global getter selectors
export const store = mapValuesKey("get", rootStore);

// Global actions
export const actions = mapValuesKey("set", rootStore);
