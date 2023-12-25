import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import UseAxiosPublic from "../Hooks/useAxiosPublic/UseAxiosPublic";

const SingleTask = ({ taskId }) => {
  const [task, setTask] = useState([]);
  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    // Fetch the specific task from the backend when the component mounts
    axiosPublic.get(`/tasks/${taskId}`).then((res) => {
      setTask(res.data);
    });
  }, [axiosPublic, taskId]);

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { taskId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{task.title}</h2>
          <p>{task.description}</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;

