import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddProducts = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const title = data.title
    const price = parseFloat(data.price)
    const stock =  parseFloat(data.stock)
    const category = data.category
    const discribtion = data.discribtion
    const email = user.email
    const imageURL = data.imageURL
    const product = {title,price,stock,category,discribtion,imageURL,email}
    const token = localStorage.getItem("access-token")
    console.log(token);
    axios.post('http://localhost:5000/addProducts',product,{
      
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    // console.log(product,token);


  };

  return (
    <div>
      <h1>This is a add products page</h1>
      <div>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-3">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Product title"
                className="input input-bordered w-full"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-400 font-thin ">
                  Product title is required.
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                placeholder="Brand"
                className="input w-full input-bordered"
                {...register("brand", { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
                {...register("price", { required: true })}
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                placeholder="Stock"
                className="input w-full input-bordered"
                {...register("stock", { required: true })}
              />
            </div> 
            <div className="w-full">
              <label className="label">
                <span className="label-text">ImageUrl</span>
              </label>
              <input
                type="text"
                placeholder="imageURL"
                className="input w-full input-bordered"
                {...register("imageURL", { required: true })}
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Product category"
                className="input w-full input-bordered"
                {...register("category", { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div className=" w-1/2">
              <label className="label">
                <span className="label-text">Discribtion</span>
              </label>
              <textarea
                type="text"
                placeholder="Product title"
                className="input input-bordered w-full"
                {...register("discribtion", { required: true })}
              />
            </div>
            <div className="w-1/2">
              <button className="btn btn-wide">Add products</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
