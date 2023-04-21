import React from "react";

function index() {
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
            />
            <p className="label">Category</p>
            <select name="cats" id="cats" className="input">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <p className="label">Cover Image</p>
            <input type="file" className="input" />
            <p className="label">Upload Images</p>
            <input type="file" multiple className="input" />
            <p className="label">Description</p>
            <textarea
              name=""
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              className="input"
            ></textarea>
            <button className="bg-green-600 w-full text-white  font-semibold px-2 py-3 rounded-md hover:bg-green-700">
              Create
            </button>
          </div>
          <div className="flex-1">
            <p className="label">Service Title</p>
            <input
              type="text"
              placeholder="e.g. One-page web design"
              className="input"
            />
            <p className="label">Short Description</p>
            <textarea
              name=""
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
              className="input"
            ></textarea>
            <p className="label">Delivery Time (e.g. 3 days)</p>
            <input type="number" className="input" />
            <p className="label">Revision Number</p>
            <input type="number" className="input" />
            <p className="label">Add Features</p>
            <input
              type="text"
              placeholder="e.g. page design"
              className="input"
            />
            <input
              type="text"
              placeholder="e.g. file uploading"
              className="input"
            />
            <input
              type="text"
              placeholder="e.g. setting up a domain"
              className="input"
            />
            <input type="text" placeholder="e.g. hosting" className="input" />
            <p className="label">Price</p>
            <input type="number" className="input" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
