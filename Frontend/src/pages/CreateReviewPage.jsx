import React, { useState } from "react";
import { createReview } from "../actions/Game.actions";
import Usermenu from "../components/Usermenu";
import { useNavigate } from "react-router-dom";

const CreateReviewPage = () => {
  const [formData, setFormData] = useState({
    userid: "",
    name: "",
    description: "",
    resources: "",
    review: "",
    rating: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate()  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createReview(formData);
    if (result.success) {
      setMessage("Create review successful!");
      navigate("/games")
    } else {
      console.log(`${result.success}`);
      setMessage("Create Review failed. Please try again.");
    }
};

  return (
    <div>
      <Usermenu />
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl text-white font-bold text-center mb-8">
            Create your Game Review
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-300">
                UserId
              </label>
              <input
                type="text"
                id="userid"
                name="userid"
                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.userid}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="text" className="block text-gray-300">
                Image Resource
              </label>
              <input
                type="text"
                id="resources"
                name="resources"
                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.resources}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="text" className="block text-gray-300">
                Review
              </label>
              <input
                type="text"
                id="review"
                name="review"
                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.review}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="text" className="block text-gray-300">
                Rating
              </label>
              <input
                type="float"
                id="rating"
                name="rating"
                className="block w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Create
            </button>
          </form>
          {message && (
            <div className="mt-4 text-gray-300 text-center">
              <p>{message}</p>
            </div>
          )}
          <div className="mt-4 text-gray-300 text-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReviewPage;
