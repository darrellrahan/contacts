import React from "react";
import Info from "./Info";
import Avatar from "./Avatar";

const Card = (prop) => {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{prop.name}</h2>
        <Avatar src={prop.img} />
      </div>
      <div className="bottom">
        <Info info={prop.phone} />
        <Info info={prop.email} />
      </div>
    </div>
  );
};

export default Card;
