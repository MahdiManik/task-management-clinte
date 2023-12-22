import { useDrop } from "react-dnd";
import { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import UseAxiosPublic from "../Hooks/useAxiosPublic/UseAxiosPublic";

const TaskList = ({ title, listName, AddTask, onMoveTask }) => {
  const [tasks, setTasks] = useState([]);
  const axiosPublic = UseAxiosPublic();
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => onMoveTask(item.taskId, listName),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  useEffect(() => {

    axiosPublic.get(`/tasks}`).then((res) => {
      setTasks(res.data);
    });
  }, [axiosPublic]);
  console.log(tasks);

  return (
    <div
      ref={drop}
      style={{ border: `2px dashed ${isOver ? "red" : "black"}` }}
    >
      <h3>{title}</h3>
      <div>
        {tasks.map((task) => (
          <SingleTask key={task.id} taskId={task.id} />
        ))}
      </div>
      <SingleTask onSubmit={(data) => AddTask(data, listName)} />
    </div>
  );
};

export default TaskList;
