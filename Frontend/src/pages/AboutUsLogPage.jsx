import React from "react";
import Usermenu from "../components/Usermenu";

const AboutUsLog = () => {
  return (
    <div>
        <Usermenu/>
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="max-w-3xl w-full bg-gray-800 p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
            <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg">
                Our mission is to create a community platform for all gamers to share their experience on gaming across all games in all genre, 
                also we are planning to make all gamer members in this platform share a healthy community.
            </p>
            </section>
            <section>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg">
                Our vision is to have a healthy community in game reviews community, and all reviews are based on its community we provide flexibility and fredoom in reviewing games
                , we are also have a vision to make the website open-source for all members.
            </p>
            </section>
            <section>
              <h3 className="text-2xl font-semibold mt-8 mb-4">About our Application</h3>
              <p className="text-lg">
                  Our application provides a platform for all gamers to review their games without anything to worry about everything in here is free.
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Developers:</h3>
              <p className="text-lg">
                  BackEnd: Ryan Safa Tjendana
              </p>
              <p className="text-lg">
                  FrontEnd: Ryan Safa Tjendana
              </p>
            </section>
        </div>
        </div>
    </div>
  );
};

export default AboutUsLog;
