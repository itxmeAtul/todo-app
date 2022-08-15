import "./App.css";
import Header from "./Component/Header";
import CustomCard from "./Component/Card";
import TodoCard from "./Component/TodoCard";
import Form from "./Component/Form";
import { Box, ChakraProvider, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { uuidv4 } from "./Helpers/util";

function App() {
  const initialValues = { title: "", description: "", tags: "", priority: "" };
  const [formData, setFormData] = useState(initialValues);
  const [formModel, setFormModel] = useState(false);
  const [todo, setTodo] = useState([
    {
      title: "Buy Milk",
      description: "Buy Milf from kamal store",
      tags: "Milk,shop",
      priority: "l",
      id: "9ca9eed9-e138-4113-863a-26c577ecefa3",
    },
    {
      title: "Buy Cheese",
      description: "Buy Cheese from kamal store",
      tags: "Cheese,shop",
      priority: "r",
      id: "8ca9eed9-e138-4113-863a-26c577ecefa3",
    },
  ]);
  function handleFormModel() {
    setFormModel(!formModel);
    setFormData(initialValues);
  }
  const toast = useToast();
  function handleForm(e) {
    // console.log(e.target.name,e.target.value,'form',formData)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function error(Message) {
    toast({
      position: "bottom-right",
      isClosable: true,
      render: () => (
        <Box color="red" p={3} bg="white" className="rounded-sm">
          {Message}
        </Box>
      ),
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!formData.id) {
      if (!formData.title || formData.title == "")
        return error("Title cannot be empty");
      if (!formData.priority || formData.priority == "")
        return error("Please select a priority");
      formData.id = uuidv4();
      setTodo([...todo, formData]);
    } else {
      setTodo([...todo.filter((xx) => xx.id !== formData.id), formData]);
    }

    handleFormModel();
  }

  function onTodoHandle(e) {
    handleFormModel();
    setFormData({ ...formData, ...e });
  }

  return (
    <ChakraProvider>
      <div id="todo">
        <CustomCard>
          <Header
            handleForm={handleFormModel}
            showButton={true}
            titleCss={"font-semibold text-gray-600"}
            formTitle={"To-do List"}
          />
          {todo
            .filter((xx) => xx.priority !== "r")
            .map((el) => {
              return (
                <TodoCard
                  {...el}
                  key={el.id}
                  time={"Today"}
                  onTodoClick={() => {
                    onTodoHandle(el);
                  }}
                  disable={false}
                />
              );
            })}
          <Header
            formTitle={"Completed Task"}
            titleCss={"font-semibold text-gray-600"}
          />
          {todo
            .filter((xx) => xx.priority === "r")
            .map((el) => {
              return (
                <TodoCard cardStyle={""} disable={true} {...el} key={el.id} />
              );
            })}
        </CustomCard>

        <Form
          todoFormData={formData}
          isOpen={formModel}
          onClose={handleFormModel}
          handleForm={handleForm}
          onSubmit={onSubmit}
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
