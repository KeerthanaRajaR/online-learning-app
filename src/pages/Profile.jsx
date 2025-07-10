import React from "react";
import "./../styles/main.css";

const Profile = () => (
  <div className="profile">
    <img src="https://i.pravatar.cc/150?img=3" alt="Profile" />
    <h2>Jane Doe</h2>
    <form className="profile-form">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value="janedoe@email.com" readOnly />

      <label htmlFor="bio">Bio</label>
      <textarea id="bio" rows={3} value="Student | Enthusiastic learner" readOnly />
    </form>
  </div>
);

export default Profile;