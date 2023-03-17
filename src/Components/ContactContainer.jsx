import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";

const ContactContainer = ({ id, imageUrl, name, title, lastUserRef }) => {
  const { setDataLength, setId, setUserFriends } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div
      ref={lastUserRef}
      className="flex flex-col gap-2 border-2 py-2 cursor-pointer"
      onClick={() => {
        window.scrollTo(0, 0);
        setUserFriends([]);
        setId(id);
        setDataLength(20);
        navigate(`/user/${id}`);
      }}
    >
      <img
        src={imageUrl}
        alt="contanct image"
        className="w-full aspect-square"
      />
      <h2 className="font-bold pl-2">{name}</h2>
      <h3 className="pl-2">{title}</h3>
    </div>
  );
};

export default ContactContainer;
