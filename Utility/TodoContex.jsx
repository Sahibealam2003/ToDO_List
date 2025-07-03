import { createContext, useContext, useEffect, useState } from "react";
const toDosData = createContext();

export const ToDosData = ({ children }) => {
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDetailEditing, setIsDetailEditing] = useState(false);

  const [storeTodos, setStoreTodos] = useState(() => {
    // Jab app start hoti hai, ye line check karti hai ki localStorage mein pehle se koi todos saved hain ya nahi.
    // Agar hain, toh unko le lo. Agar nahi hain, toh ek empty todo list se kaam shuru karo.
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [editTitle, setEditTitle] = useState("");
  const [editDiscription, setEditDiscription] = useState("");

  useEffect(() => {
    // Jab bhi aap todos add, delete ya update karte ho — ye code unhe browser ke localStorage mein
    // automatically save kar deta hai.
    localStorage.setItem("todos", JSON.stringify(storeTodos));
  }, [storeTodos]);

  return (
    <toDosData.Provider
      value={{
        isEditing,
        setIsEditing,
        storeTodos,
        setStoreTodos,
        editTitle,
        setEditTitle,
        editDiscription,
        setEditDiscription,
        editId,
        setEditId,
        isDetailEditing,
        setIsDetailEditing,
      }}
    >
      {children}
    </toDosData.Provider>
  );
};

export function toDosValue() {
  return useContext(toDosData);
}
