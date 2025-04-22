import React, { useEffect, useState } from "react";
import "./styles.css";
import List from "./List";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleOnChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query?.length > 1) {
      const filteredData = users?.length
        ? users.filter((user) => user.toLowerCase().includes(query))
        : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  function handleClick(val) {
    setSearchParam(val);
    setFilteredUsers([]);
    setShowDropdown(false);
  }
  async function fetchListOfUsers() {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data?.users?.length) {
        setLoading(false);
        setUsers(data?.users?.map((item) => item.firstName));
        setErrorMsg(null);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchListOfUsers();
  }, []);
  console.log("filteredUsers", filteredUsers);
  if (loading) {
    return <div>Loading Data ...</div>;
  }
  if (errorMsg) {
    return <div>Error Occurred: {errorMsg}</div>;
  }
  return (
    <div className="search-autocomplete-container">
      <input
        name="search-users"
        placeholder="Search Users"
        value={searchParam}
        onChange={handleOnChange}
      />
      <ul>
        {showDropdown && (
          <List users={filteredUsers} onListClicked={handleClick} />
        )}
      </ul>
    </div>
  );
};

export default SearchAutocomplete;
