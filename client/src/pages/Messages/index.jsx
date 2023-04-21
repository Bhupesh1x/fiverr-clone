import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import MessageImg from "../../Assets/img/message.png";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    width: 150,
    headerName: "Buyer",
    field: "buyer",
  },
  {
    headerName: "Last Message",
    width: 500,
    editable: true,
    renderCell: (params) => (
      <Link to="/message/123">
        <p>{params.row.lastMessage}</p>
      </Link>
    ),
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    editable: true,
  },
  {
    field: "contact",
    headerName: "Contact",
    width: 150,
    editable: true,
    renderCell: () => (
      <Link to="/message/123">
        <img
          src={MessageImg}
          alt=""
          className="h-5 w-5 object-contain cursor-pointer"
        />
      </Link>
    ),
  },
];

function index() {
  const rows = [
    {
      id: 1,
      buyer: "Snow",
      lastMessage: "Jon",
      date: "1 day ago",
    },
    {
      id: 2,
      buyer: "Lannister",
      lastMessage: "Cersei",
      date: "1 day ago",
    },
    {
      id: 3,
      buyer: "Lannister",
      lastMessage: "Jaime",
      date: "1 day ago",
    },
    {
      id: 4,
      buyer: "Stark",
      lastMessage: "Arya",
      date: "1 day ago",
    },
    {
      id: 5,
      buyer: "Targaryen",
      lastMessage: "Daenerys",
      date: "1 day ago",
    },
    {
      id: 6,
      buyer: "Melisandre",
      lastMessage: null,
      date: "1 day ago",
    },
    {
      id: 7,
      buyer: "Clifford",
      lastMessage: "Ferrara",
      date: "1 day ago",
    },
    {
      id: 8,
      buyer: "Frances",
      lastMessage: "Rossini",
      date: "1 day ago",
    },
    {
      id: 9,
      buyer: "Roxie",
      lastMessage: "Harvey",
      date: "1 day ago",
    },
  ];

  return (
    <div>
      <div className="container">
        <h1 className="text-3xl font-bold my-6">Messages</h1>
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
