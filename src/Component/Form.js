import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  ButtonGroup,
  Select,
} from "@chakra-ui/react";
import { Input, Textarea } from "@chakra-ui/react";
const Form = ({ isOpen, onClose, handleForm, onSubmit, todoFormData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody className="p-4">
          <form method="post" onChange={handleForm} onSubmit={onSubmit}>
            <div>
              <Label text="Title" isRequired={true} />
              <div className="input-container">
                <Input
                  required
                  name="title"
                  size="sm"
                  placeholder="Enter your todo"
                  defaultValue={todoFormData.title}
                />
              </div>
            </div>
            <div>
              <Label text="Description" />
              <div className="input-container">
                <Textarea
                  name="description"
                  size="sm"
                  placeholder="Is there any description you will like to provide?"
                  defaultValue={todoFormData.description}
                />
              </div>
            </div>
            <div>
              <Label text="Priority" />
              <div className="input-container">
                <Select
                  name="priority"
                  size="sm"
                  placeholder="Select option"
                  required
                  defaultValue={todoFormData.priority}
                >
                  <option value="l">Low</option>
                  <option value="m">Medium</option>
                  <option value="h">High</option>
                  <option value="r">Resolved</option>
                </Select>
              </div>
            </div>
            <div>
              <Label text="Tags" />
              <div className="input-container">
                <Input
                  name="tags"
                  size="sm"
                  placeholder={`Enter "," for multiple tags`}
                  defaultValue={todoFormData.tags}
                />
              </div>
            </div>
            <div className="flex py-4">
              <ButtonGroup variant="outline" spacing="6">
                <Button colorScheme="blue" size="sm" type="submit">
                  Add
                </Button>
                <Button colorScheme="red" size="sm" onClick={onClose}>
                  Close
                </Button>
              </ButtonGroup>
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Form;

export const Label = ({ text, isRequired }) => {
  return (
    <div className="label py-2">
      {text} {isRequired && <span className="text-red-600"> *</span>}
    </div>
  );
};
