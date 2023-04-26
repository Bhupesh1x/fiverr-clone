import React from "react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/service";
import Table from "../../components/Table/Table";

const columns = ["Seller", "Last Message", "Date", "Action"];

function Messages() {
  const { data: conversations } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div>
      <div className="container">
        <h1 className="text-3xl font-bold my-6">Messages</h1>
        <div className="h-[67vh] w-[100%] overflow-scroll">
          <Table rows={conversations} columns={columns} tableName="messages" />
        </div>
      </div>
    </div>
  );
}

export default Messages;
