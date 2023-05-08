import { createContext } from "react";
import { useState } from "react";

export const BaseContext = createContext();
BaseContext.displayName = 'BaseContextAA';
function BaseProvider(props) {
    const [lang, setLang] = useState("vn");

    return <BaseContext.Provider value={{lang, setLang}}>
        {props.children}
    </BaseContext.Provider>
    
}

export default BaseProvider;