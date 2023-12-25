import useAuth from "../Hooks/UseAuth/UseAuth";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TaskList from "./TaskList";
import reorderQuoteMap from "./Reorder";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import reorder from "./Reorder";
import UseAxiosPublic from "../Hooks/useAxiosPublic/UseAxiosPublic";

const UserHome = () => {
  const { user } = useAuth();
  const axiosPublic = UseAxiosPublic();


  const [columns, setColumns] = useState({
    // Initialize your columns here
    toDo: [],
    ongoing: [],
    completed: [],
  });

  useEffect(() => {
    axiosPublic.get(`/tasks}`).then((res) => {
      setColumns(res.data);
    });
  }, [axiosPublic]);

  const [ordered, setOrdered] = useState(["toDo", "ongoing", "completed"]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    if (result.type === "COLUMN") {
      const reorderedOrder = reorder(ordered, source.index, destination.index);
      setOrdered(reorderedOrder);
      return;
    }

    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination,
    });

    setColumns(data.quoteMap);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      {/* Wrap your entire component with DndProvider */}
      <div>
        <h3 className="text-3xl">
          Hi, Welcome {user?.displayName ? user?.displayName : "Back"}
        </h3>
        <hr />

        <div className="mt-20">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="board" type="COLUMN" direction="horizontal">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {ordered.map((key, index) => (
                    <TaskList
                      key={key}
                      index={index}
                      title={key}
                      tasks={columns[key]}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </DndProvider>
  );
};

UserHome.defaultProps = {
  isCombineEnabled: false,
};

UserHome.propTypes = {
  isCombineEnabled: PropTypes.bool,
};

export default UserHome;
