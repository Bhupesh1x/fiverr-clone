import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/service";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

function Message() {
  const querClient = useQueryClient();
  const { id } = useParams();
  const currUser = JSON.parse(localStorage.getItem("currentFiverrUser"));

  const {
    isLoading,
    error,
    data: messages,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post("/messages", message);
    },
    onSuccess: () => {
      querClient.invalidateQueries(["messages"]);
    },
    onError: (err) => {
      toast.error(err.response.data);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({ conversationId: id, desc: e.target[0].value });
    e.target[0].value = "";
  }

  return (
    <div className="py-4 container relative h-[100%] text-white pl-4">
      {/* Header  */}
      <div className="bg-[#4b6946] h-12 flex items-center justify-between px-3  rounded-lg">
        <div className="flex items-center gap-4">
          <img
            src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/null/external-Avatar-male-avatar-with-medical-mask-blue-others-cattaleeya-thongsriphong-10.png"
            alt="user_avatar"
            className="h-7 w-7 rounded-full"
            loading="lazy"
          />
          <p className="text-lg font-semibold">Messages</p>
        </div>
      </div>

      {/* Message */}
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="my-3 h-[62vh] overflow-scroll">
          {messages?.map((msg, i) => (
            <div
              key={i}
              className={`p-3 w-fit my-3 flex rounded-md ${
                msg.userId === currUser._id
                  ? " bg-blue-400 ml-auto"
                  : " bg-orange-400 mr-auto"
              }`}
            >
              <p>{msg.desc}</p>
            </div>
          ))}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className=" text-black flex items-center gap-3"
      >
        <textarea
          className="w-[90%] border-2 rounded-md border-gray-300 px-2 py-1 outline-none focus:border-green-500 transition-all duration-150 ease"
          placeholder="Enter your message"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 w-[10%] text-white text-sm font-semibold px-2 py-3 rounded-md hover:bg-green-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Message;
