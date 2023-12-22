import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import Swal from "sweetalert2";
import UseAxios from "../../Hooks/UseAxios/UseAxios";
import UseCart from "../../Hooks/useCart/UseCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, _id, price } = item;
  const [, refetch] = UseCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxios();
  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        price,
        recipe,
        image,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Good job!",
            text: `${name} successfully added to your cart`,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "If You are not logged in",
        text: "Please login to Add to the Cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col w-[370px] h-[570px] bg-[#F3F3F3] rounded-md shadow-xl">
        <figure className="">
          <img src={image} alt="food" className=" h-60 w-full" />
        </figure>
        <div className="card-body items-center ">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p className="">$ {price}</p>

          <div className="card-actions mt-auto">
            <button
              onClick={handleAddToCart}
              className="btn-outline btn-ghost border-b-4 border-[#BB8506] shadow-xl text-[#BB8506] btn mt-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
