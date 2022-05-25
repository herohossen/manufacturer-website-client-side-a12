import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { toolId } = useParams();
  // const [tool, setTool] = useState({});
  const [userOrderQuantity, setUserOrderQuantity] = useState({});
  const {
    isLoading,
    error,
    data: tool,
    refetch,
  } = useQuery(["tool", toolId], () =>
    fetch(`http://localhost:8888/tools/${toolId}`).then((res) => res.json())
  );

  useEffect(() => {
    setUserOrderQuantity(tool);
  }, [tool]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/tools/${toolId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTool(data);
  //       setUserOrderQuantity(data);
  //     });
  // }, [toolId]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  // const [user, setUser] = useState({
  //     name: 'Akbar The Great',
  //     email: 'akbar@momo.taj',
  //     address: 'Tajmohol Road Md.pur',
  //     phone: '01711111111'
  // });

  // const handleAddressChange = event =>{
  //     console.log(event.target.value);
  //     const {address, ...rest} = user;
  //     const newAddress = event.target.value;
  //     const newUser = {address: newAddress, ...rest};
  //     console.log(newUser);
  //     setUser(newUser);
  // }

  const handleChangeQuantity = (e) => {
    setUserOrderQuantity(e.target.value);
    const { quantity, ...rest } = userOrderQuantity;
    const newQuantity = parseInt(e.target.value);
    const newTool = { quantity: newQuantity, ...rest };
    setUserOrderQuantity(newTool);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const userQuantity = userOrderQuantity?.quantity;
    const toolQuantity = tool?.quantity;
    const toolStock = tool?.stock;
    if (e.target.address.value === "") {
      toast.error("Please provide your Address");
      return false;
    } else if (e.target.quantity.value === "") {
      toast.error("Please provide your Minimum Order Quantity");
      return false;
    } else if (e.target.phone.value === "") {
      toast.error("Please provide your Phone number");
      return false;
    }

    // order
    const email = user?.email;
    const displayName = user?.displayName;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const name = userOrderQuantity?.name;
    const description = userOrderQuantity?.description;
    const price = userOrderQuantity?.price;
    const stock = userOrderQuantity?.stock;
    const img = userOrderQuantity?.img;
    const quantity = parseInt(e.target.quantity.value);
    const order = {
      email,
      displayName,
      address,
      phone,
      name,
      description,
      price,
      stock,
      img,
      quantity,
    };
    console.log(order);
    fetch("http://localhost:8888/tools", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('Success:', data);
        e.target.reset();
        refetch();
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    if (userQuantity > toolStock) {
      toast.error("Minimum Quantity cannot be greater than Available Quantity");
      return false;
    } else if (userQuantity < toolQuantity) {
      toast.error(
        `Minimum Quantity cannot be less than ${tool?.quantity} Unit`
      );
      return false;
    } else {
      toast.success(
        `Order Quantity ${userQuantity} unit is placed successfully`
      );
      return true;
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 justify-items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">User Information</h1>
            <p className="py-3 text-xl font-semibold">
              User Name: {user?.displayName}
            </p>
            <p className="py-1 text-xl font-semibold">
              User Email: {user?.email}
            </p>

            <h1 className="text-4xl font-bold">Product Details</h1>
            <p className="py-1 text-xl font-semibold">
              Price Per Unit: $<b>{userOrderQuantity?.price}</b>
            </p>
            <p className="py-1 text-xl">
              Description: {userOrderQuantity?.description?.slice(0, 150)}...
            </p>
            <p className="py-1 text-xl font-semibold">
              Ratings: ({userOrderQuantity?.ratings})
            </p>
            <p className="py-1 text-xl font-semibold">
              Available Quantity: <b>{userOrderQuantity?.stock}</b> Unit
            </p>
            <p className="py-1 text-xl font-semibold">
              Minimum Order Quantity: <b>{tool?.quantity}</b> Unit
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={formSubmit} className="form-control">
                <label className="label">
                  <span className="label-text">Minimum Order Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  onChange={handleChangeQuantity}
                  value={userOrderQuantity?.quantity}
                  className="input input-bordered mb-3"
                />
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="text"
                  // onChange={handleChangeAvailableQuantity}
                  name="stock"
                  value={userOrderQuantity?.stock}
                  className="input input-bordered mb-3"
                  disabled
                />

                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered mb-3"
                />

                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="input input-bordered mb-3"
                />
                <input
                  id="placeOrder"
                  disabled={
                    userOrderQuantity?.quantity < tool?.quantity ||
                    userOrderQuantity?.quantity > tool?.stock
                  }
                  className="btn btn-primary"
                  type="submit"
                  value="Place Order"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;