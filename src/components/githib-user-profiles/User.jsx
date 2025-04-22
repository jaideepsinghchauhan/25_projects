import React from "react";
import "./styles.css";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;
  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          {" "}
          User joined on {createdDate.getDate()}{" "}
          {createdDate.toLocaleString("en-us", {
            month: "short",
          })}{" "}
          {createdDate.getFullYear()}
        </p>
      </div>
      <div>
        <div>
          <p>
            <strong>Public Repos</strong>
          </p>
          <p>{public_repos}</p>
        </div>
        <div>
          {" "}
          <p>
            <strong>Followers</strong>
          </p>
          <p>{followers}</p>
        </div>
        <div>
          {" "}
          <p>
            <strong>Following</strong>
          </p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
