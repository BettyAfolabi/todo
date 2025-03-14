import { useState } from "react";
import useToDoContext from "./use-todo-context";
import { Button, Stack, useTheme, useMediaQuery } from "@mui/material";

function AddToDo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [task, setTask] = useState("");

  const { addTodo } = useToDoContext();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };
  return (
    <Stack>
    <form onSubmit={handleSubmit}>
      <Stack
        spacing={2}
        direction={isMobile ? "column" : "row"} 
        justifyContent="center"
        alignItems="center" 
      >
        <input
          value={task}
          onChange={handleChange}
          placeholder="I need to..."
          size="small"
          style={{ width: isMobile ? "100%" : "60%", padding: "8px" }} 
        />
        <Button
          type="submit"
          sx={{
            backgroundColor: "#884332",
            fontSize: "16px",
            width: isMobile ? "100%" : "auto", 
          }}
          variant="contained"
        >
          Add Task
        </Button>
      </Stack>
    </form>
  </Stack>
  );
}

export default AddToDo;
