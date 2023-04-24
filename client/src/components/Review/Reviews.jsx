import React, { useState } from "react";
import Review from "./Review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/service";
import { toast } from "react-hot-toast";

function Reviews({ gig }) {
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gig._id}`).then((res) => {
        return res.data;
      }),
  });

  const querClient = useQueryClient();
  const [desc, setDesc] = useState("");
  const [star, setStar] = useState(1);

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      querClient.invalidateQueries(["reviews"]);
      handleResetForm();
    },
    onError: (err) => {
      toast.error(err.response.data);
      handleResetForm();
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({ gigId: gig._id, desc, star });
  }

  function handleResetForm() {
    setDesc("");
    setStar(1);
  }

  return (
    <>
      {isLoading
        ? "Loading..."
        : error
        ? "Something went wrong"
        : reviews.map((review) => <Review key={review._id} review={review} />)}

      <form
        onSubmit={handleSubmit}
        action=""
        className="my-2 border border-gray-200 px-4 py-4 rounded-md"
      >
        <p className="label">Write your Review</p>
        <input
          type="text"
          placeholder="Write your opinion"
          className="input"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <p className="label">Star</p>
        <select
          className="input"
          value={star}
          onChange={(e) => setStar(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 w-full text-white  font-semibold px-2 py-3 rounded-md hover:bg-green-700"
        >
          send
        </button>
      </form>
    </>
  );
}

export default Reviews;
