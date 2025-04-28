import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "",
    amount: 0,
    description: "",
  });
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransaction, setAllTransaction] = useState([]);
  const handleFormSubmit = (currFormData) => {
    console.log("currFormData", currFormData);
    if (!currFormData.description || !currFormData.amount) {
      return;
    }

    setAllTransaction([...allTransaction, { ...currFormData, id: Date.now() }]);
    console.log("allTransaction", allTransaction);
  };
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransaction,
        setAllTransaction,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
