import useAuth from "../Hooks/UseAuth/UseAuth";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskList from "./TaskList";

const UserHome = () => {
  const { user } = useAuth();


  const [tasks, setTasks] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

  const addTask = (task, list) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [list]: [...prevTasks[list], task],
    }));
  };

  const moveTask = (taskId, newList) => {
    setTasks((prevTasks) => {
      const updatedTasks = {
        todo: prevTasks.todo.filter((task) => task.id !== taskId),
        ongoing: prevTasks.ongoing.filter((task) => task.id !== taskId),
        completed: prevTasks.completed.filter((task) => task.id !== taskId),
      };
      updatedTasks[newList] = [
        ...prevTasks[newList],
        { id: taskId, title: "Task Title" },
      ];
      return updatedTasks;
    });
  };

  return (
    <div>
      <h3 className="text-3xl">
        Hi, Welcome {user?.displayName ? user?.displayName : "Back"}
      </h3>
      <hr />

      <div className="mt-20">
        <DndProvider backend={HTML5Backend}>
          <div>
            <TaskList
              title="To-Do"
              tasks={tasks.todo}
              onAddTask={addTask}
              onMoveTask={moveTask}
            />
            <TaskList
              title="Ongoing"
              tasks={tasks.ongoing}
              onAddTask={addTask}
              onMoveTask={moveTask}
            />
            <TaskList
              title="Completed"
              tasks={tasks.completed}
              onAddTask={addTask}
              onMoveTask={moveTask}
            />
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default UserHome;
