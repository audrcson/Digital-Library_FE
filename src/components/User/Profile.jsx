import React from "react";

const Profile = ({ onBack }) => {
  console.log("Profile component rendered");

  return (
    <div className="profile-container">
      <button onClick={onBack} className="back-button">
        Back
      </button>
      <h1>Profile Page</h1>
      <p>Welcome to your profile!</p>
    </div>
  );
};

export default Profile;
