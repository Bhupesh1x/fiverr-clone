import React, { useReducer, useState } from "react";
import { gigReducer, INITIAL_STATE } from "../../reducer/gigReducer";
import uploadFile from "../../utils/uploadFile";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/service";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddNewCategory() {
  const [coverImage, setCoverImage] = useState(null);
  const [imagesValue, setImages] = useState([]);
  const [isUploading, setIsUploadings] = useState(false);
  const navigate = useNavigate();

  const { data: category } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      newRequest.get(`/category`).then((res) => {
        return res.data;
      }),
  });

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  function handleChange(e) {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  }

  const handleUpload = async () => {
    setIsUploadings(true);
    try {
      const coverImg = await uploadFile(coverImage);

      const images = await Promise.all(
        [...imagesValue].map(async (file) => {
          const url = await uploadFile(file);
          return url;
        })
      );
      setIsUploadings(false);
      dispatch({ type: "ADD_IMAGES", payload: { coverImg, images } });
    } catch (err) {
      console.log(err);
    }
  };

  function handleAddFeature(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  }

  function handleRemoveFeature(feature) {
    dispatch({
      type: "REMOVE_FEATURE",
      payload: feature,
    });
  }

  const querClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      querClient.invalidateQueries(["myGigs"]);
      navigate("/gigs");
    },
    onError: (err) => {
      toast.error(err.response.data);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(state);
    // navigate("/gigs");
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-2xl font-bold mb-3">Add New Gigs</h1>

        <div className="flex justify-between gap-32">
          <div className="flex-1">
            <p className="label">Title</p>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              className="input"
              name="title"
              onChange={handleChange}
            />
            <p className="label">Category</p>
            <select
              name="cat"
              id="cat"
              className="input"
              onChange={handleChange}
            >
              {category.map(({ _id, title, cat }) => (
                <option key={_id} value={cat}>
                  {title}
                </option>
              ))}
            </select>
            <p className="label">Cover Image</p>
            <input
              type="file"
              className="input"
              onChange={(e) => setCoverImage(e.target.files[0])}
            />
            <p className="label">Upload Images</p>
            <input
              type="file"
              multiple
              className="input"
              onChange={(e) => setImages(e.target.files)}
            />
            <button
              onClick={handleUpload}
              className="bg-green-600 w-full text-white  font-semibold px-2 py-1.5 rounded-md hover:bg-green-700 my-3"
            >
              {isUploading ? "Uploading Images..." : "Upload Images"}
            </button>
            <p className="label">Description</p>
            <textarea
              name="desc"
              id="desc"
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              className="input"
              onChange={handleChange}
            ></textarea>
            <button
              onClick={handleSubmit}
              className="bg-green-600 w-full text-white  font-semibold px-2 py-3 rounded-md hover:bg-green-700"
            >
              Create
            </button>
          </div>
          <div className="flex-1">
            <p className="label">Short Title</p>
            <input
              type="text"
              placeholder="e.g. One-page web design"
              className="input"
              name="shortTitle"
              onChange={handleChange}
            />
            <p className="label">Short Description</p>
            <textarea
              name="shortDesc"
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
              className="input"
              onChange={handleChange}
            ></textarea>
            <p className="label">Delivery Time (e.g. 3 days)</p>
            <input
              type="number"
              name="deliveryTime"
              className="input"
              onChange={handleChange}
            />
            <p className="label">Revision Number</p>
            <input
              type="number"
              name="revisionNumber"
              className="input"
              onChange={handleChange}
            />
            <form onSubmit={handleAddFeature} className="">
              <p className="label">Add Features</p>
              <div className="flex items-center gap-3 pb-2.5">
                <input
                  type="text"
                  placeholder="e.g. page design"
                  className="w-[80%] border-2 rounded-md border-gray-300 px-3 py-1.5 outline-none focus:border-green-500 transition-all duration-150 ease-in "
                />
                <button className="w-[20%] bg-green-600 text-white  font-semibold px-2 py-1.5 rounded-md hover:bg-green-700">
                  Add
                </button>
              </div>
            </form>
            <div className="flex items-center gap-3 flex-wrap pb-3">
              {state.features.map((feature) => (
                <p
                  className="border border-green-400 font-bold w-fit py-1 px-2 rounded-full text-xs"
                  onClick={() => handleRemoveFeature(feature)}
                >
                  {feature}
                  <span className="pl-3 text-red-500 cursor-pointer">x</span>
                </p>
              ))}
            </div>
            <p className="label">Price</p>
            <input
              type="number"
              className="input"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewCategory;
