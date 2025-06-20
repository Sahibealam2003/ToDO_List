import { Children, createContext, useContext, useState } from "react";
const toDosData = createContext()
export const ToDosData = ({ children }) => {
    const [isEditing,setIsEditing]= useState(false)
    const [storeTodos, setStoreTodos] = useState([])
    const [editTitle, setEditTitle] = useState('')
    const [editDiscription, setEditDiscription] = useState('')

    
    return (
        <toDosData.Provider value={{isEditing,setIsEditing,storeTodos, setStoreTodos, setEditDiscription,setEditTitle, editDiscription,editTitle }}>
            {children}
        </toDosData.Provider>
    )
}
export function toDosValue() {
    return useContext(toDosData)
}