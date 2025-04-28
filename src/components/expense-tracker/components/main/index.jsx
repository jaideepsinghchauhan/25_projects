import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../summary";
import ExpenseView from "../view-expense";
import { GlobalContext } from "../../context";

const Main = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransaction,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0,
      expense = 0;
    allTransaction.forEach((transaction) => {
      transaction.type === "income"
        ? (income = income + parseFloat(transaction.amount))
        : (expense = expense + parseFloat(transaction.amount));
    });
    setTotalIncome(income);
    setTotalExpense(expense);
  }, [allTransaction]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        onClose={onClose}
        isOpen={isOpen}
      />
      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "column", "row"]}
      >
        <ExpenseView
          data={allTransaction.filter(
            (transaction) => transaction.type === "expense"
          )}
          type={"expense"}
        />
        <ExpenseView
          data={allTransaction.filter(
            (transaction) => transaction.type === "income"
          )}
          type={"income"}
        />
      </Flex>
    </Flex>
  );
};

export default Main;
