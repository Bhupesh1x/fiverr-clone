import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/service";
import { toast } from "react-hot-toast";
import uploadFile from "../../utils/uploadFile";

function Register() {
  const [userInfo, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    img: "",
    isSeller: "",
  });
  const [isFileUploadInProgress, setIsFileUploadInProgress] = useState(false);
  const navigate = useNavigate();

  function handleChange(evt) {
    const value = evt.target.value;
    setInfo({
      ...userInfo,
      [evt.target.name]: value,
    });
  }

  function handleSellerChange(evt) {
    const value = evt.target.checked;
    setInfo({
      ...userInfo,
      isSeller: value,
    });
  }

  async function handleFileChange(evt) {
    const value = evt.target.files[0];
    setIsFileUploadInProgress(true);
    const url = await uploadFile(value);
    setInfo({
      ...userInfo,
      img: url,
    });
    setIsFileUploadInProgress(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const notification = () => toast("Registering the user...");
    try {
      await newRequest.post("/users/register", {
        ...userInfo,
      });
      toast.success("Register Successfull", {
        id: notification,
      });

      navigate("/login");
    } catch (err) {
      toast.error(err.response.data, {
        id: notification,
      });
    }
  }

  return (
    <div className="container flex items-center justify-center h-[82vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 w-[80vw] lg:w-[40vw] px-10 py-4 rounded-md shadow-md"
      >
        <h1 className="text-2xl font-bold my-3">Register</h1>
        <p className="label">
          Username <span className="text-sm text-red-600">*</span>
        </p>
        <input
          name="username"
          type="text"
          placeholder="Username."
          className="input"
          onChange={handleChange}
        />
        <p className="label">
          Email <span className="text-sm text-red-600">*</span>
        </p>
        <input
          name="email"
          type="email"
          placeholder="Email."
          className="input"
          onChange={handleChange}
        />
        <p className="label">
          Password <span className="text-sm text-red-600">*</span>
        </p>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input"
          onChange={handleChange}
        />

        <p className="label">Image</p>
        <input
          name="file"
          type="file"
          placeholder="Password"
          className="input"
          onChange={handleFileChange}
        />
        <p className="label">Country</p>
        <input
          name="country"
          type="text"
          placeholder="Country"
          className="input"
          onChange={handleChange}
        />

        <label
          htmlFor="toggleB"
          className="flex items-center cursor-pointer my-1"
        >
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              onChange={handleSellerChange}
            />
            <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium">
            Activate the seller account
          </div>
        </label>

        <button
          type="submit"
          className="bg-green-600 w-full my-3 text-white  font-semibold px-2 py-2 rounded-md hover:bg-green-700"
        >
          {isFileUploadInProgress ? "Loading..." : "Register"}
        </button>
        <p className="text-center text-gray-500">
          Already a member?{" "}
          <Link to="/login">
            <span className="text-green-500 cursor-pointer hover:underline">
              Sign In
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
