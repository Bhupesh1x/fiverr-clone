import React from "react";

const messages = [
  {
    message: "Lorem 123 lorem lorem",
    fromSelf: true,
  },
  {
    message: "Lorem 123 lorem lorem",
    fromSelf: false,
  },
];

function index() {
  return (
    <div className="py-4 container relative h-[100%] text-white pl-4">
      {/* Header  */}
      <div className="bg-[#4b6946] h-12 flex items-center justify-between px-3  rounded-lg">
        <div className="flex items-center gap-4">
          <img
            src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/null/external-Avatar-male-avatar-with-medical-mask-blue-others-cattaleeya-thongsriphong-10.png"
            alt="user_avatar"
            className="h-7 w-7 rounded-full"
          />
          <p className="text-lg font-semibold">John Doe</p>
        </div>
      </div>

      {/* Message */}
      <div className="my-3 h-[62vh] overflow-scroll">
        {messages?.map((msg, i) => (
          <div>
            <div
              key={i}
              className={`p-3 w-fit my-3 flex rounded-md ${
                msg.fromSelf === true
                  ? " bg-blue-400 ml-auto"
                  : " bg-orange-400 mr-auto"
              }`}
            >
              <p>{msg.message}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" text-black flex items-center gap-3">
        <textarea
          className="w-[90%] border-2 rounded-md border-gray-300 px-2 py-1 outline-none focus:border-green-500 transition-all duration-150 ease"
          placeholder="Enter your message"
        ></textarea>
        <button className="bg-green-600 w-[10%] text-white text-sm font-semibold px-2 py-3 rounded-md hover:bg-green-700">
          Send
        </button>
      </div>
    </div>
  );
}

export default index;
