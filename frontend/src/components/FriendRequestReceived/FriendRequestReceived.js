import "../FriendsPage/FriendsPage.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FriendRequestReceived = ({ friendRequester, setFriendsUpdated }) => {
  const token = window.localStorage.getItem("token");

  // Accept friend request
  const handleClickAccept = () => {
    fetch('/friends/accept', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        senderId: friendRequester._id,
        receiverId: window.localStorage.getItem("user_id")
      }),
    })
      .then(() => {
        setFriendsUpdated(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // Reject friend request
  const handleClickReject = () => {
    fetch('/friends/reject', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ senderId: friendRequester._id, receiverId: window.localStorage.getItem("user_id") }),
    })
      .then(() => {
        setFriendsUpdated(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  return (
    <div className="friend-request-received-container">
      <div className="f-picture-and-name-container">
        <div className="f-profile-picture-div">
          <img className="f-profile-picture" src={friendRequester.profilePicture} />
        </div>
        <Link to={`/users/${friendRequester._id}`} className="username-link">
          <h3 className="f-username">{ friendRequester.name }</h3>
        </Link>
      </div>
      <button className="f-accept-friend-request-button" onClick={handleClickAccept}>Accept</button>
      <button className="f-reject-friend-request-button" onClick={handleClickReject}>Reject</button>
    </div>
  );
}

export default FriendRequestReceived;