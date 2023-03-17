import React, { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";

const Context = React.createContext();

const ContextProvider = (props) => {
  const observationRef = useRef();
  const [dataLength, setDataLength] = useState(20);
  const [id, setId] = useState(1);
  const [userInfo, setUserInfo] = useState([]);
  const [allData, setAllData] = useState([]);
  const [userFriends, setUserFriends] = useState([]);
  const [page, setPage] = useState(1);
  const lastUserRef = useCallback((node) => {
    if (observationRef.current) observationRef.current.disconnect();
    console.log(page);
    observationRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.scrollBy(0, -100);
          setPage((prev) => ++prev);
        }
      },
      { threshold: 1 }
    );
    if (node) observationRef.current.observe(node);
  });

  const fetchData = async () => {
    const { data } = await axios.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${dataLength}`
    );

    setAllData((prev) => {
      if (prev.some((item) => item.id === data.list[0].id)) {
        return prev;
      }
      return [...prev, ...data.list];
    });
  };
  const fetchUser = async () => {
    const { data } = await axios.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    );

    setUserInfo(data);
  };

  const fetchUsersFriends = async () => {
    const { data } = await axios.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${page}/${dataLength}`
    );
    setUserFriends((prev) => {
      if (prev.some((item) => item.id === data.list[0].id)) {
        return prev;
      }
      return [...prev, ...data.list];
    });
  };

  useEffect(() => {
    if (observationRef.current) observationRef.current.disconnect();
    if (window.location.hash) {
      fetchUsersFriends();
    } else {
      fetchData();
    }
  }, [page]);

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
        setUserFriends,
        lastUserRef,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
