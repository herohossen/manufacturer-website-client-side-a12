import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
const AllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("allorders", () =>
    fetch("http://localhost:8888/allorders", {
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
      {/* <h2 className="text-2xl">All orders: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((user) => (
            //   <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default AllOrders;