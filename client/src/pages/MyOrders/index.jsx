import React from "react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/service";
import Table from "../../components/Table/Table";

function MyOrders() {
  const { data: orders } = useQuery({
    queryKey: ["order"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const columns = ["Image", "Title", "Price", "Is Completed", "Contact"];

  return (
    <div>
      <div className="container">
        <h1 className="text-3xl font-bold my-6">Orders</h1>
        <div className="h-[67vh] w-[100%] overflow-scroll">
          <Table rows={orders} columns={columns} tableName="order" />
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
