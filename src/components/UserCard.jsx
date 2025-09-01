import React from "react";

function UserCard({ data }) {
  if (!data) {
    return <p>Loading user...</p>; // jab tak data aata nahi hai
  }

  return (
    <div className="User-card">
      <img className="User-img" src={data.picture.large} alt="user" />
      <h3>
        {data.name.first} {data.name.last}
      </h3>
      <p>{data.phone}</p>
      <p>
        {data.location.city}, {data.location.country}
      </p>
    </div>
  );
}

export default UserCard;
