import React from "react";
import { Link } from "react-router-dom";

const ProfileNavigation = () => {
  return (
    <div className="profile-navigation-wrapper">
      <Link to="/profile">
        <div className="profile-nav-element">My Yweets</div>
      </Link>
      <Link to="/profile/reyweets">
        <div className="profile-nav-element">Reyweets</div>
      </Link>
      <Link to="/profile/likes">
        <div className="profile-nav-element">Likes</div>
      </Link>
    </div>
  );
};

export default ProfileNavigation;
