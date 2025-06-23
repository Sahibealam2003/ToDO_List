import { createContext, useContext, useState } from "react";
const toDosData = createContext();

export const ToDosData = ({ children }) => {
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDetailEditing, setIsDetailEditing] = useState(false);
  const [storeTodos, setStoreTodos] = useState([]);
  const [editTitle, setEditTitle] = useState('');
  const [editDiscription, setEditDiscription] = useState('');

  return (
    <toDosData.Provider value={{
      isEditing, setIsEditing,
      storeTodos, setStoreTodos,
      editTitle, setEditTitle,
      editDiscription, setEditDiscription,
      editId, setEditId,
      isDetailEditing, setIsDetailEditing
    }}>
      {children}
    </toDosData.Provider>
  );
};

export function toDosValue() {
  return useContext(toDosData);
}