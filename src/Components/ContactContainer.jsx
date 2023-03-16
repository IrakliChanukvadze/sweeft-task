import React from "react";
import { useNavigate } from "react-router-dom";

const ContactContainer = ({ id, imageUrl, name, title }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-2 border-2 border-red-400 cursor-pointer"
      onClick={() => navigate(`/user/${id}`)}
    >
      <img
        src={imageUrl}
        alt="contanct image"
        className="w-full aspect-square"
      />
      <h2>{name}</h2>
      <h3>{title}</h3>
    </div>
  );
};

export default ContactContainer;
