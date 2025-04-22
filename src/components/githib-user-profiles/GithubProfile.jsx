import React, { useEffect, useState } from "react";
import User from "./User";
import "./styles.css";
const GithubProfile = () => {
  const [userName, setUserName] = useState("sangammukherjee");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [profileData, setProfileData] = useState(null);

  async function fetchGitData() {
    try {
      setLoading(true);
      const fetchedData = await fetch(
        `https://api.github.com/users/${userName}`
      );
      const jsonData = await fetchedData.json();
      console.log("jsonData", jsonData);
      if (jsonData) {
        setLoading(false);
        setErrorMsg(null);
        setProfileData(jsonData);
        setUserName('')
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGitData();
  }
  useEffect(() => {
    fetchGitData();
  }, []);

  if (loading) {
    return <div>Fetching profile ...</div>;
  }
  if (errorMsg) {
    return <div>Error Occurred : {errorMsg}</div>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          onChange={(event) => setUserName(event.target.value)}
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>{profileData && <User user={profileData} />}</div>
    </div>
  );
};

export default GithubProfile;
