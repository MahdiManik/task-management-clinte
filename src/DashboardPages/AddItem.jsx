import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/useAxiosPublic/UseAxiosPublic";
import SectionTitle from "../Components/SectionTitle/SectionTitle";

const AddItem = () => {
  const axiosPublic = UseAxiosPublic();

  const { register, handleSubmit, reset } = useForm();

  const AddTask = async (data) => {
    // Make a POST request and add a new task on mongoDB
    const res = await axiosPublic.post("/tasks", data);

    Swal.fire({
      icon: "success",
      title: "Task Added Successfully!",
      text: `Task with title: ${res.data.title} has been added.`,
    });

    reset();
  };

  return (
    <div>
      <SectionTitle
        heading="Add New task"
        subHeading="What's new?"
      ></SectionTitle>
      <div>
        <div>
          <form
            className="flex flex-col justify-center items-center gap-6 scroll-mt-12"
            onSubmit={handleSubmit(AddTask)}
          >
            <label className="flex flex-col">
              <span>Title</span>

              <input
                className="input input-bordered w-[500px] "
                type="text"
                {...register("title", { required: true })}
              />
            </label>
            <label className="flex flex-col">
              <span>Description</span>
              <input
                className="input input-bordered w-[500px] h-[100px]"
                type="text-aria"
                {...register("description")}
              />
            </label>
            <label className="flex flex-col">
              <span>Deadline</span>

              <input
                className="input input-bordered w-[500px]"
                type="date"
                {...register("deadline")}
              />
            </label>
            <label className="mt-4">
              <span className="mr-4">Priority:</span>

              <select
                className="input input-bordered"
                {...register("priority")}
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </label>
            <button
              className="btn btn-outline btn-ghost mt-4 w-1/2"
              type="submit"
            >
              <input className="w-full" type="submit" value="Add Task" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
