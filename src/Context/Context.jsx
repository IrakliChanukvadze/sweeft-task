import React, { useEffect, useState } from "react";
import axios from "axios";

const Context = React.createContext();

const ContextProvider = (props) => {
  const [dataLength, setDataLength] = useState(20);
  const [userId, setUserId] = useState(1);
  const [userInfo, setUserInfo] = useState([]);
  const [allData, setAllData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/${dataLength}`
    );
    setAllData(data.list);
  };
  const fetchUser = async () => {
    const { data } = await axios.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
    );
    setUserInfo(data);
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Context.Provider value={{ allData, setUserId, userInfo }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
