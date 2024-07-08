import { createContext } from "react";

export const AppContext = createContext()



const ContextProvider = (props) => {
    const mob = '45678'
    return (
        <AppContext value={mob}>
            {props.children}
        </AppContext>
    )
}

export default ContextProvider


