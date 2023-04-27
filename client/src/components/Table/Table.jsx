import * as React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/service";
import DeleteImg from "../../Assets/img/delete.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const isMobile = window.innerWidth < 768;

export default function Table({ rows, columns, tableName }) {
  const currUser = JSON.parse(localStorage.getItem("currentFiverrUser"));
  const navigate = useNavigate();
  const querClient = useQueryClient();

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      querClient.invalidateQueries(["messages"]);
    },
    onError: (err) => {
      toast.error(err.response.data);
    },
  });

  function handleDeleteGig(gigId) {
    mutation.mutate(gigId);
  }

  return (
    <table className="w-[100vw] lg:w-[100%] overflow-x-scroll">
      <thead>
        <tr className="sticky top-0 z-49 text-center border-y border-gray-500 bg-gray-50">
          {columns?.map((column, i) => (
            <th className="py-4" key={i}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.length <= 0 ? (
          <tr className="text-center w-full py-3">
            <td>No Data to show</td>
          </tr>
        ) : tableName === "order" ? (
          rows?.map((order, i) => (
            <tr
              key={i}
              className="text-center mx-auto border-b border-gray-300"
            >
              <td>
                <img
                  className="h-12 w-12 object-contain mx-auto"
                  src={order.img}
                  alt=""
                  loading="lazy"
                />
              </td>
              <td className="mx-auto">{order.title}</td>
              <td>{order.price}</td>
              <td>{order.isCompleted?.toString()}</td>
              <td>
                <img
                  className="h-5 w-5 object-contain cursor-pointer mx-auto"
                  src={order.messageImage}
                  alt=""
                  onClick={() => handleContact(order)}
                  loading="lazy"
                />
              </td>
            </tr>
          ))
        ) : tableName === "messages" ? (
          rows?.map((message) => (
            <tr
              key={message._id}
              className="text-center mx-auto border-b border-gray-300"
            >
              <td className="h-12 max-w-[4.5rem]">
                {currUser?.isSeller
                  ? message.buyerId.substring(0, 14)
                  : message.sellerId.substring(0, 14)}
                ...
              </td>
              <td className="h-12">
                {message.lastMessage.substring(0, 100)}...
              </td>
              <td className="h-12">{moment(message.updatedAt).fromNow()}</td>
              <td className="h-12">
                <img
                  className="h-5 w-5 object-contain cursor-pointer mx-auto"
                  src="https://res.cloudinary.com/atm1x/image/upload/v1682322691/message_n60siq.png"
                  alt=""
                  onClick={() => navigate(`/message/${message.id}`)}
                  loading="lazy"
                />
              </td>
            </tr>
          ))
        ) : tableName === "mycategories" ? (
          rows?.map((gig) => (
            <tr
              key={gig._id}
              className="text-center mx-auto border-b border-gray-300"
            >
              <td className="h-12 max-w-[4.5rem]">
                {isMobile
                  ? `${gig._id.substring(0, 6)}...`
                  : `${gig._id.substring(0, 14)}...`}
              </td>
              <td>
                <img
                  className="h-12 w-12 object-contain mx-auto"
                  src={gig.coverImg}
                  alt=""
                  loading="lazy"
                />
              </td>
              <td className="h-12">{gig.title}</td>
              <td className="h-12">{gig.price}</td>
              <td className="h-12">{gig.sales}</td>
              <td className="h-12">
                <img
                  className="h-5 w-5 object-contain cursor-pointer mx-auto"
                  src={DeleteImg}
                  alt=""
                  onClick={() => handleDeleteGig(gig._id)}
                  loading="lazy"
                />
              </td>
            </tr>
          ))
        ) : null}
      </tbody>
    </table>
  );
}
