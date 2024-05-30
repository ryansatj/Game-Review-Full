import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteReview } from "../actions/Game.actions";

const Gamecard = ({ user, name, description, resources, review, rating, id }) => {
    const [formData] = useState({ id });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await deleteReview(formData);
            console.log(result);
            // If deletion is successful, refresh the page
            if (result.success) {
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const url = "/edit/" + id
    return (
        <div className="bg-gray-900 rounded-lg transition-transform hover:scale-105 hover:bg-gray-700 flex relative">
            <form onSubmit={handleSubmit} className="absolute top-0 left-0 mt-2 ml-2">
                <button type="submit" className="bg-customRed hover:bg-customRed text-white py-1 px-2 rounded-full">
                    <img src="https://st2.depositphotos.com/4326917/11164/v/450/depositphotos_111649582-stock-illustration-trash-sign-illustration.jpg" alt="Trash Icon" className="h-6 w-6" />
                </button>
            </form>

            <Link to={url} className="absolute top-0 right-0 bg-white rounded-lg p-1 mt-2 mr-2">
                <img src="https://st.depositphotos.com/57803962/55982/v/450/depositphotos_559826916-stock-illustration-pencil-icon-vector-illustration.jpg" alt="Pencil Icon" className="h-6 w-6" />
            </Link>

            <div className="flex-shrink-0 m-4">
                <img src={resources} alt={name} className="w-30 h-40 object-cover" />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold text-white">{name}</h2>
                <p className="text-white mt-2 italic whitespace-pre-line">{user}</p>
                <p className="text-white mt-2 whitespace-pre-line">{description}</p>
                <p className="text-white mt-2 whitespace-pre-line">{review}</p>
                <p className="text-white mt-2 whitespace-pre-line">{rating}</p>
            </div>
        </div>
    );
};

export default Gamecard;
