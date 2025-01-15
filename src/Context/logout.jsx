import { createContext, useState } from "react";

const LogOutContext = createContext(null);
export const LogOutContextProvider = ({children})=>{
    const [openModal, setOpenModal] = useState(false);
    return(
        <LogOutContext.Provider value={{openModal, setOpenModal}}>
            {children}
        </LogOutContext.Provider>
    )
}
export default LogOutContext;