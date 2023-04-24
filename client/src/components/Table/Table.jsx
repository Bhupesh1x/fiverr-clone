import * as React from "react";

export default function Table({ rows }) {
  return (
    <table className="w-full">
      <tr className=" sticky top-0 z-[999] text-center border-y border-gray-500 bg-gray-50">
        <th className="py-4">Image</th>
        <th className="py-4">Title</th>
        <th className="py-4">Price</th>
        <th className="py-4">isCompleted</th>
        <th className="py-4">Contact</th>
      </tr>
      {rows.length <= 0 ? (
        <p className="text-center w-full py-3">No Data to show</p>
      ) : (
        rows?.map((order) => (
          <tr
            key={order._id}
            className="text-center mx-auto border-b border-gray-300"
          >
            <td>
              <img
                className="h-12 w-12 object-contain mx-auto"
                src={order.img}
                alt=""
              />
            </td>
            <td className="mx-auto">{order.title}</td>
            <td>{order.price}</td>
            <td>{order.isCompleted.toString()}</td>
            <td>
              <img
                className="h-5 w-5 object-contain cursor-pointer mx-auto"
                src={order.messageImage}
                alt=""
                // onClick={() => handleContact(order)}
              />
            </td>
          </tr>
        ))
      )}
    </table>
  );
}
