import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/service";

const columns = ["ID", "Image", "Title", "Price", "Orders", "Action"];

function MyCategories() {
  const currUser = JSON.parse(localStorage.getItem("currentFiverrUser"));

  const {
    isLoading,
    error,
    data: gigs,
  } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currUser?._id}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between my-6">
          <h1 className="text-3xl font-bold">Categories</h1>
          <Link to="/addnewgigs">
            <button className="bg-green-600 text-white text-sm  font-semibold px-3 py-1.5 rounded-md hover:bg-green-700">
              Add new Gigs
            </button>
          </Link>
        </div>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="h-[67vh] w-[100%] overflow-scroll">
            <Table rows={gigs} columns={columns} tableName="mycategories" />
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCategories;
