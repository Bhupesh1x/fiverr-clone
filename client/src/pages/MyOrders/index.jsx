import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import MessageImg from "../../Assets/img/message.png";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    width: 200,
    headerName: "Image",
    renderCell: (params) => (
      <img
        src={params.row.image}
        alt=""
        className="h-12 w-12 object-contain cursor-pointer"
      />
    ),
  },
  {
    field: "firstName",
    headerName: "Title",
    width: 200,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Price",
    width: 200,
    editable: true,
  },
  {
    field: "age",
    headerName: "Orders",
    width: 200,
    editable: true,
  },
  {
    width: 200,
    headerName: "Contact",
    renderCell: () => (
      <img
        src={MessageImg}
        alt=""
        className="h-5 w-5 object-contain cursor-pointer"
      />
    ),
  },
];

function index() {
  const rows = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Melisandre",
      firstName: null,
      age: 150,
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
    },
  ];
  return (
    <div>
      <div className="container">
        <h1 className="text-3xl font-bold my-6">Orders</h1>
        <div className="h-[67vh] w-[100%]">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[8]}
            disableRowSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
}

export default index;
