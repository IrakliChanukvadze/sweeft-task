import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/Context";

const UserProfile = () => {
  let { userId } = useParams();
  const { setUserId, userInfo } = useContext(Context);
  setUserId(userId);
  return (
    <div
      className={`max-w-6xl w-full sm:w-[94%] m-auto border-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-2`}
    >
      UserProfile
    </div>
  );
};

export default UserProfile;
