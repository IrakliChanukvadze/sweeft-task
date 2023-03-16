import React, { useEffect, useState } from "react";
import axios from "axios";

const Context = React.createContext();

const ContextProvider = (props) => {
  const [dataLength, setDataLength] = useState(20);
  const [id, setId] = useState(1);
  const [userInfo, setUserInfo] = useState([]);
  const [allData, setAllData] = useState([]);
  const [userFriends, setUserFriends] = useState([]);
  const fetchData = async () => {
    const { data } = await axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/${dataLength}`
      )
      .catch(function (error) {
        console.log(error.toJSON());
      });
    if (data) {
      setAllData(data.list);
    }
  };
  const fetchUser = async () => {
    setDataLength(20);
    const { data } = await axios.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    );

    setUserInfo(data);
  };

  const fetchUsersFriends = async () => {
    const { data } = await axios.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/${dataLength}`
    );
    setUserFriends(data.list);
  };

  function fetchMoreData() {
    const distanceToBottom =
      document.documentElement.scrollHeight -
      (window.innerHeight + window.scrollY);
    if (!distanceToBottom) {
      setDataLength((prev) => (prev += 4));
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", fetchMoreData);

    return () => {
      window.removeEventListener("scroll", fetchMoreData);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      fetchUsersFriends();
    } else {
      fetchData();
    }
  }, [dataLength]);

  return (
    <Context.Provider
      value={{
        allData,
        setId,
        userInfo,
        userFriends,
        fetchUser,
        fetchUsersFriends,
        setDataLength,
        fetchData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
