import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/service";

function Login() {
  const [userInfo, setInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(evt) {
    const value = evt.target.value;
    setInfo({
      ...userInfo,
      [evt.target.name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const notification = () => toast("Loging You In...");
    try {
      const res = await newRequest.post("/users/login", { ...userInfo });
      toast.success("Login Successfull", {
        id: notification,
      });
      localStorage.setItem("currentFiverrUser", JSON.stringify(res.data));

      navigate("/");
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
        <h1 className="text-2xl font-bold my-6">Login</h1>

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

        <button
          type="submit"
          className="bg-green-600 w-full my-6 text-white  font-semibold px-2 py-3 rounded-md hover:bg-green-700"
        >
          Login
        </button>

        <p className="text-center text-gray-500">
          Not a member yet?{" "}
          <Link to="/register">
            <span className="text-green-500 cursor-pointer hover:underline">
              Join now
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
