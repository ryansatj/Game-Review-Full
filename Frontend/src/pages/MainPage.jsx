import React, { useState, useEffect } from "react";
import { getAllReview } from "../actions/Game.actions";
import Gamecard from "../components/Gamecard";
import Usermenu from "../components/Usermenu";
import { getUserbyId } from "../actions/User.actions";

function MainPage() {
  const [games, setGames] = useState([]);
  const [user, setUser] = useState([]);

  const getMovies = async () => {
    const apiResponse = await getAllReview();
    if (apiResponse.success) {
      console.log("Response In MainPage.jsx");
      console.log(apiResponse.data);

      setGames(apiResponse.data);
    } else {
      alert("Failed to fetch games");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  
  return (
    <div>
      <Usermenu/>
      <div className="bg-gray-800 mx-auto p-4 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <Gamecard
              key={index}
              name={game.name}
              description={game.description}
              resources={game.resources}
              user={game.username}
              review={game.review}
              rating={"Rating: " + game.rating}
              id={game.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
