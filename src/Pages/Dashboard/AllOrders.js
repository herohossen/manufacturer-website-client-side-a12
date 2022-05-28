import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AllOrder from "./AllOrder";

const AllOrders = () => {
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery("allorders", () =>
    fetch("http://localhost:8888/allorder", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl">All orders: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>User Name</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <AllOrder key={order._id} order={order} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
