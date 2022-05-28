import React from "react";

const AllOrder = ({ order, refetch }) => {
  return (
    <tr>
      <td>{order?.email}</td>
      <td>{order?.displayName}</td>
      <td>{order?.name}</td>
      <td>{order?.price}</td>
      <td>{order?.orderQuantity}</td>
    </tr>
  );
};

export default AllOrder;
