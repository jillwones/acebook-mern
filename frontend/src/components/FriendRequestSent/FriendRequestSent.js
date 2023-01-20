import "../FriendsPage/FriendsPage.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FriendRequestSent = ({ requestedFriend, setFriendsUpdated }) => {
  const token = window.localStorage.getItem("token");

  // Do once back end for cancel sent friend request is sorted
  // Cancel sent friend request
  const handleClickCancel = () => {
    fetch('/friends/cancel/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ senderId: window.localStorage.getItem("user_id"), receiverId: requestedFriend._id }),
    })
      .then(() => {
        setFriendsUpdated(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  return (
    <div className="friend-request-sent-container">
      <div className="f-picture-and-name-container">
        <div className="f-profile-picture-div">
          <img className="f-profile-picture" src={requestedFriend.profilePicture} />
        </div>
        <Link to={`/users/${requestedFriend._id}`} className="username-link">
          <h3 className="f-username">{ requestedFriend.name }</h3>
        </Link>
      </div>
      <button className="f-cancel-friend-request-button" onClick={handleClickCancel}>Cancel friend request</button>
    </div>
  );
}
 
export default FriendRequestSent;