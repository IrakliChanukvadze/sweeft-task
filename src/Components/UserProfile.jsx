import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/Context";
import ContactContainer from "./ContactContainer";
import ProfileContainer from "./ProfileContainer";

const UserProfile = () => {
  let { userId } = useParams();
  const {
    fetchUser,
    fetchUsersFriends,
    userInfo,
    userFriends,
    setId,
    setDataLength,
  } = useContext(Context);

  useEffect(() => {
    setId(userId);
    fetchUser();
    fetchUsersFriends();
  }, [userId]);

  return (
    <div className={`max-w-6xl w-full sm:w-[94%] m-auto gap-6 px-2`}>
      <ProfileContainer user={userInfo} adress={userInfo.adress} />
      <h2 className="font-bold mt-14">Friends: </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-6 ">
        {userFriends.map((item) => (
          <ContactContainer
            key={item.id}
            id={item.id}
            name={`${item.prefix} ${item.name} ${item.lastName}`}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
