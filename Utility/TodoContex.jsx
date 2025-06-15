import { Children, createContext, useContext, useState } from "react";
const toDosData = createContext()
export const ToDosData = ({ children }) => {
    const [storeTodos, setStoreTodos] = useState([])
    const [editTitle, setEditTitle] = useState('')
    const [editDiscription, setEditDiscription] = useState('')
    console.log(storeTodos);
    
    return (
        <toDosData.Provider value={{ storeTodos, setStoreTodos, setEditDiscription,setEditTitle, editDiscription,editTitle }}>
            {children}
        </toDosData.Provider>
    )
}
export function toDosValue() {
    return useContext(toDosData)
}