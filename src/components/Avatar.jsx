import React from "react";

const Avatar = (prop) => {
  return (
    <div>
      <img src={prop.src} alt="avatar_img" className="circle-img" />
    </div>
  );
};

export default Avatar;
