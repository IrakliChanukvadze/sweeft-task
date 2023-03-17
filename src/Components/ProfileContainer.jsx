import React from "react";

const ProfileContainer = ({ user }) => {
  const userInfo = [
    {
      title: "Full Name",
      content: `${user.prefix} ${user.name} ${user.lastName}`,
    },
    { title: "Email", content: user.email },
    {
      title: "Company",
      content: `${user?.company?.suffix} ${user?.company?.name}`,
    },
    { title: "Job Area", content: user.jobArea },
    { title: "Job Descriptor", content: user.jobDescriptor },
    { title: "Job Type", content: `${user.jobType}` },
    { title: "Ip Adress", content: user.ip },
  ];
  const adressKeys = user.address && Object.keys(user.address);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center py-6 w-full">
      <div className="w-full h-full max-h-80 lg:max-h-[1000px]">
        <img
          src={user.imageUrl}
          alt="profile image"
          className="h-full w-full"
        />
      </div>

      <div className=" relative px-4 py-6 border-2 flex flex-col h-full gap-2">
        <div className="absolute top-0 left-6 -translate-y-[50%] bg-white px-2">
          info
        </div>
        {userInfo?.map((item) => (
          <h2 key={item.title}>
            <span className="font-bold">{item.title}</span>: {item.content}
          </h2>
        ))}
      </div>
      <div className=" relative px-4  py-6 border-2 flex flex-col h-full gap-2">
        <div className="absolute top-0 left-6 -translate-y-[50%] bg-white px-2">
          adress
        </div>
        {adressKeys?.map((item) => (
          <h2 key={item}>
            <span className="font-bold">{item}</span>: {user?.address[item]}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default ProfileContainer;
