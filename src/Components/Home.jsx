import React, { useContext } from "react";
import { Context } from "../Context/Context";
import ContactContainer from "./ContactContainer";

const Home = () => {
  const { allData, lastUserRef } = useContext(Context);

  return (
    <div className=" max-w-6xl w-full sm:w-[94%] m-auto  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-2 pb-10">
      {allData.map((item, index) => {
        if (allData.length === index + 1) {
          return (
            <ContactContainer
              lastUserRef={lastUserRef}
              key={item.id}
              id={item.id}
              name={`${item.prefix} ${item.name} ${item.lastName}`}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          );
        }

        return (
          <ContactContainer
            key={item.id}
            id={item.id}
            name={`${item.prefix} ${item.name} ${item.lastName}`}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default Home;
