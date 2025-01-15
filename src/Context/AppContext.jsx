import combineContext from "../Utils/combineContext";
import { LogOutContextProvider } from "./logout";
export const AppContextProvider = combineContext(LogOutContextProvider);