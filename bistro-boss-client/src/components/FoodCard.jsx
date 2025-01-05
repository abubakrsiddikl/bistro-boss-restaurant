import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = () => {
    if (user && user.email) {
      // save cart to database
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      // data send to server use axiosSecure hook
      axiosSecure.post("/carts", cartItem).then((res) => {
        // console.log(res.data)
        if (res.data.insertedId) {
          toast.success(`${name} added to your cart`);
        }
        // update the cart counts
        refetch();
      });
    } else {
      Swal.fire({
        title: "Please login after order",
        text: "You have go to login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, go login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="bg-slate-900 text-white absolute right-0 -mt-24 mr-3 px-3">
          $ {price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p className="text-left">{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn bg-slate-100 btn-outline border-0 border-b-4 border-orange-400 mt-2"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
