import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faHouseUser,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => (
  <nav className="nav align-left">
    <ul className="nav-list">
      <li className="nav-top">
        <FontAwesomeIcon icon={faTwitter} />
      </li>
      <Link to="/">
        <li className="nav-list-element">
          <div className="nav-element-title nav-link">
            <FontAwesomeIcon icon={faHouseUser} /> Home
          </div>
        </li>
      </Link>
      <Link to="/profile">
        <li className="nav-list-element">
          <div className="nav-element-title nav-link">
            <FontAwesomeIcon icon={faUsers} /> My Profile
          </div>
        </li>
      </Link>
    </ul>
  </nav>
);

export default Navigation;
