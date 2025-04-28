import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const TransactionForm = ({ isOpen, onClose }) => {
  const { formData, setFormData, handleFormSubmit } = useContext(GlobalContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(formData);
    setFormData({ type: "", amount: 0, description: "" });
    onClose();
  };
  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction Description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction Amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt={"5"} value={formData.type}>
              <Radio
                name="type"
                color={"blue"}
                value="income"
                onChange={handleFormChange}
              >
                Income
              </Radio>
              <Radio
                name="type"
                color={"red"}
                value="expense"
                onChange={handleFormChange}
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={"4"}>
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default TransactionForm;
