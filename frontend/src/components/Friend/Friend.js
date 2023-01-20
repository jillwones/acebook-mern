import "../FriendsPage/FriendsPage.css";
import { Link } from "react-router-dom";


const Friend = ({ friend, setFriendsUpdated }) => {
  const token = window.localStorage.getItem("token");

  // Remove friend
  const handleClickRemove = () => {
    fetch("/friends/delete/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId: window.localStorage.getItem("user_id"), friendId: friend._id })
    })
      .then(() => {
        setFriendsUpdated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(friend.profilePicture);
  return (
    <div className="friend-container">
      <div className="f-picture-and-name-container">
        <div className="f-profile-picture-div">
          <img className="f-profile-picture" src={friend.profilePicture} />
        </div>
        <Link to={`/users/${friend._id}`} className="username-link">
          <h3 className="f-username">{ friend.name }</h3>
        </Link>
      </div>
      <button className="f-remove-friend-button" onClick={handleClickRemove}>Remove friend</button>
    </div>
  );
}
 
export default Friend;