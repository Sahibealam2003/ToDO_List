import { Children, createContext, useContext, useState } from "react";
const toDosData = createContext()
export const ToDosData = ({ children }) => {
    const [storeTodos, setStoreTodos] = useState([])
    return (
        <toDosData.Provider value={{ storeTodos, setStoreTodos }}>
            {children}
        </toDosData.Provider>
    )
}
export function toDosValue() {
    return useContext(toDosData)
}